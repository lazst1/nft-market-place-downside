import Page from "src/components/Page";
import Profile from "./Profile";
import HistoryTab from "./HistoryTab";
import OffersMadeTab from "./OffersMadeTab";
import OffersRecivedTab from "./OffersRecivedTab";

export default function History() {
  return (
    <Page title="NFT History">
      <>
        <Profile />
        <section className="history-section mt-3">
          <div className="container-1440">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-4">
                <ul className="nav nav-pills " id="pills-tab" role="tablist">
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
              </div>
              <div className="col-md-12 col-lg-2">
                <div className="search-box">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search "
                  />
                </div>
              </div>
              <div className="col-md-4 pl-0 col-lg-2">
                <select className="form-control">
                  <option>Event type</option>
                  <option>Event type</option>
                  <option>Event type</option>
                </select>
              </div>
              <div className="col-md-4 pl-0 col-lg-2">
                <select className="form-control">
                  <option>collections</option>
                  <option>collections</option>
                  <option>collections</option>
                </select>
              </div>
              <div className="col-md-4 pl-0 col-lg-2">
                <select className="form-control">
                  <option>on sale in</option>
                  <option>on sale in</option>
                  <option>on sale in</option>
                </select>
              </div>
            </div>
            <div className="tab-content mt-3" id="pills-tabContent">
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
