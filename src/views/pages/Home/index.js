import { useEffect, useContext, useState } from 'react';

import Page from 'src/components/Page';
import Header from './Header';
import Slider from './Slider';
import SellNFT from './SellNFT';
import Ledger from './Ledger';
import DevelopersAndMarketers from './DevelopersAndMarketers';
import DecentralizedProtocol from 'src/components/DecentralizedProtocol';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import apiConfig from 'src/config/ApiConfig';

export default function Home() {
  const token = window.sessionStorage.getItem('token');
  const { active, account, chainId, library } = useWeb3React();
  const [listData, setListdata] = useState([]);
  const listNftHanlder = async () => {
    try {
      const res = await axios.get(
        apiConfig.placeOrderList,
        { limit: 100 },
        {
          headers: {
            token,
          },
        }
      );
      console.log('res', res);

      if (res.data.response_code === 200) {
        console.log('marketplaceDATa+++++++>>>>',res.data.result)
        setListdata(res.data.result);
      } else {
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    listNftHanlder();
  }, []);

  return (
    <Page title="NFT Marketplace">
      <>
        <Header />
        <Slider listData={listData} />
        <SellNFT />
        <Ledger listData={listData} />
        <DecentralizedProtocol />
       <DevelopersAndMarketers /> 
      </>
    </Page>
  );
}
