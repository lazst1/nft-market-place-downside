import Page from 'src/components/Page';
import { useWeb3React } from '@web3-react/core';
import {
  ACTIVE_NETWORK,
  MarketplaceContract,
  NftTokenAddress,
} from 'src/constants';
import { getContract } from 'src/utils';
import { useEffect, useContext, useState } from 'react';
import React from 'react';
import MarketplaceABI from 'src/abis/MarketplaceABI.json';
import NftTokenABI from 'src/abis/NftTokenABI.json';
import { ethers } from 'ethers';
import moment from 'moment';
import axios from 'axios';
import apiConfig from 'src/config/ApiConfig';
import NFTCard from '../Home/Ledger/NFTCard';
import { useHistory } from 'react-router-dom';

export default function History() {
  const [listData, setListdata] = useState([]);
  const history = useHistory();
  const { active, account, chainId, library } = useWeb3React();

  const token = window.sessionStorage.getItem('token');

  const listNftHanlder = async () => {
    try {
      const res = await axios.get(
        apiConfig.placeOrderList,
        { limit: 100 },
        {
          headers: {
            token,
          },
        }
      );
      console.log('res', res);

      if (res.data.response_code === 200) {
        setListdata(res.data.result);
      } else {
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    if (account) {
      listNftHanlder();
    }
  }, [account]);

  // const getData = async () => {
  //   const nftcontract = getContract(NftTokenAddress, NftTokenABI, library, account);
  //   const contract = getContract(MarketplaceContract, MarketplaceABI, library, account);
  //    const nftres = await nftcontract.totalSupply();
  //    var totalSupplyCount = nftres.toString()
  //    let arrayTotal = [];
  //    for(var i =0; i < totalSupplyCount; i++){
  //     let obj = {}
  //      const nftIMage = await nftcontract.tokenURI (i);
  //      const nftName = await nftcontract.extraInfoMap (i);
  //      const res = await contract.orderByAssetId(NftTokenAddress, i);

  //      var getPrice = ethers.utils.formatEther(res.price).toString()

  //      let epoch = res.expiresAt;
  //      let result = moment(epoch).format('LLLL');
  //     //console.log("result",result)

  //      obj.name = nftName.metaData;
  //      obj.Image = nftIMage;
  //      obj.Price = getPrice;

  //      obj.Time = result;

  //      arrayTotal.push(obj)

  //  }
  //   //console.log(arrayTotal)
  //   setListdata(arrayTotal)
  //  };

  //  useEffect(() => {
  //    if (account) {
  //      getData();
  //    }
  //  }, [account]);

  return (
    <Page title="NFT More">
      <>
        <section className="search-section">
          <div className="container-1440">
            <div className="row">
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
            </div>
            <div className="collapse" id="collapseExample12">
              <div className="card card-body checkbox_div pb-0">
                <div className="row">
                  <div className="col-md-12 col-lg-10 p-0 row mb-3">
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        List Price Available
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Open Offer Available
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Creator Owned
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Sold
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Reserve Price Set
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Music
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 mb-3 pl-0">
                    <label className="check_box">
                      Most Popular
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-12 col-lg-10 p-0 row mb-3">
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Art
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Domin Names
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Virtual Worlds
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Trading Cards
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Collecttibles
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Sports
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 mb-3 pl-0">
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
        <section className="mt-5 mb-5 ledger">
          <div className="container-1440">
            <div
              className="row pb-2"
              style={{ borderBottom: '1px solid #000' }}
            >
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
                    Domain Name
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-2">
                  <label className="check_box">
                    Virtual worlds
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-2">
                  <label className="check_box">
                    Trading cards
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-2">
                  <label className="check_box">
                    Collectibles
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
              <div className="col-md-12 col-lg-2">
                <label className="check_box">
                  Utility
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="row pb-2 mt-4">
              <div className="col-md-12 col-lg-6">
                <div className=" filter-row ">
                  <h4>1,291,029 results</h4>
                  <div className="select-div">
                    Buy Now{' '}
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                  </div>
                  <span>Clear All</span>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <select className="form-control">
                  <option>Buy Now</option>
                  <option>On Action</option> <option>New</option>{' '}
                  <option>Has offer</option>
                </select>
              </div>
              <div className="col-md-4 col-lg-2">
                <select className="form-control">
                  <option>Collections</option>
                  <option>Collections</option> <option>Collections</option>{' '}
                  <option>Collections</option>
                </select>
              </div>
              <div className="col-md-4 col-lg-2">
                <select className="form-control">
                  <option>On sale in</option>
                  <option>On sale in</option> <option>On sale in</option>{' '}
                  <option>On sale in</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 mb-5 ledger">
          <div className="container-1440">
            <ul className="product-ul row mt-3 ">
              {listData.length > 0 &&
                listData.map((item, index) => (
                  <div key={index} className=" col-xl-3 col-lg-4 col-md-6 mb-4">
                    <NFTCard item={item} history={history} />
                  </div>
                ))}
            </ul>
          </div>
        </section>
      </>
    </Page>
  );
}
