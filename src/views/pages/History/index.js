import React from 'react';
import Page from "src/components/Page";
import Profile from "./Profile";
import HistoryTab from "./HistoryTab";
import OffersMadeTab from "./OffersMadeTab";
import OffersRecivedTab from "./OffersRecivedTab";
import { FaSearch, FaFilter, FaCaretDown, FaWindowClose } from 'react-icons/fa';
import Collapse from "@kunukn/react-collapse";

export default function History() {

  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const onInit = ({ state, style, node }) => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  return (
    <Page title="NFT History">
      <>
        <Profile />
        <section className="history-section mt-3">
          <div className="container-1440">
            <div className="row">
              <div className="col-md-12 d-flex align-items-center justify-content-between profile-md-fbar">
                <div className='d-flex align-items-center s-and-tab-bar'>
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        History
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Offers made
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Offers received
                      </a>
                    </li>
                  </ul>
                  <div className="search-box search-box-2">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search "
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center c-outer'>
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
                  <div className="c-select mr-0">
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
            <div className="tab-content profile-tabs" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <HistoryTab />
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <OffersMadeTab />
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <OffersRecivedTab />
              </div>
            </div>
          </div>
        </section>
      </>
    </Page>
  );
}
