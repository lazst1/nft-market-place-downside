import React, { createContext, useEffect, useState } from 'react';
import { injected } from 'src/connectors';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import apiConfig from 'src/config/ApiConfig';

export const UserContext = createContext();

const setSession = (userAddress) => {
  if (userAddress) {
    sessionStorage.setItem('userAddress', userAddress);
  } else {
    sessionStorage.removeItem('userAddress');
  }
};

const setTokenSession = (token) => {
  if (token) {
    sessionStorage.setItem('token', token);
  } else {
    sessionStorage.removeItem('token');
  }
};

export default function AuthProvider(props) {
  const { activate, account, chainId, deactivate } = useWeb3React();
  const [isLogin, setIsLogin] = useState(false);
  let data = {
    updateUser: (account) => {
      setSession(account);
    },
    connectWallet: () => {
      activate(injected, undefined, true).catch((error) => {
        if (error) {
          activate(injected);
        }
      });
    },
    isLogin,
  };

  useEffect(() => {
    if (account) {
      connectWalletHandler(account);
    }
  }, [account]);

  console.log('account', account);

  const connectWalletHandler = async (walletAddress) => {
    try {
      const res = await axios.post(apiConfig.connectWallet, {
        walletAddress,
      });
      if (res.data.response_code === 200) {
        setTokenSession(res.data.result.token);
        setIsLogin(true);
      } else {
        deactivate();
        setIsLogin(false);
      }
    } catch (error) {
      deactivate();
      setIsLogin(false);
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    const userAddress = window.sessionStorage.getItem('userAddress');
    if (userAddress) {
      data.connectWallet();
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    data.updateUser(account);
  }, [account]); //eslint-disable-line

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
