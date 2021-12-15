import { useEffect } from "react";
import { Link } from "react-router-dom";
function customJS() {
  window.$(".modalLi li").click(function () {
    window.$(this).addClass("active");
    window.$(".modalLi li").not(this).removeClass("active");
    window.$(".modalContent").addClass("hide");
  });
  window.$(".details").click(function () {
    window.$(".detailsModal").removeClass("hide");
  });
  window.$(".about").click(function () {
    window.$(".aboutmodal").removeClass("hide");
  });
  window.$(".chain").click(function () {
    window.$(".chainmodal").removeClass("hide");
  });
  window.$(".protection").click(function () {
    window.$(".protectionmodal").removeClass("hide");
  });
  window.$(".modalContent .closeButton").click(function () {
    window.$(this).parent().addClass("hide");
  });
}
export default function DownsideProtection(prop) {
  useEffect(() => {
    customJS();
  });
  return (
    <>
      <div className="image_Holder">
        <figure>
          <div className="product-discount">
            {" "}
            90% / 365 <br />
            <span>Downside protection</span>
          </div>
          <img src={prop.apiimage} alt="" className="img-responsive" />
        </figure>
        <div className="modalContent detailsModal hide">
          <a className="closeButton">
            <i className="fa fa-times"></i>
          </a>
          <div className="card">
            <div className="card-header">
              <p>Details</p>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt molestias voluptates eaque illum architecto recusandae
                sed voluptate minima sit atque.
              </p>
            </div>
          </div>
        </div>
        <div className="modalContent aboutmodal hide">
          <a className="closeButton">
            <i className="fa fa-times"></i>
          </a>
          <div className="card">
            <div className="card-header">
              <p>About the Creature</p>
            </div>
            <div className="card-body">
              <div className="aboutcreature">
                <img src="images/cartoon-3.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  obcaecati enim dignissimos error recusandae saepe inventore,
                  nostrum ipsum quisquam excepturi corrupti distinctio dolore
                  ipsa deserunt!
                </p>
              </div>
              <a className="naked_button">
                <i className="fa fa-user"></i>Activity
              </a>
              <a className="naked_button">
                <i className="fa fa-twitter"></i>Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="modalContent chainmodal hide">
          <a className="closeButton">
            <i className="fa fa-times"></i>
          </a>
          <div className="card">
            <div className="card-header">
              <p>Chain Info</p>
            </div>
            <div className="card-body">
              <table>
                <tr>
                  <td>Contact Address</td>
                  <td className="green">3243tret23432</td>
                </tr>
                <tr>
                  <td>Token ID</td>
                  <td>3243tret23432</td>
                </tr>
                <tr>
                  <td>BlockChain</td>
                  <td>Etherium</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="modalContent protectionmodal hide">
          <a className="closeButton">
            <i className="fa fa-times"></i>
          </a>
          <div className="card">
            <div className="card-header">
              <p>Downside Protection</p>
            </div>
            <div className="card-body">
              <h6 className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                temporibus!
              </h6>
              <p className="light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt molestias voluptates eaque illum architecto recusandae
                sed voluptate minima sit atque.
              </p>
              <div className="datatab">
                <div className="row">
                  <div className="col-sm-6 text-center">
                    <h6>Days Left</h6>
                    <h3>56/365</h3>
                  </div>
                  <div className="col-sm-6 text-center">
                    <h6>Days Left</h6>
                    <h3>56/365</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image_tabbed d-flex modalLi">
        <ul>
          <li className="details">Details</li>
          <li className="about">About the Creature</li>
          <li className="chain">Chain info</li>
          <li className="protection">Downside Protection</li>
        </ul>
        <ul className="share_list">
          <li>
            <a href="#">
              <i className="fa fa-repeat"></i>
            </a>
          </li>
          <li>
            <Link to="/history">
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </Link>
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
    </>
  );
}
