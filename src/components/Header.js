import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import {
  ACTIVE_NETWORK,
  MarketplaceContract,
  NftTokenAddress,
} from 'src/constants';
import { sortAddress, getContract } from 'src/utils';
import { useEffect, useContext } from 'react';
import MarketplaceABI from 'src/abis/MarketplaceABI.json';
import NftTokenABI from 'src/abis/NftTokenABI.json';
import ERC20TokenABI from 'src/abis/ERC20TokenABI.json';
import { UserContext } from 'src/context/User';
import { ethers } from 'ethers';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import { HiQuestionMarkCircle } from "react-icons/hi";

const openNav = () => {
  document.getElementById('mySidenav').style.width = '300px';
};

export default function Header() {
  const user = useContext(UserContext);

  const { account, chainId } = useWeb3React();

  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <Link className="navbar-brand" to="/">
            <img src="images/Logo.png" alt="LOGO" />
          </Link>
          <div className="nev-itme-s" style={{ cursor: 'default' }}>
            <h6 className='seller-bar'> Seller 
              <sup>
                <div className="hover-content">
                  <HiQuestionMarkCircle/>
                  <div className="mark-content mark-content3">
                    If you are a seller, NFT.mx allows you to increase your success rate by offering buyers downside protection all while gaining profits from the APY in leveraging other people's money.
                  </div>
                </div>
              </sup>
             </h6>
            <h6> Buyer  
            <sup>
                <div className="hover-content">
                  <HiQuestionMarkCircle/>
                  <div className="mark-content mark-content3">
                  If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens.
                  </div>
                </div>
              </sup>
            </h6>
            <h6
              onClick={() => {
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSeEi0iLXlWlrv4Em1Cx-2MH6IPJUTCAtqYIIwg31NWTCtkj3A/viewform',
                  '_blank'
                );
              }}
              style={{ marginRight: 15, cursor: 'pointer' }}
            >
              Pre-Sale
            </h6>
            
            {user.isLogin && ACTIVE_NETWORK === chainId && (
              <h6 onClick={openNav} style={{ cursor: 'pointer' }}>
                {sortAddress(account)}
              </h6>
            )}
            {account && ACTIVE_NETWORK !== chainId && (
              <h6>Please change network to Kovan</h6>
            )}
            {!user.isLogin && (
              <h6 onClick={user.connectWallet} style={{ cursor: 'pointer' }}>
                Connect
              </h6>
            )}
            <div className="dot" onClick={openNav}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
