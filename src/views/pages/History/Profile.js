import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <section className="user-section">
        <div className="container-1440">
          <div className="row  align-items-center">
            <div className="col-md-4 col-lg-2 text-center">
              <img src="images/user.png" alt="" />
            </div>

            <div className="col-md-8 col-lg-10">
              <h2 className="mb-3">Kyle white</h2>
              <label className="mb-3">
                0x20f7c7e4b410af0d7309a04792fc22c7b4c7f46e
              </label>
              <br />
              <a href="#">kylewhite.com</a>
              <div className="image_tabbed pl-0">
                <ul className="share_list">
                  <li>
                    <a href="#">
                      <i className="fa fa-repeat"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="history-section">
        <div className="container-1440">
          <div className="ledger-div">
            <a href="#" className="active">
              Currently own
            </a>
            <Link to="/trading-history">Ledger</Link>
          </div>
        </div>
      </section>
    </>
  );
}
