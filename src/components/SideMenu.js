import { Link } from "react-router-dom";
import {BsDiscord} from 'react-icons/bs';
import {FaTelegramPlane, FaFacebookF, FaTwitter, FaMediumM, FaMoon, FaSun} from 'react-icons/fa';

export default function SideMenu() {
  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
  };
  return (
    <div className="sidemenu" id="mySidenav">
      {/* <a href={false} className="closebtn" onClick={closeNav}>
        &times;
      </a> */}
      
      <ul>
        <li className="sidebar-head">
          <h6>
              A0fhsb...5X8Hg
          </h6>
          <div className="dot" onClick={closeNav}></div>
        </li>
        <li>
          <Link to="/create-nft" className="active">
            Create NFT
          </Link>
        </li>
        <li>
          <Link to="/" className="active">
              Stake / sell NFT
          </Link>
        </li>
        <li>
          <Link to="/" className="active">
              Stake / sell Land
          </Link>
        </li>
        {/* <li>
          <Link to="/nft-list" className="active">
            List NFT
          </Link>
        </li> */}
        <li className="mb-3">
          <a href={false} className="blue-active">
            Free License
          </a>
        </li>
        <li>
          <button
            className="sidemenu-a"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Marketplace<i className="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="collapse" id="collapseExample">
            <div className="card card-body p-0">
              <ul>
                <li>
                  <a href={false} className="">
                    Browse
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Rankings
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Recently sold
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Recently added
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Recently canceled
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Biggest sales
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Ending soon
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Most viewed
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <button
            className="sidemenu-a"
            data-toggle="collapse"
            href="#sidemenu2"
            role="button"
            aria-expanded="false"
            aria-controls="sidemenu2"
          >
            Community<i className="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="collapse" id="sidemenu2">
            <div className="card card-body p-0">
              <ul>
                <li>
                  <a href={false} className="">
                    Help center
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Suggestions
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href={false} className="">
            Developers
          </a>
        </li>
        <li>
          <a href={false} className="">
            Affiliate program
          </a>
        </li>
        <li className="border-bottom-li pb-4 mb-1">
          <a href={false} className="">
            Docs
          </a>
        </li>
        <li className=" pt-3">
          <a href={false} className="">
            New
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Art
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Domin names
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Virtual worlds
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Trading cards
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Collectibles
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Sports
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Utility
          </a>
        </li>
        <li className=" border-bottom-li pb-4 mb-1">
          <a href={false} className="">
            LootBoxes
          </a>
        </li>
        <li className=" pt-3">
          <button
            className="sidemenu-a"
            data-toggle="collapse"
            href="#sidemenu3"
            role="button"
            aria-expanded="false"
            aria-controls="sidemenu3"
          >
            My account<i className="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="collapse" id="sidemenu3">
            <div className="card card-body p-0">
              <ul>
                <li>
                  <Link to="/my-collection" className="">
                    My collections
                  </Link>
                </li>
                {/* <li>
                  <Link to="/my-nft" className="">
                    My NFT
                  </Link>
                </li> */}
                <li>
                  <Link to="/my-nft" className="">
                    My ledger
                  </Link>
                </li>
                <li>
                  <Link to="/my-offers" className="">
                    My offers
                  </Link>
                </li>
                <li>
                  <a href={false} className="">
                    My referrals
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Gift items
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className=" ">
          <button
            className="sidemenu-a"
            data-toggle="collapse"
            href="#sidemenu4"
            role="button"
            aria-expanded="false"
            aria-controls="sidemenu4"
          >
            
            Company <i className="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="collapse" id="sidemenu4">
            <div className="card card-body p-0">
              <ul>
                <li>
                  <a href={false} className="">
                    About
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    Join the team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className=" ">
          <button
            className="sidemenu-a"
            data-toggle="collapse"
            href="#sidemenu5"
            role="button"
            aria-expanded="false"
            aria-controls="sidemenu5"
          >
            
            Social media <i className="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="collapse" id="sidemenu5">
            <div className="card card-body p-0">
              <ul>
                <li>
                  <a href={false} className="">
                    <FaFacebookF/> Facebook
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    <FaTelegramPlane /> Telegram
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    <BsDiscord /> Discord
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href={false} className="">
                    <FaMediumM/> Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className=" ">
          <a href={false} className="">
            Privacy policy
          </a>
        </li>
        <li className=" ">
          <a href={false} className="">
            Terms of service
          </a>
        </li>
        <li className=" mt-2 mb-2 ">
          <FaMoon className="active"/>
          <FaSun/>
        </li>
        <div className="mt-3">
          <img src="images/Logo.png" />
          <br />
          <small>© 2021 NFT.mx All rights reserved</small>
          <p className="mt-3">
            <b>Powered by Atom Foundation</b> <br />
            Atom Foundation is a Decentralized Financial (DeFi) liquidity
            ecosystem powered by proprietary protocols which underlines IDO
            (Initial Dex Offerings) Auction technology, a NFT (Non-fungible
            token) marketplace with downside protection, multiple swap
            exchanges, cross network aggregation, as well as staking and pooling
            in a decentralized way.
          </p>
        </div>
      </ul>
    </div>
  );
}
