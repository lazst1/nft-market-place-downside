import { useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { HiQuestionMarkCircle } from "react-icons/hi";

function customJS() {
  window.$(".fund-row").each(function () {
    var highestBox = 0;

    window
      .$(this)
      .find(".contant-text")
      .each(function () {
        if (window.$(this).height() > highestBox) {
          highestBox = window.$(this).height();
        }
      });

    window.$(this).find(".contant-text").height(highestBox);
  });
}
export default function SellNFT() {
  useEffect(() => {
    customJS();
  });
  return (
    <section
      className="mb-3 pt-5 text-center sell-section"
      style={{ borderTop: "1px solid #000" }}
    >
      <div className="container-fluid">
        {/* <h5>
          Sell your NFT to other people or gain popularity and we'll buy it form
          you
          <sup>
            
            <HiQuestionMarkCircle data-tip="Test"/>
          </sup>
        </h5> */}
        <div className="row fund-row">
          <div className="col-md-6 col-lg-6  col-xl-3 mb-4">
            <h6 className="mb-1 contant-text">
              Decentralized Venture <br/> Capital
              <sup>
                <div className="hover-content">
                  <HiQuestionMarkCircle/>
                  <div className="mark-content mark-content2">
                   Test
                  </div>
                </div>
              </sup>
            </h6>

            <div className="numbring fund-row2">
              <p>$</p> <p>1</p> <p className="coma"> , </p> <p>5</p> <p>5</p>
              <p>5</p> <p className="coma">,</p> <p>5</p> <p>5</p> <p>5</p>
              <p className="coma">.</p> <p>5</p> <p>5</p>
            </div>
            <small>
              <span>Avg APY 125.52% </span>
              <a href="#">Become A Baker</a>
              <a href="#">see more DVCs</a>
            </small>
          </div>
          <div className="col-md-6 col-lg-6  col-xl-3 mb-4">
            <h6 className="mb-1 contant-text">
              Total downside protection locked value
            </h6>

            <div className="numbring ">
              <p>$</p> <p>1</p> <p className="coma"> , </p> <p>5</p> <p>5</p>
              <p>5</p> <p className="coma">,</p> <p>5</p> <p>5</p> <p>5</p>
              <p className="coma">.</p> <p>3</p> <p>2</p> <p>4</p> <p>8</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6  col-xl-3 mb-4">
            <h6 className="mb-1 contant-text">Total Sales to Date</h6>

            <div className="numbring  ">
              <p>$</p> <p>1</p> <p className="coma"> , </p> <p>5</p> <p>5</p>
              <p>5</p> <p className="coma">,</p> <p>5</p> <p>5</p> <p>5</p>
              <p className="coma">.</p> <p>6</p> <p>5</p> <p>9</p> <p>1</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6  col-xl-3 mb-4">
            <h6 className="mb-1 contant-text">Total Staking Collected</h6>

            <div className="numbring  ">
              <p>$</p> <p>1</p> <p className="coma"> , </p> <p>5</p> <p>5</p>
              <p>5</p> <p className="coma">,</p> <p>5</p> <p>5</p> <p>5</p>
              <p className="coma">.</p> <p>8</p> <p>4</p> <p>2</p> <p>7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
