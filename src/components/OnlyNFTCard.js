import { sortAddress } from "src/utils";
import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import apiConfig from "src/config/ApiConfig";
import protectedMarketplaceABI from "src/abis/ProtectedMarketplaceABI.json";
import NftTokenABI from "src/abis/NftTokenABI.json";
import { ethers } from "ethers";
import { addImageHandler, getContract } from "src/utils";
import { MarketplaceContract, protectedMarketplace } from "src/constants";
import { useWeb3React } from "@web3-react/core";
import { Formik } from "formik";
import * as yep from "yup";
export default function OnlyNFTCard({ item, history }) {
  // console.log("item", item);
  const token = window.sessionStorage.getItem("token");
  const [transactionStatus, setTransactionStatus] = useState("SUBMIT");
  const { account, library } = useWeb3React();
  const [contractAddress, setContractAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isOnsale, setIsOnsale] = useState(false);
  const [isOnbid, setIsOnbid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [selectedItem, setSelectedItem] = useState();

  const getOrderIdCount = async () => {
    try {
      const orderIdCountObj = await getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      const tokenID = await orderIdCountObj.orderIdCount();
      console.log("getOrderIdCount", tokenID.toString());
      return tokenID.toString();
    } catch (error) {
      console.log("errr", error);
      return false;
    }
  };

  const placeOrderHandler = async (values, selectedData) => {
    console.log("item", item);
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      setTransactionStatus("approving...");

      await approveTokenHandler(selectedData.nftId.tokenId, selectedData);
      setTransactionStatus("submitting...");

      // const contrsct = getContract(
      //   protectedMarketplace,
      //   protectedMarketplaceABI,
      //   library,
      //   account
      // );
      // // let price = parseFloat(values.price) * 1e18;
      // let prices = ethers.utils.parseEther(values.price).toString();
      // let convertedAmount = parseFloat(prices);
      // console.log("convertedAmount", convertedAmount);
      // console.log("price", prices);
      // console.log("selectedData.contractAddress", selectedData.contractAddress);
      // console.log("selectedData.tokenId", selectedData.tokenId);
      // const createOrderRes = await contrsct.createOrder(
      //   selectedData.contractAddress,
      //   selectedData.tokenId,
      //   prices,
      //   // ethers.utils.parseEther(values.price.toString()),
      //   values.downsideProtectionRate,
      //   moment(values.downsideProtectionTime).unix(),
      //   isOnbid,
      //   moment(values.expiryTime).unix()
      // );
      // await createOrderRes.wait();
      // await placeOrderAPIHandler(values, selectedData);
      // console.log("createOrderRes", createOrderRes);
    } catch (error) {
      setErrorMsg(error.message);
      console.log("error", error);
      setIsLoading(false);
      setTransactionStatus("SUBMIT");
    }
  };

  const approveTokenHandler = async (tokenId, selectedData) => {
    console.log("tokenId", tokenId);
    console.log("selectedData", selectedData);

    const convertedId = parseInt(tokenId);
    console.log("aaaaaa", convertedId);

    try {
      const appContract = getContract(
        selectedData.contractAddress,
        NftTokenABI,
        library,
        account
      );
      console.log("appContract", appContract);
      const apr = await appContract.approve(protectedMarketplace, tokenId);
      await apr.wait();
    } catch (error) {
      setErrorMsg(error.message);
      console.log("error", error);
      setIsLoading(false);
      setTransactionStatus("SUBMIT");
    }
  };

  const placeOrderAPIHandler = async (values, selectedData) => {
    try {
      const placeId = await getOrderIdCount();
      const res = await axios.post(
        apiConfig.placeOrder,
        {
          contractAddress: selectedData.contractAddress,
          tokenId: selectedData.tokenId,
          placeId,
          description: values.description,
          currentOwner: account,
          price: values.price,
          protectionTime: moment(values.downsideProtectionTime).unix(),
          expiryTime: moment(values.expiryTime).unix(),
          orderType: isOnbid ? "AUCTION_TYPE" : "FIXED_PAY",
          protectionRate: values.downsideProtectionRate,
          nftId: selectedData._id,
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
          window.$(`#createSubOrderModal${item._id}`).modal("hide");
          setTimeout(() => {
            history.push("/");
          }, 100);
        }, 1500);
      } else {
        setErrorMsg(res.data.response_message);
      }
      console.log("res", res);
      setIsLoading(false);
      setTransactionStatus("SUBMIT");
    } catch (error) {
      setErrorMsg(error.message);
      console.log("error", error);
      setIsLoading(false);
      setTransactionStatus("SUBMIT");
    }
  };

  return (
    <li className="product-card mb-10 ">
      <div
        className="modal fade"
        id={`createSubOrderModal${item._id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="createSubOrderModal1"
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
              <h4 style={{ textAlign: "center" }}>Create Order</h4>

              <Formik
                initialValues={{
                  price: "",
                  downsideProtectionRate: "",
                  downsideProtectionTime: moment().format("YYYY-MM-DDThh:mm"),
                  expiryTime: moment().format("YYYY-MM-DDThh:mm"),
                }}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={yep.object().shape({})}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting, resetForm }
                ) => {
                  if (values.downsideProtectionRate === "") {
                    setErrors({
                      downsideProtectionRate:
                        "Please enter downside protection rate",
                    });
                  }
                  if (values.price === "" || parseFloat(values.price) < 0) {
                    console.log("--------------++++++++++");
                    setErrors({
                      price: "Please enter valid data",
                    });
                  }

                  if (
                    parseFloat(values.price) > 0 &&
                    values.downsideProtectionRate !== "" &&
                    values.buyerAddress !== ""
                  ) {
                    console.log("item----", item);
                    await placeOrderHandler(values, item);
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
                              <div className="col-md-6 col-xm-12">
                                <div style={{ padding: "30px 0px" }}>
                                  <label className="check_box">
                                    Open for bids?
                                    <input
                                      onClick={() => setIsOnbid(!isOnbid)}
                                      type="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                              <p>Price</p>
                              <input
                                className=""
                                type="number"
                                style={{ width: "100%" }}
                                name="price"
                                autoComplete="off"
                                placeholder=""
                                value={values.price}
                                error={Boolean(touched.price && errors.price)}
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
                                style={{ width: "100%" }}
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
                                style={{ width: "100%" }}
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
                                style={{ width: "100%" }}
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
                        </div>
                      </div>

                      <div className="row text-center mt-2">
                        <div className="col-md-12 col-xm-12">
                          {errorMsg && (
                            <p style={{ color: "red" }}>{errorMsg}</p>
                          )}
                          {successMsg && (
                            <p style={{ color: "green" }}>{successMsg}</p>
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

      <div className="card-img2">
        <div className="product-discount">
          {" "}
          90% / 365 <br />
          <span>Downside protection</span>
        </div>
        <img
          src={item?.uri ? item.uri : item?.nftId ? item?.nftId?.uri : ""}
          alt={"IMG"}
          className="product-img"
        />
      </div>
      <div className="product-contant">
        {/* <div className="like">
          124 <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        </div> */}
        <h6>{item?.tokenName ? item.tokenName : item?.nftId?.tokenName}</h6>
        {/* <table className="mt-3">
          <tr>
            <td>
              <label>
                Transferred{" "}
                <sup>
                  <div className="hover-content">
                    <i className="fa fa-question-circle" aria-hidden="true"></i>
                    <div className="mark-content mark-content2">
                      Creators offering downside protection receive rewards in
                      the same token invested with through 3rd party staking
                      providers like Venus. You earn APY rewards while
                      inc+reasing your attractiveness to buyers! With NFT Max,
                      you never pay to list only a small percentage from the APY
                      rewards.{" "}
                    </div>
                  </div>{" "}
                </sup>
              </label>
              <br />
              <span>12/28</span>
            </td>
          </tr>
        </table> */}

        <div className="hover-btn  d-flex">
          <button
            // data-toggle="modal"
            // data-target="#createSubOrderModal1"
            className="btn btn-green"
            style={{
              width: "100%",
            }}
            onClick={() => {
              // setSelectedItem(item);
              setTimeout(() => {
                window.$(`#createSubOrderModal${item._id}`).modal("show");
              }, 100);
            }}
            // onClick={() =>
            //   history.push({
            //     pathname: '/details',
            //     search: item._id,
            //     state: { item },
            //   })
            // }
          >
            Create
          </button>
        </div>
      </div>
    </li>
  );
}
