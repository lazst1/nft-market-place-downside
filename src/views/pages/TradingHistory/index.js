import React from 'react';
import Page from "src/components/Page";
import { FaSearch, FaFilter, FaCaretDown, FaWindowClose } from 'react-icons/fa';
import Collapse from "@kunukn/react-collapse";
import { Scrollbars } from 'react-custom-scrollbars';

function CustomScrollbars(props) {
  return (
    <Scrollbars
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => <div {...props} className="notification-view" />}
      autoHide
      style={props.style}
    >
      {props.children}
    </Scrollbars>
  );
}

export default function TradingHistory() {

  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const onInit = ({ state, style, node }) => {
    setIsOpen1(false);
    setIsOpen2(false);
  };

  return (
    <Page title="NFT Trading History">
      <>
        <section className="search-section">
          <div className="container-1440">
            <div className="row">
              <div className="col-md-12 col-lg-9">
                <div className="search-box ml-0">
                  <i className="fa fa-search" aria-hidden="true"></i>
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
        <section className="mt-5 pb-1 ledger">
          <div className="container-1440">
            <div
              className="row pb-2 ml-0 mr-0"
              style={{ borderBottom: "1px solid #000" }}
            >
              <div className="col-md-12 col-lg-10 p-0 row art-line">
                
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
              <div className="col-md-12 col-lg-6">
                <div className=" filter-row ">
                  <div className="select-div ml-0">
                    Listings
                    <FaWindowClose/>
                  </div>
                  <span>Clear All</span>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 d-flex justify-content-end c-outer">
                <div className="c-select">
                  <button onClick={() => setIsOpen1(state => !state)}> Event Type <FaCaretDown/></button>
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
              </div> 
            </div>
            <div className='profile-tabs'>
              <div className="current_auction p-0 border-0">
                <div className="card bg-grey mb-0 ">
                  <div
                    className="card-header product-car-header"
                    id="headingOne"
                  >
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      <div className="slectText">
                        <p>Trading History</p>
                      </div>
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                  </div>

                  <div
                    id="collapse3"
                    className="collapse show "
                    aria-labelledby="headingOne"
                    data-parent="#accordion3"
                  >
                    <div className="card-body product-card-body p-0">
                    <CustomScrollbars style={{ width: "100%", height: "370px"}}>
                      <div className="table-responsive">
                        <table className="BottomTable BottomTable2">
                          <tr>
                            <td className="tb-title">Event</td>
                            <td className="tb-title">Item</td>
                            <td className="tb-title">unit Price</td>
                            <td className="tb-title">Quantity</td>
                            <td className="tb-title">From</td>
                            <td className="tb-title">To</td>
                            <td className="date tb-title">Date</td>
                          </tr>
                          <tr>
                            <td>Transfer</td>
                            <td>
                              
                              <img
                                src="images/table-img.png"
                                className="table-img1"
                                alt=""
                              />
                              I’m selling this song as NFT
                            </td>
                            <td></td>
                            <td>1</td>
                            <td className="green">
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Kyle
                            </td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Jude
                            </td>
                            <td>
                              18th april, 2021
                              <i
                                className="fa fa-external-link green"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Transfer</td>
                            <td>
                              
                              <img
                                src="images/table-img.png"
                                className="table-img1"
                                alt=""
                              />
                              I’m selling this song as NFT
                            </td>
                            <td></td>
                            <td>1</td>
                            <td className="green">
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Kyle
                            </td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Jude
                            </td>
                            <td>
                              18th april, 2021
                              <i
                                className="fa fa-external-link green"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Transfer</td>
                            <td>
                              
                              <img
                                src="images/table-img.png"
                                className="table-img1"
                                alt=""
                              />
                              I’m selling this song as NFT
                            </td>
                            <td></td>
                            <td>1</td>
                            <td className="green">
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Kyle
                            </td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Jude
                            </td>
                            <td>
                              18th april, 2021
                              <i
                                className="fa fa-external-link green"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Transfer</td>
                            <td>
                              
                              <img
                                src="images/table-img.png"
                                className="table-img1"
                                alt=""
                              />
                              I’m selling this song as NFT
                            </td>
                            <td></td>
                            <td>1</td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Kyle
                            </td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Jude
                            </td>
                            <td>
                              17 Hours Ago
                              <i
                                className="fa fa-external-link green"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Transfer</td>
                            <td>
                              
                              <img
                                src="images/table-img.png"
                                className="table-img1"
                                alt=""
                              />
                              I’m selling this song as NFT
                            </td>
                            <td></td>
                            <td>1</td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Kyle
                            </td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Jude
                            </td>
                            <td>
                              17 Hours Ago
                              <i
                                className="fa fa-external-link green"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Transfer</td>
                            <td>
                              
                              <img
                                src="images/table-img.png"
                                className="table-img1"
                                alt=""
                              />
                              I’m selling this song as NFT
                            </td>
                            <td></td>
                            <td>1</td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Kyle
                            </td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Jude
                            </td>
                            <td>
                              17 Hours Ago
                              <i
                                className="fa fa-external-link green"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Transfer</td>
                            <td>
                              
                              <img
                                src="images/table-img.png"
                                className="table-img1"
                                alt=""
                              />
                              I’m selling this song as NFT
                            </td>
                            <td></td>
                            <td>1</td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Kyle
                            </td>
                            <td className="green">
                              
                              <img
                                src="images/user-table.png"
                                className="table-img"
                                alt=""
                              />
                              Jude
                            </td>
                            <td>
                              17 Hours Ago
                              <i
                                className="fa fa-external-link green"
                                aria-hidden="true"
                              ></i>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </CustomScrollbars>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Page>
  );
}
