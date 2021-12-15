import React, { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "src/config/ApiConfig";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import OnlyNFTCard from "src/components/OnlyNFTCard";
import Page from "src/components/Page";
import { FaCaretUp } from 'react-icons/fa';

export default function NFTList() {
  const history = useHistory();
  const token = window.sessionStorage.getItem("token");
  const [collectionList, setCollectionList] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const { active, account, chainId, library } = useWeb3React();
  const [listData, setListdata] = React.useState([]);
  const listNftHanlder = async () => {
    setIsloading(true);
    try {
      const res = await axios.get(apiConfig.withoutPlaceNftList, {
        headers: {
          token,
        },
      });
      console.log("res", res);

      if (res.data.response_code === 200) {
        console.log("res.data.result", res.data.result);
        setListdata(res.data.result);
        setIsloading(false);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };
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
          console.log("dataFine=====**", res.data.result.docs);
          setCollectionList(res.data.result.docs);
          setIsloading(false);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    if (account) {
      listNftHanlder();
      myCollectionListhandler();
    }
  }, [account]);

  return (
    <>
      <Page tittle="NFT List">
        <section className="search-section">
          <div className="container-1440">
            {/* <div className="row">
              <div className="col-md-12 col-lg-9">
                <div className="search-box">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search items, collections, and accounts"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 text-right ">
                <a
                  className="filter-icon"
                  data-toggle="collapse"
                  href="#collapseExample12"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample12"
                >
                  <i className="fa fa-filter" aria-hidden="true"></i>
                </a>
                <button className="btn btn-green"> Sell your NFT</button>
              </div>
            </div> */}
            <div className="collapse" id="collapseExample12">
              <div className="card card-body checkbox_div pb-0">
                <div className="row">
                  <div className="col-md-12 col-lg-10 p-0 row mb-3">
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        List Price Available
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Open Offer Available
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Creator Owned
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Sold
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Reserve Price Set
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Music
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2 mb-3 pl-0">
                    <label className="check_box">
                      Most Popular
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-12 col-lg-10 p-0 row mb-3">
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Art
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Domin Names
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Virtual Worlds
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Trading Cards
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Collecttibles
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-2">
                      <label className="check_box">
                        Sports
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2 mb-3 pl-0">
                    <label className="check_box">
                      Utility
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-4 mb-5 ledger">
          <div className="container-1440">
            <div className="home-main">
              <div className="home-left">{/* <SideTable /> */}</div>
              <div className="home-right">
                <div id="accordion">
                  <div className="card">
                    <div
                      className="card-header product-car-header"
                      style={{ borderTop: "none" }}
                      id="headingOne"
                    >
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Trending Collections{" "}
                        <FaCaretUp/>
                      </button>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body product-card-body p-0">
                        <ul className="product-ul row">
                          {isloading ? (
                            <h5>Loading...</h5>
                          ) : (
                            listData &&
                            listData.length > 0 &&
                            listData.map((item, index) => (
                              <div
                                key={index}
                                className=" col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                              >
                                <OnlyNFTCard item={item} history={history} />
                              </div>
                            ))
                          )}
                           {!isloading && listData && listData.length === 0 && (
                            <h5>No data found </h5>
                          )}
                          {/* {listData &&
                            listData.length > 0 &&
                            listData.map((item, index) => (
                              <div
                                key={index}
                                className=" col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                              >
                                <OnlyNFTCard item={item} history={history} />
                              </div>
                            ))} */}
                        </ul>
                        {/* <div className="text-right mt-3 mb-4">
                          <Link to="/more" className="see-more">
                            {' '}
                            See More
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-right">
                <div id="accordion">
                  <div className="card">
                    <div
                      className="card-header product-car-header"
                      style={{ borderTop: "none" }}
                      id="headingOne"
                    >
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        My owned NFT
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </button>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body product-card-body p-0">
                        <ul className="product-ul row">
                          {isloading ? (
                            <h5>Loading...</h5>
                          ) : (
                            collectionList &&
                            collectionList.length > 0 &&
                            collectionList.map((item, index) => (
                              <div
                                key={index}
                                className=" col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                              >
                                <OnlyNFTCard item={item} history={history} />
                              </div>
                            ))
                          )}

                          {/* 
                          {collectionList &&
                            collectionList.length > 0 &&
                            collectionList.map((item, index) => (
                              <div
                                key={index}
                                className=" col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                              >
                                <OnlyNFTCard item={item} history={history} />
                              </div>
                            ))} */}
                          {!isloading && collectionList && collectionList.length === 0 && (
                            <h5>No data found </h5>
                          )}
                        </ul>
                        {/* <div className="text-right mt-3 mb-4">
                          <Link to="/more" className="see-more">
                            {' '}
                            See More
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Page>
    </>
  );
}
