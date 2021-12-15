import Page from "src/components/Page";

export default function TradingHistory() {
  return (
    <Page title="NFT Trading History">
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
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fa fa-filter" aria-hidden="true"></i>
                </a>
                <button className="btn btn-green"> Sell your NFT</button>
              </div>
            </div>
            <div className="collapse" id="collapseExample">
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
        <section className="mt-5 pb-5 ledger">
          <div className="container-1440">
            <div
              className="row pb-2"
              style={{ borderBottom: "1px solid #000" }}
            >
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
                    Domain Name
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-2">
                  <label className="check_box">
                    Virtual worlds
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-2">
                  <label className="check_box">
                    Trading cards
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-2">
                  <label className="check_box">
                    Collectibles
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
                  <div className="select-div ml-0">
                    Listings{" "}
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                  </div>
                  <span>Clear All</span>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <select className="form-control">
                  <option>Buy Now</option>
                  <option>On Action</option> <option>New</option>{" "}
                  <option>Has offer</option>
                </select>
              </div>
              <div className="col-md-4 col-lg-2">
                <select className="form-control">
                  <option>Collections</option>
                  <option>Collections</option> <option>Collections</option>{" "}
                  <option>Collections</option>
                </select>
              </div>
              <div className="col-md-4 col-lg-2">
                <select className="form-control">
                  <option>On sale in</option>
                  <option>On sale in</option> <option>On sale in</option>{" "}
                  <option>On sale in</option>
                </select>
              </div>
            </div>

            <div className="current_auction p-0">
              <div className="card bg-grey mb-10 ">
                <div
                  className="card-header product-car-header borderAll border-bottom0"
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
                    <div className="table-responsive">
                      <table className="BottomTable BottomTable2">
                        <tr>
                          <td>Event</td>
                          <td>Item</td>
                          <td>unit Price</td>
                          <td>Quantity</td>
                          <td>From</td>
                          <td>To</td>
                          <td className="date">Date</td>
                        </tr>
                        <tr>
                          <td>Tramsfer</td>
                          <td>
                            {" "}
                            <img
                              src="images/table-img.png"
                              className="table-img"
                              alt=""
                            />
                            I’m selling this song as NFT{" "}
                          </td>
                          <td></td>
                          <td>1</td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Kyle
                          </td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Jude
                          </td>
                          <td>
                            18th april, 2021{" "}
                            <i
                              className="fa fa-external-link green"
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Tramsfer</td>
                          <td>
                            {" "}
                            <img
                              src="images/table-img.png"
                              className="table-img"
                              alt=""
                            />
                            I’m selling this song as NFT{" "}
                          </td>
                          <td></td>
                          <td>1</td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Kyle
                          </td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Jude
                          </td>
                          <td>
                            17 Hours Ago{" "}
                            <i
                              className="fa fa-external-link green"
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Tramsfer</td>
                          <td>
                            {" "}
                            <img
                              src="images/table-img.png"
                              className="table-img"
                              alt=""
                            />
                            I’m selling this song as NFT{" "}
                          </td>
                          <td></td>
                          <td>1</td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Kyle
                          </td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Jude
                          </td>
                          <td>
                            17 Hours Ago{" "}
                            <i
                              className="fa fa-external-link green"
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Tramsfer</td>
                          <td>
                            {" "}
                            <img
                              src="images/table-img.png"
                              className="table-img"
                              alt=""
                            />
                            I’m selling this song as NFT{" "}
                          </td>
                          <td></td>
                          <td>1</td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Kyle
                          </td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Jude
                          </td>
                          <td>
                            17 Hours Ago{" "}
                            <i
                              className="fa fa-external-link green"
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                        <tr>
                          <td>Tramsfer</td>
                          <td>
                            {" "}
                            <img
                              src="images/table-img.png"
                              className="table-img"
                              alt=""
                            />
                            I’m selling this song as NFT{" "}
                          </td>
                          <td></td>
                          <td>1</td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Kyle
                          </td>
                          <td className="green">
                            {" "}
                            <img
                              src="images/user-table.png"
                              className="table-img"
                              alt=""
                            />
                            Jude
                          </td>
                          <td>
                            17 Hours Ago{" "}
                            <i
                              className="fa fa-external-link green"
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                      </table>
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
