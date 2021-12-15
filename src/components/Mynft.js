import React, { useState, useEffect } from "react";
import Page from "src/components/Page";
import { useHistory } from "react-router";
import axios from "axios";
import apiConfig from "src/config/ApiConfig";
import { useWeb3React } from "@web3-react/core";
import { protectedMarketplace } from "src/constants";
import protectedMarketplaceABI from "src/abis/ProtectedMarketplaceABI.json";
import { getContract } from "src/utils";
import { toast } from "react-toastify";
import NFTcard from "./NFTcard";
import NFTcard1 from "./NFTcard1";
const defaultArray = [
  {
    uri: "",
    tokenName: "Chirag",
  },
];

export default function History() {
  const history = useHistory();
  const token = window.sessionStorage.getItem("token");
  const [collectionList, setCollectionList] = useState([]);
  const [soldNFTlist, setSolfNFtList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const myCollectionListhandler = async () => {
    setIsloading(true);
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.sellOrderList,
        headers: {
          token: token,
        },
      }).then(async (res) => {
        console.log("******RES****", res);
        if (res.data.response_code === 200) {
          console.log("data=====**", res.data.result.docs);
          setCollectionList(res.data.result.docs);
          setIsloading(false);
        }
      });
    } catch (error) {
      console.log("error", error);
      setIsloading(false);
    }
  };
  const mysellOrderListhandler = async () => {
    setIsloading(true);
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.viewSaleOrder,
        headers: {
          token: token,
        },
      }).then(async (res) => {
        console.log("****££**REEEES**££****", res);
        if (res.data.response_code === 200) {
          console.log("viewSaleOrderList=====**", res.data.result);
          setSolfNFtList(res.data.result);
          setIsloading(false);
        }
      });
    } catch (error) {
      setIsloading(false);
      console.log("error", error);
    }
  };
  useEffect(() => {
    myCollectionListhandler();
    mysellOrderListhandler();
  }, []);
  const [state, setSate] = useState("0");
  return (
    <Page title="NFT More">
      <>
        <section className="mt-5 mb-5">
          <div className="container-1440">
            <div className="wallet-div text-center">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-12">
                  <ul
                    className="nav nav-pills pb-5 navpb"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        My NFT
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content mt-5" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="my-collaction">
                        <h2 className="mb-3"> My NFT</h2>
                        <div className="row mt-5">
                          {isLoading ? (
                            <h5>Loading...</h5>
                          ) : (
                            collectionList &&
                            collectionList?.map((data, i) => {
                              return (
                                <div className="col-md-4 col-lg-3 col-xs-12  mb-4">
                                  <NFTcard1
                                    data={data}
                                    index={i}
                                    history={history}
                                    state={state}
                                  />
                                </div>
                              );
                            })
                          )}

                          {!isLoading &&
                            collectionList &&
                            collectionList.length === 0 && (
                              <h5>No data found...</h5>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content mt-5" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="my-collaction">
                        <h2 className="mb-3"> My sold NFT</h2>

                        <div className="row mt-5">
                          {isLoading ? (
                            <h5>Loading...</h5>
                          ) : (
                            soldNFTlist &&
                            soldNFTlist?.map((data, i) => {
                              return (
                                <div className="col-md-4 col-lg-3 col-xs-12 mb-4">
                                  <NFTcard
                                    data={data}
                                    index={i}
                                    history={history}
                                  />
                                </div>
                              );
                            })
                          )}

                          {!isLoading &&
                            soldNFTlist &&
                            soldNFTlist.length === 0 && (
                              <h5>No data found...</h5>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
      </>
    </Page>
  );
}
