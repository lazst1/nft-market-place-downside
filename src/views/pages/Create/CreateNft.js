import Page from 'src/components/Page';
import { useWeb3React } from '@web3-react/core';
import { MarketplaceContract, protectedMarketplace } from 'src/constants';
import { addImageHandler, getContract } from 'src/utils';
import { useEffect, useContext, useState } from 'react';
import React from 'react';
import NftTokenABI from 'src/abis/NftTokenABI.json';
import { ethers } from 'ethers';
import moment from 'moment';
import { Formik } from 'formik';
import * as yep from 'yup';
import axios from 'axios';
import apiConfig from 'src/config/ApiConfig';
import { useHistory, useLocation } from 'react-router-dom';
import protectedMarketplaceABI from 'src/abis/ProtectedMarketplaceABI.json';
export default function History() {
  const history = useHistory();
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
  const { account, library } = useWeb3React();

  useEffect(() => {
    setIsMobileView(window.screen.width < 740);
  });

  useEffect(() => {
    if (location.hash.substring(1, location.hash.length).length > 8) {
      setContractAddress(location.hash.substring(1, location.hash.length));
    }
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const _onPicChange = (e) => {
    setnftImg(e.target.files[0]);
    const value = URL.createObjectURL(e.target.files[0]);
    setImageBlob(value);
  };

  const getTokenId = async () => {
    try {
      const tokenIDContract = await getContract(
        contractAddress,
        NftTokenABI,
        library,
        account
      );
      const tokenID = await tokenIDContract.totalSupply();
      console.log('tokenID.toString()', tokenID.toString());
      return tokenID.toString();
    } catch (error) {
      console.log('errr', error);
      return false;
    }
  };

  const getOrderIdCount = async () => {
    try {
      const orderIdCountObj = await getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      const tokenID = await orderIdCountObj.orderIdCount();
      console.log('getOrderIdCount', tokenID.toString());
      return tokenID.toString();
    } catch (error) {
      console.log('errr', error);
      return false;
    }
  };

  const SubmitHandler = async (values) => {
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);
    setTransactionStatus('Loading...');
    await addImageHandler(nftImg)
      .then(async (res) => {
        console.log('addImageHandler', res);
        await uploadNFTHandler(values, res);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setIsLoading(false);
        setTransactionStatus('SUBMIT');
      });
  };

  const uploadNFTHandler = async (values, ipfsHash) => {
    setTransactionStatus('Uploading...');
    console.log('ipfsHash', ipfsHash);
    try {
      const res = await axios.post(
        apiConfig.uploadNFT,
        {
          tokenName: values.name,
          description: values.description,
          ipfsHash,
        },
        {
          headers: {
            token,
          },
        }
      );
      if (res.data.response_code === 200) {
        const contract = getContract(
          contractAddress,
          NftTokenABI,
          library,
          account
        );
        console.log('contract', contract);
        const createRes = await contract.create(res.data.result, values.name);
        console.log('createRes', createRes);
        await createRes.wait();
        await createNFTHandler(values, ipfsHash);
      } else {
        setErrorMsg(res.data.response_message);
      }
    } catch (error) {
      console.log('error', error);
      setErrorMsg(error.message);
      setIsLoading(false);
      setTransactionStatus('SUBMIT');
    }
  };

  const createNFTHandler = async (values, ipfsHash) => {
    let tokenId = await getTokenId();
    setTransactionStatus('creating nft...');

    tokenId = parseInt(tokenId) - 1;
    try {
      const res = await axios.post(
        apiConfig.addNFT,
        {
          collectionId: location.search.substring(1, location.search.length),
          tokenId: tokenId,
          // contractAddress,
          tokenName: values.name,
          uri: ipfsHash,
          description: values.description,
        },
        {
          headers: {
            token,
          },
        }
      );
      console.log('res', res);
      if (res.data.response_code === 200) {
        if (isOnsale) {
          placeOrderHandler(values, ipfsHash, tokenId, res.data.result._id);
        } else {
          setSuccessMsg(res.data.response_message);
          setIsLoading(false);
          setTransactionStatus('SUBMIT');
          setTimeout(() => {
            history.push('/');
          }, 1500);
        }
      } else {
        setErrorMsg(res.data.response_message);
        setIsLoading(false);
        setTransactionStatus('SUBMIT');
      }
    } catch (error) {
      setErrorMsg(error.message);

      console.log('error', error);
      setIsLoading(false);
      setTransactionStatus('SUBMIT');
    }
  };

  const placeOrderHandler = async (values, ipfsHash, tokenId, nftID) => {
    try {
      setTransactionStatus('approving...');

      await approveTokenHandler(tokenId);
      setTransactionStatus('submitting...');

      const contrsct = getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      // let price = parseFloat(values.price) * 1e18;
      let price = ethers.utils.parseEther(values.price.toString());

      console.log('price', price);
      const createOrderRes = await contrsct.createOrder(
        contractAddress,
        tokenId,
        price,
        // ethers.utils.parseEther(values.price.toString()),
        values.downsideProtectionRate,
        moment(values.downsideProtectionTime).unix(),
        isOnbid,
        moment(values.expiryTime).unix()
      );
      await createOrderRes.wait();
      await placeOrderAPIHandler(values, ipfsHash, tokenId, nftID);
      console.log('createOrderRes', createOrderRes);
    } catch (error) {
      setErrorMsg(error.message);
      console.log('error', error);
      setIsLoading(false);
      setTransactionStatus('SUBMIT');
    }
  };

  const approveTokenHandler = async (tokenId) => {
    try {
      const appContract = getContract(
        contractAddress,
        NftTokenABI,
        library,
        account
      );
      console.log('appContract', appContract);
      const apr = await appContract.approve(protectedMarketplace, tokenId);
      await apr.wait();
    } catch (error) {
      setErrorMsg(error.message);
      console.log('error', error);
      setIsLoading(false);
      setTransactionStatus('SUBMIT');
    }
  };

  const placeOrderAPIHandler = async (values, ipfsHash, tokenId, nftID) => {
    try {
      const placeId = await getOrderIdCount();
      const res = await axios.post(
        apiConfig.placeOrder,
        {
          contractAddress,
          tokenId,
          placeId,
          description: values.description,
          currentOwner: account,
          price: values.price,
          protectionTime: moment(values.downsideProtectionTime).unix(),
          expiryTime: moment(values.expiryTime).unix(),
          orderType: isOnbid ? 'AUCTION_TYPE' : 'FIXED_PAY',
          protectionRate: values.downsideProtectionRate,
          nftId: nftID,
        },
        {
          headers: {
            token,
          },
        }
      );
      if (res.data.response_code === 200) {
        setSuccessMsg(res.data.response_message);
        setTimeout(() => {
          history.push('/');
        }, 1500);
      } else {
        setErrorMsg(res.data.response_message);
      }
      console.log('res', res);
      setIsLoading(false);
      setTransactionStatus('SUBMIT');
    } catch (error) {
      setErrorMsg(error.message);
      console.log('error', error);
      setIsLoading(false);
      setTransactionStatus('SUBMIT');
    }
  };

  return (
    <Page title="NFT More">
      <>
        <section className="mt-5 mb-5">
          <div className="container-1440">
            <div className="wallet-div text-center">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-12">
                  <div className="" style={{ height: '', padding: '0px 25px' }}>
                    <h2 className="mb-3">Create NFT</h2>
                    <Formik
                      initialValues={{
                        name: '',
                        downsideProtectionRate: '',
                        downsideProtectionTime: moment().format(
                          'YYYY-MM-DDThh:mm AA'
                        ),
                        description: '',
                        expiryTime: moment().format('YYYY-MM-DDThh:mm AA'),
                        image: '',
                        price: '',
                      }}
                      initialStatus={{
                        success: false,
                        successMsg: '',
                      }}
                      validationSchema={yep.object().shape({
                        name: yep.string().required('Please enter name'),
                        description: yep
                          .string()
                          .required('Please enter description'),
                        // price: yep.string().required('Please enter price'),
                        // expiryTime: yep
                        //   .string()
                        //   .required('Please enter expiry time'),

                        // downsideProtectionRate: yep
                        //   .string()
                        //   .required('Please enter downside protection rate'),
                        // downsideProtectionTime: yep
                        //   .string()
                        //   .required('Please enter downside protection time'),
                      })}
                      onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting, resetForm }
                      ) => {
                        if (imageBlob === '') {
                          setErrors({
                            image: 'Please select image',
                          });
                        }

                        if (isOnsale) {
                          if (values.downsideProtectionRate === '') {
                            setErrors({
                              downsideProtectionRate:
                                'Please enter downside protection rate',
                            });
                          }
                          if (
                            values.price === '' ||
                            parseFloat(values.price) < 0
                          ) {
                            console.log('--------------++++++++++');
                            setErrors({
                              price: 'Please enter valid data',
                            });
                          }
                        }
                        if (imageBlob !== '' && !isOnsale) {
                          await SubmitHandler(values);
                        } else if (
                          isOnsale &&
                          imageBlob !== '' &&
                          parseFloat(values.price) > 0 &&
                          values.downsideProtectionRate !== ''
                        ) {
                          await SubmitHandler(values);
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
                              <div className="col-md-6 col-xm-12">
                                <div className="row">
                                  <div className="col-md-12 col-xm-12">
                                    <p>Name</p>
                                    <input
                                      className=""
                                      style={{ width: '100%' }}
                                      type="text"
                                      name="name"
                                      autoComplete="off"
                                      placeholder=""
                                      value={values.name}
                                      error={Boolean(
                                        touched.name && errors.name
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                    />
                                    <p className="error">
                                      {touched.name && errors.name}
                                    </p>
                                  </div>
                                  <div className="col-md-12 col-xm-12">
                                    <p>Description</p>
                                    <textarea
                                      className=""
                                      style={{
                                        width: '100%',
                                        background: '#494949',
                                      }}
                                      type="text"
                                      name="description"
                                      autoComplete="off"
                                      placeholder=""
                                      value={values.description}
                                      error={Boolean(
                                        touched.description &&
                                          errors.description
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                    />
                                    <p className="error">
                                      {touched.description &&
                                        errors.description}
                                    </p>
                                  </div>
                                  <div className="col-md-6 col-xm-12">
                                    <p>Image</p>
                                    <input
                                      className=""
                                      type="file"
                                      onChange={_onPicChange}
                                      style={{ width: '100%' }}
                                      name=""
                                      autoComplete="off"
                                      placeholder=""
                                      name="image"
                                    />
                                    <p className="error">{errors.image}</p>
                                  </div>
                                  <div className="col-md-6 col-xm-12">
                                    <img width="150" src={imageBlob} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-md-6 col-xm-12"
                                style={
                                  !isMobileView
                                    ? {
                                        borderLeft: '2px solid #19cb58',
                                      }
                                    : {}
                                }
                              >
                                <div className="row">
                                  <div className="col-md-6 col-xm-12">
                                    <div style={{ padding: '30px 0px' }}>
                                      <label className="check_box">
                                        Put on sale?
                                        <input
                                          type="checkbox"
                                          onClick={() => setIsOnsale(!isOnsale)}
                                        />
                                        <span className="checkmark"></span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-xm-12">
                                    <div style={{ padding: '30px 0px' }}>
                                      {isOnsale && (
                                        <label className="check_box">
                                          Open for bids?
                                          <input
                                            onClick={() => setIsOnbid(!isOnbid)}
                                            type="checkbox"
                                          />
                                          <span className="checkmark"></span>
                                        </label>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {isOnsale && (
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
                                          touched.expiryTime &&
                                            errors.expiryTime
                                        )}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                      />
                                      <p className="error">
                                        {touched.expiryTime &&
                                          errors.expiryTime}
                                      </p>
                                    </div>
                                    <div className="col-md-6 col-xm-12">
                                      <p>Downside Protection Rate</p>
                                      <input
                                        className=""
                                        type="text"
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
                                  </div>
                                )}
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
                                <button disabled={isLoading} className="btn btn-green">
                                  {transactionStatus}
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>

                    {/* <p>
                      Create collections (your own storefrons), upload digital
                      creations, configurate your royalty, and sell NFTs to your
                      fans - all for free! You can also manage smart contracts
                      that you create outside NFTmx.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
      </>
    </Page>
  );
}
