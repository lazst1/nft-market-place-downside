import SliderCard from './SliderCard';
import { useWeb3React } from '@web3-react/core';
import {
  ACTIVE_NETWORK,
  MarketplaceContract,
  NftTokenAddress,
} from 'src/constants';
import { getContract } from 'src/utils';
import { useEffect, useContext, useState } from 'react';
import React from 'react';
import MarketplaceABI from 'src/abis/MarketplaceABI.json';
import NftTokenABI from 'src/abis/NftTokenABI.json';

import { ethers } from 'ethers';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

function customJS() {
  window.$('.slickone').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          centerPadding: '110px',
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '110px',
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '110px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
    ],
  });
}

export default function Slider({ listData }) {
  const [data, setdata] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setdata(listData.slice(0, 10));
  }, [listData]);

  useEffect(() => {
    setTimeout(() => {
      console.log('************');
      customJS();
    }, 1000);
  }, [data]);

  // const { active, account, chainId, library } = useWeb3React();

  // const getData = async () => {
  //   const nftcontract = getContract(
  //     NftTokenAddress,
  //     NftTokenABI,
  //     library,
  //     account
  //   );
  //   const contract = getContract(
  //     MarketplaceContract,
  //     MarketplaceABI,
  //     library,
  //     account
  //   );
  //   const nftres = await nftcontract.totalSupply();
  //   var totalSupplyCount = nftres.toString();
  //   let arrayTotal = [];
  //   for (var i = 0; i < totalSupplyCount; i++) {
  //     let obj = {};
  //     const nftIMage = await nftcontract.tokenURI(i);
  //     const nftName = await nftcontract.extraInfoMap(i);
  //     const res = await contract.orderByAssetId(NftTokenAddress, i);

  //     var getPrice = ethers.utils.formatEther(res.price).toString();

  //     let epoch = res.expiresAt;
  //     let result = moment(epoch).format('LLLL');
  //     //console.log("result",result)
  //     obj.name = nftName.metaData;
  //     obj.Image = nftIMage;
  //     obj.Price = getPrice;

  //     obj.Time = result;

  //     arrayTotal.push(obj);
  //   }
  //   // console.log(arrayTotal)
  //   setListdata(arrayTotal);

  //   setTimeout(() => {
  //     customJS();
  //   }, 10);
  // };

  // useEffect(() => {
  //   if (account) {
  //     getData();
  //   }
  // }, [account]);

  // useEffect(() => {
  //   customJS();
  // });
  return (
    <section className="mt-35">
      <div className="slider slickone">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <SliderCard
                data={item}
                key={`card${index}`}
                index={index}
                history={history}
              />
            );
          })}
      </div>
    </section>
  );
}
