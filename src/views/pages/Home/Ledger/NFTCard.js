import { sortAddress } from "src/utils";
import React, { useContext } from "react";
import moment from "moment";
import { getContract } from "src/utils/index";
import MarketplaceABI from "src/abis/MarketplaceABI.json";
import { useWeb3React } from "@web3-react/core";
import { UserContext } from "src/context/User";
import ReactTooltip from 'react-tooltip';
import { HiQuestionMarkCircle } from "react-icons/hi";

export default function NFTCard({ item, history }) {
  const { account, chainId, library } = useWeb3React();
  console.log("++++123@", { account, chainId, library });
  const user = useContext(UserContext);
  console.log("item?._id()()()", item?._id);
  return (
        <li className="product-card mb-10 ">
          <div className="card-img2">
            <img
              src={item?.nftId?.uri ? item?.nftId?.uri : item?.nftDetails?.uri ? item?.nftDetails?.uri : ""}
              alt={"IMG"}
              className="product-img"
            />
            <div className="green-badge">
                <h4>90% / 365</h4>
                <p>Downside Protection</p>
            </div>
          </div>
          <div className="product-contant">
            <div className="like">
              124 <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </div>
            <h6>
              {item?.nftId?.tokenName
                ? item?.nftId?.tokenName
                : item?.nftDetails?.tokenName
                ? item?.nftDetails?.tokenName
                : ""}
              {` `}(
              <span>{item.orderType === "AUCTION_TYPE" ? "Auction" : "Sale"}</span>)
            </h6>
            
            <table className="mt-3">
              <tr>
                <td>
                  <label>Unique</label> 
                  {/* <br /> */}
                  {/* <span>{sortAddress(item?.currentOwner)}</span> */}
                  <span>{item?.userId?.walletAddress ?  sortAddress(item?.userId?.walletAddress) : item?.currentOwner ?  sortAddress(item?.currentOwner) : ""}</span>
                </td>
                <td>
                  <label>
                    Transferred
                    <sup>
                      <div className="hover-content">
                        <HiQuestionMarkCircle/>
                        <div className="mark-content mark-content2">
                          Creators offering downside protection receive rewards in
                          the same token invested with through 3rd party staking
                          providers like Venus. You earn APY rewards while
                          inc+reasing your attractiveness to buyers! With NFT Max,
                          you never pay to list only a small percentage from the APY
                          rewards.
                        </div>
                      </div>
                    </sup>
                  </label>
                  {/* <br /> */}
                  <span>12/28</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    ROI
                    <sup>
                      <div className="hover-content">
                        <HiQuestionMarkCircle/>
                        <div className="mark-content mark-content2 mark-contentroi mark-contentroi">
                          Creators offering downside protection receive rewards in
                          the same token invested with through 3rd party staking
                          providers like Venus. You earn APY rewards while
                          inc+reasing your attractiveness to buyers! With NFT Max,
                          you never pay to list only a small percentage from the APY
                          rewards.
                        </div>
                      </div>
                    </sup>
                  </label>
                  {/* <br /> */}
                  <span>{item?.price}</span>
                  {/* <br /> */}
                  <small>(47.81x)</small>
                </td>
                <td>
                  <label>
                    Value
                    <sup>
                      <div className="hover-content">
                        <HiQuestionMarkCircle/>
                        <div className="mark-content mark-content2">
                          Creators offering downside protection receive rewards in
                          the same token invested with through 3rd party staking
                          providers like Venus. You earn APY rewards while
                          inc+reasing your attractiveness to buyers! With NFT Max,
                          you never pay to list only a small percentage from the APY
                          rewards.
                        </div>
                      </div>
                    </sup>
                  </label>
                  {/* <br /> */}
                  <span>$0.4781</span>
                </td>
              </tr>
            </table>
            <div className="time mt-3">
              <p className="mb-3">
                Current auction ends on <br />
                {moment(item.expiryTime * 1000).format("DD-MM-YYYY hh:mm A")}
                {/* {moment(item.updatedAt * 1000).format("DD-MM-YYYY hh:mm A")} */}
              </p>
              <div className="countdown"></div>
            </div>
            {/*  */}

            {/* <div className="hover-btn by-join d-flex">
              <button
                className="btn btn-green"
                onClick={() =>
                  history.push({
                    pathname: "/details",
                    search: item._id,
                    state: { item },
                  })
                }
              >
                buy now
              </button>
            </div> */}
            {!account && (
              <div className="hover-btn by-joink " style={{ width: "100%" }}>
                <button
                  className="btn btn-black"
                  onClick={user.connectWallet}
                  style={{ width: "100%" }}
                >
                  
                  Connect Wallet
                </button>
                {/* <button
                  className="btn btn-red-text"
                  style={{ width: "100%" }}
                >
                  sold out
                </button> */}
                {/* <button
                  className="btn btn-red-text"
                  style={{ width: "100%" }}
                >
                  AUCTION CLOSED
                </button> */}
              </div>
            )}

            {/*  */}
            {account && (
              <div className="hover-btn by-join d-flex">
                {/* <button className="btn btn-grey">
                  start <br /> syndication
                </button> */}

                {/* <button className="btn btn-blue">
                  start <br /> syndication
                </button> */}

                <button className="btn btn-blue">
                  join <br /> syndication
                </button>

                <button
                  className="btn btn-green"
                  onClick={() =>
                    history.push({
                      pathname: "/details",
                      search: item?._id,
                      state: { item },
                    })
                  }
                >
                  buy now
                </button>
              </div>
            )}
          </div>
        </li>
  );
}
