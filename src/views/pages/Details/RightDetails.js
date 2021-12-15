import React, { useState } from 'react';
import { sortAddress } from 'src/utils/index';
import { getContract } from 'src/utils';
import {
  MarketplaceContract,
  NftTokenAddress,
  protectedMarketplace,
} from 'src/constants';
import MarketplaceABI from 'src/abis/MarketplaceABI.json';
import { useWeb3React } from '@web3-react/core';
import ERC20TokenABI from 'src/abis/ERC20TokenABI.json';
import { ethers } from 'ethers';
import moment from 'moment';
import protectedMarketplaceABI from 'src/abis/ProtectedMarketplaceABI.json';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as yep from 'yup';
import axios from 'axios';
import apiConfig from 'src/config/ApiConfig';

export default function RightDetails({
  apiname,
  apiprice,
  createdBy,
  expiresAt,
  ownerOf,
  apiimage,
  acceptedToken,
  id,
  metaDataHash,
  seller,
  orderType,
  placeId,
  listData,
  getOrderDetails,
}) {
  const { account, library } = useWeb3React();
  const [isApproving, setIsApproving] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [successBuy, setSuccessBuy] = useState(false);
  const [buyError, setBuyError] = useState('');

  const token = window.sessionStorage.getItem('token');
  const location = useLocation();
  const [isOnsale, setIsOnsale] = useState(false);
  const [isOnbid, setIsOnbid] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [imageBlob, setImageBlob] = useState('');
  const [nftImg, setnftImg] = useState();
  const [contractAddress, setContractAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState('SUBMIT');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const [placeBid, setPlaceBid] = useState({
    amount: '0',
    approving: false,
    bidding: false,
    date: '',
    time: '',
    success: false,
    error: '',
  });

  const _onPicChange = (e) => {
    setnftImg(e.target.files[0]);
    const value = URL.createObjectURL(e.target.files[0]);
    setImageBlob(value);
  };

  const getOrderIdCount = async () => {
    try {
      const orderIdCountObj = await getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      const tokenID = await orderIdCountObj.subOrderIdCount();
      console.log('getOrderIdCount', tokenID.toString());
      return tokenID.toString();
    } catch (error) {
      console.log('errr', error);
      return false;
    }
  };

  const createSubOrderHandler = async (values) => {
    console.log('----');
    setTransactionStatus('Pending...');
    setIsLoading(true);
    try {
      let price = ethers.utils.parseEther(values.price.toString());
      // let price = parseFloat(values.price) * 1e18;

      const contract = getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      console.log('contract', contract);
      console.log('values.buyerAddress', values.buyerAddress);

      const createSubOrder = await contract.createSubOrder(
        parseInt(placeId),
        values.buyerAddress,
        price,
        values.downsideProtectionRate,
        moment(values.downsideProtectionTime).unix(),
        moment(values.expiryTime).unix()
      );
      setTransactionStatus('Creating...');

      console.log('createSubOrder', createSubOrder);
      await createSubOrder.wait();
      await placeSubOrderHandler(values);
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  const placeSubOrderHandler = async (values) => {
    const subPlaceId = await getOrderIdCount();
    try {
      const res = await axios.post(
        apiConfig.placeSubOrder,
        {
          subPlaceId,
          orderId: listData._id,
          tokenPrice: values.price,
          protectionRate: values.downsideProtectionRate,
          protectionTime: moment(values.downsideProtectionTime).unix(),
          expiryTime: moment(values.expiryTime).unix(),
          buyerAddress: values.buyerAddress,
        },
        {
          headers: {
            token,
          },
        }
      );
      console.log('res', res);
      setTransactionStatus('Submit');
      setIsLoading(false);

      if (res.data.response_code === 200) {
        getOrderDetails(listData._id);
        window.$(`#createSubOrderModal`).modal('hide');
      } else {
      }
    } catch (error) {
      setIsLoading(false);

      placeSubOrderHandler();
      console.log('ERROR', error);
    }
  };

  const placeABidHandler = async () => {
    if (
      placeBid.amount > 0 &&
      parseFloat(placeBid.amount) > parseFloat(apiprice)
    ) {
      setPlaceBid({
        ...placeBid,
        approving: false,
        bidding: true,
        error: '',
      });
      const contract = getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      console.log('contract', contract);
      console.log('id', { id, metaDataHash, NftTokenAddress, apiprice });
      contract
        .createBid(placeId, {
          from: account,
          value: ethers.utils.parseEther(placeBid.amount),
        })
        .then(async (data) => {
          console.log('data', data);
          await data.wait();
          await placeBidHandler();
          setPlaceBid({
            ...placeBid,
            bidding: false,
            success: true,
          });
          setTimeout(() => {
            setPlaceBid({
              ...placeBid,
              success: false,
            });
          }, 3000);
        })
        .catch((err) => {
          console.log('ERROR', err);
          setPlaceBid({
            ...placeBid,
            approving: false,
            bidding: false,
            error: err.message,
          });
        });
    } else {
      setPlaceBid({
        ...placeBid,
        error:
          'Plase Enter valid bid price,bid price must be grater then price',
      });
    }
  };

  const buyNowHandler = async () => {
    console.log('pricein wallet ==>', {
      apiprice,
      seller,
      account,
    });
    setIsLoading(true);
    if (seller === account) {
      setBuyError('Seller can not buy order');
    } else {
      setBuyError('');
      setIsSending(true);

      try {
        const contract = getContract(
          protectedMarketplace,
          protectedMarketplaceABI,
          library,
          account
        );
        console.log('contract', contract);
        console.log('id', { id, metaDataHash, NftTokenAddress, apiprice });
        const buyFixedPayOrderRes = await contract.buyFixedPayOrder(placeId, {
          from: account,
          value: ethers.utils.parseEther(apiprice),
        });
        await buyFixedPayOrderRes.wait();
        await sellOrderOrderHandler();
        setSuccessBuy(true);
        setTimeout(() => {
          setSuccessBuy(false);
        }, 3000);
      } catch (error) {
        console.log('ERROR', error);
        setIsSending(false);
        setIsApproving(false);
        setBuyError(error.message);

        setIsLoading(false);
      }
    }
  };

  const sellOrderOrderHandler = async () => {
    try {
      const res = await axios.put(
        apiConfig.sellOrder,
        {
          _id: listData._id,
          currentOwner: account,
        },
        {
          headers: {
            token,
          },
        }
      );
      console.log('res', res);
      setIsLoading(false);
      setIsSending(false);

      if (res.data.response_code === 200) {
        window.$(`#exampleModalCenter1`).modal('hide');
      } else {
      }
    } catch (error) {
      setBuyError(error.message);

      sellOrderOrderHandler();
      console.log('ERROR', error);
      setIsLoading(false);
    }
  };

  const placeBidHandler = async () => {
    try {
      const res = await axios.post(
        apiConfig.placeBid,
        {
          orderId: listData._id,
          price: placeBid.amount,
          expireTime: '',
        },
        {
          headers: {
            token,
          },
        }
      );
      console.log('res', res);
      if (res.data.response_code === 200) {
        getOrderDetails(listData._id);
        window.$(`#exampleModalCenter2`).modal('hide');
      } else {
      }
    } catch (error) {
      placeBidHandler();
      console.log('ERROR', error);
    }
  };

  return (
    <div className="slider-contant">
      <div className="p-3">
        <h3 className="mb-2">{apiname} </h3>
        <div className="auctionValue">
          <p>
            created by <span>{createdBy && sortAddress(createdBy)}</span> owned
            by <span>{ownerOf && sortAddress(ownerOf)}</span>
          </p>
          <h6>{orderType === 'AUCTION_TYPE' ? 'Auction' : 'Sale'}</h6>
        </div>

        <div className="current_auction">
          <div className="row">
            <div className="col-sm-6">
              <div className="time mt-3">
                <h6 className="mb-3">Current auction ends on</h6>
                <div className="countdown">{expiresAt}</div>
              </div>
            </div>
            <div className="col-sm-6">
              <form action="">
                <select name="" id="" className="form-control">
                  <option value="d">Ethereum</option>
                  {/* <option value="d">fvedg</option>
                  <option value="d">fvedg</option>
                  <option value="d">fvedg</option> */}
                </select>
              </form>
              {orderType !== 'AUCTION_TYPE' && (
                <button
                  className="btn btn-green btn-block"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  disabled={
                    account == createdBy ||
                    listData.expiryTime < moment().unix()
                  }
                >
                  {' '}
                  BUY NOW
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="current_auction total_value text-center">
          <h3>
            Total locked value{' '}
            <sup>
              <i className="fa fa-question-circle" aria-hidden="true"></i>
            </sup>
          </h3>
          <span>
            <label>${apiprice}</label> (Ξ {apiprice})
          </span>
          <div className="progress my-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '25%' }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <button
            className="btn btn-blue btn-block"
            data-toggle="modal"
            data-target="#exampleModalCenter1"
          >
            JOIN SYNDICATION
          </button>
          {orderType !== 'FIXED_PAY' && (
            <button
              className="btn btn-green btn-block"
              data-toggle="modal"
              data-target="#exampleModalCenter2"
              disabled={
                createdBy === account || listData.expiryTime < moment().unix()
              }
              // onClick={placeABidHandler}
            >
              PLACE A BID
            </button>
          )}

          {account == createdBy && orderType === 'FIXED_PAY' && (
            <button
              className="btn btn-green btn-block"
              data-toggle="modal"
              data-target="#createSubOrderModal"
              // onClick={placeABidHandler}
            >
              CREATE SUB ORDER
            </button>
          )}

          <div
            className="modal fade"
            id="exampleModalCenter1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenter1"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered width995"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="text-center mb-20">
                    <h3>Total Locked value</h3>
                    <h4 className="green">$124,545,457</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="BottomTable">
                      <tr>
                        <td>Date</td>
                        <td>Wallet Address</td>
                        <td>ETH Amount</td>
                        <td>Ownerships %</td>
                        <td>Proof</td>
                      </tr>
                      <tr>
                        <td>19 Hour ago</td>
                        <td className="green">$12.1651</td>
                        <td>684516468</td>
                        <td>50%</td>

                        <td className="purple">3423432</td>
                      </tr>
                      <tr>
                        <td>19 Hour ago</td>
                        <td className="green">$12.1651</td>
                        <td>684516468</td>
                        <td>50%</td>

                        <td className="purple">3423432</td>
                      </tr>
                      <tr>
                        <td>19 Hour ago</td>
                        <td className="green">$12.1651</td>
                        <td>684516468</td>
                        <td>50%</td>

                        <td className="purple">3423432</td>
                      </tr>
                    </table>
                  </div>
                  <form action="">
                    <div className="input-group mt-5">
                      <div className="input-group-d">
                        <img src="images/ether.png" alt="" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer text-center flex-center">
                  <button className="btn btn-blue btn-block">
                    JOIN SYNDICATION
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="text-center mb-20">
                    <h3>Buy</h3>
                    <p>
                      Balance: {apiprice}
                      <small>(Ξ {apiprice})</small>
                    </p>
                  </div>
                  <div className="cart_item">
                    <table>
                      <tr>
                        <td>Items</td>
                        <td>Subtotal</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="items">
                            <img
                              src={apiimage ? apiimage : 'images/image.png'}
                              alt=""
                              width="30px"
                            />
                            <div className="itemname">
                              <h6 className="green">{apiname}</h6>
                              <h4>{ownerOf && sortAddress(ownerOf)}</h4>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="subtotal">
                            <h5>{apiprice}</h5>
                            <h6>{apiprice}</h6>
                            <a className="closeButton">
                              <i className="fa fa-times"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Total</td>

                        <td>
                          <div className="subtotal">
                            <h5 className="green">{apiprice}</h5>
                            <h6>{apiprice}</h6>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="text-center">
                  {buyError !== '' && (
                    <p style={{ color: 'red' }}>{buyError}</p>
                  )}
                  {successBuy && (
                    <p style={{ color: '#19cb58' }}>Successfully Executed</p>
                  )}
                </div>
                <div className="modal-footer text-center flex-center">
                  <button
                    type="button"
                    className="btn btn-green"
                    onClick={buyNowHandler}
                    disabled={isApproving || isSending || isLoading}
                  >
                    {isApproving
                      ? 'APPROVING...'
                      : isSending
                      ? 'PENDING...'
                      : 'BUY NOW'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalCenter2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle2"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="mb-20">
                    <h3>Place a Bid</h3>
                  </div>
                  <div className="container place-bid">
                    <div className="row">
                      <div className="col-sm-12 text-left">
                        <p>Price *</p>
                        <input
                          placeholder="Amount"
                          type="number"
                          style={{ width: '100%' }}
                          value={placeBid.amount}
                          onChange={(e) =>
                            setPlaceBid({
                              ...placeBid,
                              amount: e.target.value,
                            })
                          }
                        />
                      </div>
                      {/* <div className="col-sm-4">
                            <p>Expiry Date *</p>
                            <input
                              type="date"
                              style={{ width: '100%' }}
                              value={placeBid.date}
                              onChange={(e) =>
                                setPlaceBid({
                                  ...placeBid,
                                  date: e.target.value,
                                })
                              }
                            />
                          </div> */}
                      {/* <div className="col-sm-3">
                            <p>Expiry Time *</p>
                            <input
                              type="time"
                              style={{ width: '100%' }}
                              value={placeBid.time}
                              onChange={(e) =>
                                setPlaceBid({
                                  ...placeBid,
                                  time: e.target.value,
                                })
                              }
                            />
                          </div> */}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  {placeBid.error !== '' && (
                    <p style={{ color: 'red' }}>{placeBid.error}</p>
                  )}
                  {placeBid.success && (
                    <p style={{ color: '#19cb58' }}>Bid successfully Placed</p>
                  )}
                </div>
                <div className="modal-footer text-center flex-center">
                  <button
                    type="button"
                    className="btn btn-green"
                    onClick={placeABidHandler}
                    disabled={placeBid.approving || placeBid.bidding}
                  >
                    {placeBid.approving
                      ? 'APPROVING...'
                      : placeBid.bidding
                      ? 'PENDING...'
                      : 'PLACE A BID'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CREATE SUB ORDER MODAL */}
          <div
            className="modal fade"
            id="createSubOrderModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="createSubOrderModal"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered width995"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header mb-0">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h4 style={{ textAlign: 'center' }}>Create Sub Order</h4>

                  <Formik
                    initialValues={{
                      price: '',
                      downsideProtectionRate: '',
                      downsideProtectionTime:
                        moment().format('YYYY-MM-DDThh:mm'),
                      expiryTime: moment().format('YYYY-MM-DDThh:mm'),
                      buyerAddress: '',
                    }}
                    initialStatus={{
                      success: false,
                      successMsg: '',
                    }}
                    validationSchema={yep.object().shape({})}
                    onSubmit={async (
                      values,
                      { setErrors, setStatus, setSubmitting, resetForm }
                    ) => {
                      if (values.downsideProtectionRate === '') {
                        setErrors({
                          downsideProtectionRate:
                            'Please enter downside protection rate',
                        });
                      }
                      if (values.price === '' || parseFloat(values.price) < 0) {
                        console.log('--------------++++++++++');
                        setErrors({
                          price: 'Please enter valid data',
                        });
                      }

                      if (values.buyerAddress === '') {
                        setErrors({
                          buyerAddress: 'Please enter buyer address',
                        });
                      }

                      if (
                        parseFloat(values.price) > 0 &&
                        values.downsideProtectionRate !== '' &&
                        values.buyerAddress !== ''
                      ) {
                        await createSubOrderHandler(values);
                      }
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      touched,
                      values,
                      setFieldValue,
                    }) => (
                      <form noValidate onSubmit={handleSubmit}>
                        <div className="container place-bid text-left">
                          <div className="row">
                            <div className="col-md-12 col-xm-12">
                              <div className="row">
                                <div className="col-md-6 col-xm-12">
                                  <p>Price</p>
                                  <input
                                    className=""
                                    type="number"
                                    style={{ width: '100%' }}
                                    name="price"
                                    autoComplete="off"
                                    placeholder=""
                                    value={values.price}
                                    error={Boolean(
                                      touched.price && errors.price
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  />
                                  <p className="error">{errors.price}</p>
                                </div>
                                <div className="col-md-6 col-xm-12">
                                  <p>Expiry Time</p>
                                  <input
                                    className=""
                                    type="datetime-local"
                                    style={{ width: '100%' }}
                                    name="expiryTime"
                                    autoComplete="off"
                                    placeholder=""
                                    value={values.expiryTime}
                                    error={Boolean(
                                      touched.expiryTime && errors.expiryTime
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  />
                                  <p className="error">
                                    {touched.expiryTime && errors.expiryTime}
                                  </p>
                                </div>
                                <div className="col-md-6 col-xm-12">
                                  <p>Downside Protection Rate</p>
                                  <input
                                    className=""
                                    type="number"
                                    style={{ width: '100%' }}
                                    name="downsideProtectionRate"
                                    autoComplete="off"
                                    placeholder=""
                                    value={values.downsideProtectionRate}
                                    error={Boolean(
                                      touched.downsideProtectionRate &&
                                        errors.downsideProtectionRate
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  />
                                  <p className="error">
                                    {touched.downsideProtectionRate &&
                                      errors.downsideProtectionRate}
                                  </p>
                                </div>
                                <div className="col-md-6 col-xm-12">
                                  <p>Downside Protection Time</p>
                                  <input
                                    className=""
                                    type="datetime-local"
                                    style={{ width: '100%' }}
                                    name="downsideProtectionTime"
                                    autoComplete="off"
                                    placeholder=""
                                    value={values.downsideProtectionTime}
                                    error={Boolean(
                                      touched.downsideProtectionTime &&
                                        errors.downsideProtectionTime
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  />
                                  <p className="error">
                                    {touched.downsideProtectionTime &&
                                      errors.downsideProtectionTime}
                                  </p>
                                </div>
                                <div className="col-md-6 col-xm-12">
                                  <p>Buyer Address</p>
                                  <input
                                    className=""
                                    type="test"
                                    style={{ width: '100%' }}
                                    name="buyerAddress"
                                    autoComplete="off"
                                    placeholder=""
                                    value={values.buyerAddress}
                                    error={Boolean(
                                      touched.buyerAddress &&
                                        errors.buyerAddress
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                  />
                                  <p className="error">
                                    {touched.buyerAddress &&
                                      errors.buyerAddress}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row text-center mt-2">
                            <div className="col-md-12 col-xm-12">
                              {errorMsg && (
                                <p style={{ color: 'red' }}>{errorMsg}</p>
                              )}
                              {successMsg && (
                                <p style={{ color: 'green' }}>{successMsg}</p>
                              )}
                            </div>
                          </div>

                          <div className="row text-center mt-4">
                            <div className="col-md-12 col-xm-12">
                              <button disabled={isLoading} className="btn">
                                {transactionStatus}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
                {/* <div className="modal-footer text-center flex-center">
                  <button className="btn btn-blue btn-block">{'CREATE'}</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* {
   
      
   <div>
 {listData && listData.Created && 
 <div>
   <span>Name :</span> <h5> {listData.name}</h5>
   <span>Image :</span> <h5> {listData.Image}</h5>
   <span>Time :</span> <h5> {listData.Time}</h5>
   <span>Created :</span> <h5> {listData.Created}</h5>
<span>Price:</span> <h5> {listData.Price}</h5>
</div>
}
</div>
           
     
  } */}
      </div>
    </div>
  );
}
