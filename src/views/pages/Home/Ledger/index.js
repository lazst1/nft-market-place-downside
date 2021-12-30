import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { useWeb3React } from "@web3-react/core";
import {
  ACTIVE_NETWORK,
  MarketplaceContract,
  NftTokenAddress,
} from "src/constants";
import { getContract } from "src/utils";
import { useEffect, useContext, useState } from "react";
import React from "react";
import MarketplaceABI from "src/abis/MarketplaceABI.json";
import NftTokenABI from "src/abis/NftTokenABI.json";
import { ethers } from "ethers";
import moment from "moment";
import SideTable from "./SideTable";
import axios from "axios";
import apiConfig from "src/config/ApiConfig";
import NFTCard from "./NFTCard";
import Pagination from "src/components/Pagination";
import { FaSearch, FaFilter, FaCaretUp } from 'react-icons/fa';

export default function Ledger({ listData }) {
  const history = useHistory();
  const [ordersearch, setOrderSearch] = useState("");
  const [nftdata, setnftdata] = useState([]);
  const [nameNo, setNameNO] = useState("");
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);
  const [noOfPages, setnoOfPages] = useState(1);

  const CreateNftlist = async (ordersearch) => {
    console.log("asa*******", ordersearch);

    await axios({
      method: "POST",
      url: apiConfig.listAllCreatedNft,
      data: { search: ordersearch },
      params: {
        page: 1,
        limit: 10,
      },
    }).then(async (res) => {
      if (res.data.response_code === 200) {
        setnftdata(res.data.result.docs);
      } else {
        setNameNO("No data found");
      }
      console.log("dattaaaaaa++++++>>>12345", res.data.result.docs);
    });
  };

  // const handleKeypress = (e) => {
  //   if (ordersearch !== "") {
  //     if (e.key === "Enter") {
  //       CreateNftlist(ordersearch);
  //     }
  //   }
  // };
  useEffect(() => {
    if (ordersearch !== "") {
      CreateNftlist(ordersearch);
    }
  }, [ordersearch]);

  const pageWiseDate = (lower, higher) => {
    var items = nftdata.slice(lower, higher);
    setnftdata(items);
  };

  console.log("listData*****", listData);
  return (
    <>
      <section className="search-section">
        <div className="container-1440">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-5">
              <div className="search-box">
                <FaSearch/>
                <input
                  type="search"
                  className="form-control"
                  style={{ color: "#fff" }}
                  placeholder="Search items, collections, and accounts"
                  value={ordersearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  // onKeyPress={handleKeypress}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-7 text-right button-list">
              <a
                className="filter-icon collapsed"
                data-toggle="collapse"
                href="#collapseExample12"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample12"
              >
                <FaFilter/>
              </a>
              <button className="btn btn-blue mr-3">       
                Launch your DVC
              </button>
              <button
                className="btn btn-green"
                onClick={() => history.push("/nft-list")}
              >
                STAKE/SELL YOUR NFT
              </button>
              {/* <button className="btn btn-green">
                STAKE/SELL YOUR LAND
              </button> */}
            </div>
          </div>
          <div className="collapse ml-2" id="collapseExample12">
            <div className="card card-body checkbox_div pb-0">
              <div className="row">
                <div className="col-md-12 col-lg-10 p-0 row mb-3">
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      List Price Available
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Open Offer Available
                      <input type="checkbox"/>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Creator Owned
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Sold
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Reserve Price Set
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Music
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-2 mb-3 pl-0">
                  <label className="check_box">
                    Most Popular
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-md-12 col-lg-10 p-0 row mb-3">
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Art
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Domin Names
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Virtual Worlds
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Trading Cards
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Collecttibles
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-2">
                    <label className="check_box">
                      Sports
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-2 mb-3 pl-0">
                  <label className="check_box">
                    Utility
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {ordersearch !== "" && (
        <section className="mt-4 mb-5 ledger">
          <div className="container-1440">
            <div className="home-main">
              <div className="home-right">
                {nftdata.length !== 0 ? (
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body product-card-body p-0">
                      <ul className="product-ul row">
                        {nftdata.length > 0 &&
                          nftdata.map((item, index) => (
                            <div
                              key={index}
                              className=" col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                            >
                              <NFTCard item={item} history={history} />
                            </div>
                          ))}
                      </ul>
                      {/* <div className="text-right mt-3 mb-4">
                      <Link to="/more" className="see-more">
                        See More
                      </Link>
                    </div> */}
                      {/* <div>
                        <Pagination
                          noOfPages={noOfPages}
                          pageWiseDate={(lower, upper) => {
                            pageWiseDate(lower, upper);
                          }}
                          selectedPageNumber={(data) =>
                            setSelectedPageNumber(data)
                          }
                          max={20}
                        />
                      </div> */}
                    </div>
                  </div>
                ) : (
                  <span>{nameNo}</span>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mt-4 mb-5 ledger">
        <div className="container-1440">
          <div className="home-main">
            <div className="home-left">
              <SideTable />
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
                      Trending Collections
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
                        {listData.length > 0 &&
                          listData.map((item, index) => (
                            <div
                              key={index}
                              className="col-20 col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                            >
                              <NFTCard item={item} history={history} />
                            </div>
                          ))}
                      </ul>
                      
                      <div className="text-right mt-3 mb-4">
                        <Link to="/more" className="see-more">
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header product-car-header"
                    id="headingTwo"
                  >
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Digital Art
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse show"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionone"
                  >
                    <div className="card-body product-card-body p-0">
                      <ul className="product-ul mt-3 row ">
                        {listData.length > 0 &&
                          listData.map((item, index) => (
                            <div
                              key={index}
                              className="col-20 col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                            >
                              <NFTCard item={item} history={history} />
                            </div>
                          ))}
                      </ul>
                      <div className="text-right mt-3 mb-4">
                        <Link to="/more" className="see-more">
                          
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              
              
                <div className="card">
                  <div
                    className="card-header product-car-header"
                    id="headingThree"
                  >
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Virtual world
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse show"
                    aria-labelledby="headingThree"
                    data-parent="#accordiontwo"
                  >
                    <div className="card-body product-card-body p-0">
                      <ul className="product-ul row mt-3 ">
                        {listData.length > 0 &&
                          listData.map((item, index) => (
                            <div
                              key={index}
                              className="col-20 col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                            >
                              <NFTCard item={item} history={history} />
                            </div>
                          ))}
                      </ul>
                      <div className="text-right mt-3 mb-4">
                        <Link to="/more" className="see-more">
                          
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-header product-car-header"
                    id="headingFour"
                  >
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Collectibles
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse show"
                    aria-labelledby="headingFour"
                    data-parent="#accordiontwo"
                  >
                    <div className="card-body product-card-body p-0">
                      <ul className="product-ul row mt-3 ">
                        {listData.length > 0 &&
                          listData.map((item, index) => (
                            <div
                              key={index}
                              className="col-20 col-xl-3 col-lg-6 col-md-6 custom-xl mb-4"
                            >
                              <NFTCard item={item} history={history} />
                            </div>
                          ))}
                      </ul>
                      <div className="text-right mt-3 mb-4">
                        <Link to="/more" className="see-more">
                          
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
