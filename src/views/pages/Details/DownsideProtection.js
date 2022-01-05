import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

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
          <div className="green-badge">
            <h4>90% / 365</h4>
            <p>Downside Protection</p>
          </div>
          <img src={prop.apiimage} alt="" className="img-responsive" />
        </figure>
        <div className="modalContent detailsModal hide">
          <a className="closeButton">
            <MdOutlineClose/>
          </a>
          <div className="card">
            <div className="card-header">
              <p>Details</p>
            </div>
            <div className="card-body">
              <p>
                Created by <span>45856...45e5</span>
              </p>
              <p className="gre-text">3D CryptoPunks only 100 different Punks will be available. Supply for each Punks: 1/1</p>
            </div>
          </div>
        </div>
        <div className="modalContent aboutmodal hide">
          <a className="closeButton">
            <MdOutlineClose/>
          </a>
          <div className="card">
            <div className="card-header">
              <p>About the Creature</p>
            </div>
            <div className="card-body">
              <div className="aboutcreature">
                <img src="images/cartoon-3.png" alt="" />
                <p className="gre-text">
                  3D CryptoPunks only 100 different Punks will be available. Supply for each Punks: 1/1. This project is not affiliated with Larva Labs
                </p>
              </div>
              <a href="/" className="naked_button">
                <i className="fa fa-user"></i>Activity
              </a>
              <a href="/" className="naked_button">
                <i className="fa fa-twitter"></i>Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="modalContent chainmodal hide">
          <a className="closeButton">
            <MdOutlineClose/>
          </a>
          <div className="card">
            <div className="card-header">
              <p>Chain Info</p>
            </div>
            <div className="card-body">
              <table>
                <tr>
                  <td>Contact Address</td>
                  <td className="green">0x495f...7b5e</td>
                </tr>
                <tr>
                  <td>Token ID</td>
                  <td>1088956575031775...</td>
                </tr>
                <tr>
                  <td>BlockChain</td>
                  <td>Ethereum</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="modalContent protectionmodal hide">
          <a className="closeButton">
            <MdOutlineClose/>
          </a>
          <div className="card">
            <div className="card-header">
              <p>Downside Protection</p>
            </div>
            <div className="card-body">
              <h6 className="">
                Your Investment Automatically Includes 100% Downside Protection for 365 days
              </h6>
              <p className="light">
                If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens.
              </p>
              <div className="datatab">
                <div className="row">
                  <div className="col-sm-6 text-center">
                    <h6>Days Left</h6>
                    <h3>58/365</h3>
                  </div>
                  <div className="col-sm-6 text-center">
                    <h6>Protection</h6>
                    <h3>100%</h3>
                  </div>
                  <div className="col-md-12 cancel-text">
                    <a href="/">Cancel NFT investment </a>
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
