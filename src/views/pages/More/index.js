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
import { FaSearch, FaFilter, FaCaretDown, FaWindowClose } from 'react-icons/fa';
import Collapse from "@kunukn/react-collapse";

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

  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const onInit = ({ state, style, node }) => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  return (
    <Page title="NFT More">
      <>
        <section className="search-section">
          <div className="container-1440">
            <div className="row">
              <div className="col-md-12 col-lg-9">
                <div className="search-box ml-0">
                <FaSearch/>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search items, collections, and accounts"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-3 text-right button-list">
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
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Open Offer Available
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Creator Owned
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Sold
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Reserve Price Set
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Music
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 mb-3 pl-0">
                    <label className="check_box">
                      Most Popular
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-md-12 col-lg-10 p-0 row mb-3">
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Art
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Domin Names
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Virtual Worlds
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Trading Cards
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Collecttibles
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="col-md-4 col-lg-2">
                      <label className="check_box">
                        Sports
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-2 mb-3 pl-0">
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
        <section className="mt-5 mb-5 ledger">
          <div className="container-1440">
            <div
              className="row pb-2 ml-0 mr-0"
              style={{ borderBottom: '1px solid #000' }}
            >
              <div className="col-md-12 col-lg-12 p-0 row art-line">
                
                  <label className="check_box mr-5 ml-3">
                    Art
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                
                
                  <label className="check_box mr-5">
                    Domain Name
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                
                
                  <label className="check_box mr-5">
                    Virtual worlds
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                
                
                  <label className="check_box mr-5">
                    Trading cards
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                
                
                  <label className="check_box mr-5">
                    Collectibles
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                
                
                  <label className="check_box mr-5">
                    Sports
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>

                  <label className="check_box mr-5">
                  Utility
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            <div className="row pb-2 mt-4">
              <div className="col-lg-12 col-xl-6">
                <div className=" filter-row ">
                  <h4>1,291,029 results</h4>
                  <div className="select-div">
                    Buy Now
                    <FaWindowClose/>
                  </div>
                  <span>Clear All</span>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 d-flex justify-content-end c-outer">
                <div className="c-select">
                  <button onClick={() => setIsOpen1(state => !state)}> Status <FaCaretDown/></button>
                  <Collapse onInit={onInit} isOpen={isOpen1} transition={true}>
                    <ul>
                      <li className='active'>Buy Now</li>
                      <li>On Action</li>
                      <li>New</li>
                      <li>Has offer</li>
                    </ul>
                  </Collapse>
                </div>
                <div className="c-select">
                  <button onClick={() => setIsOpen2(state => !state)}> Collections <FaCaretDown/></button>
                  <Collapse onInit={onInit} isOpen={isOpen2} transition={true}>
                    <div className='select-search'>
                      <input type='text' placeholder='Filter' />
                      <FaSearch/>
                    </div>
                    <ul>
                      <li><img src="images/c1.jpg" alt=""/> Jude</li>
                      <li><img src="images/c2.jpg" alt=""/> Kyle</li>
                      <li><img src="images/c3.jpg" alt=""/> Lior Gal</li>
                      <li><img src="images/c4.jpg" alt=""/> Debbie Rosenblum</li>
                      <li><img src="images/c5.jpg" alt=""/> Krunal Soni</li>
                      <li><img src="images/c6.jpg" alt=""/> Manoj Dhanak</li>
                    </ul>
                  </Collapse>
                </div>
                <div className="c-select">
                  <button onClick={() => setIsOpen3(state => !state)}> On sale in <FaCaretDown/></button>
                  <Collapse onInit={onInit} isOpen={isOpen3} transition={true}>
                    <div className='select-search'>
                      <input type='text' placeholder='Filter' />
                      <FaSearch/>
                    </div>
                    <ul>
                      <li>
                        <label className="check_box">
                          ETH
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="check_box">
                          WETH
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="check_box">
                          0xBTC
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="check_box">
                          1MT
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="check_box">
                          2XDN
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="check_box">
                          ASBT
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </Collapse>
                </div>
              </div>  
            </div>
          </div>
        </section>
        <section className="mt-5 mb-5 ledger">
          <div className="container-1440">
            <ul className="product-ul row mt-3 ">
              {listData.length > 0 &&
                listData.map((item, index) => (
                  <div key={index} className="col-xl-2 col-lg-3 col-md-6 mb-4 custom-xl">
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
