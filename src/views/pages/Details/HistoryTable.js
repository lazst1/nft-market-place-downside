import {
  MarketplaceContract,
  NftTokenAddress,
  protectedMarketplace,
} from 'src/constants';
import MarketplaceABI from 'src/abis/MarketplaceABI.json';
import { getContract, sortAddress } from 'src/utils';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import moment from 'moment';
import protectedMarketplaceABI from 'src/abis/ProtectedMarketplaceABI.json';
import apiConfig from 'src/config/ApiConfig';
import axios from 'axios';

export default function HistoryTable({
  id,
  seller,
  bidList,
  listData,
  orderDetails,
}) {
  const { account, library } = useWeb3React();
  const [data, setData] = useState();
  const token = window.sessionStorage.getItem('token');

  const [isLoading, setIsLoading] = useState(false);
  const [issuccess, setIssuccess] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     const contract = getContract(
  //       MarketplaceContract,
  //       MarketplaceABI,
  //       library,
  //       account
  //     );
  //     const res = await contract.bidByOrderId(NftTokenAddress, id);
  //     console.log('History data', res);
  //     setData({
  //       from: res.bidder,
  //       price: res.price,
  //       expir: moment(res.expiresAt).format('LLL'),
  //     });
  //   };
  //   if (account) {
  //     getData();
  //   }
  // }, [account]);

  const acceptBid = async (data) => {
    setIsLoading(true);
    const contract = getContract(
      protectedMarketplace,
      protectedMarketplaceABI,
      library,
      account
    );
    console.log('contractcontract', contract);
    console.log('listData.placeId', listData.placeId);
    contract
      .executeBid(listData.placeId)
      .then(async (res) => {
        await res.wait();
        await acceptBidHandler(data);
      })
      .catch((err) => {
        alert(err.message);
        console.log('ERROR', err);
        setIsLoading(false);
      });
  };

  const acceptBidHandler = async (data) => {
    console.log('data', data);
    try {
      const res = await axios.post(
        apiConfig.acceptBid,
        {
          nftAddress: listData.contractAddress,
          assetId: data.tokenId,
          priceInWei: data.price,
        },
        {
          headers: {
            token,
          },
        }
      );
      console.log('res', res);
      setIsLoading(false);

      if (res.data.response_code === 200) {
        alert(res.data.response_message);
        setIsLoading(false);
        setIssuccess(true);
      } else {
      }
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
      console.log('ERROR', error);
    }
  };

  return (
    <div className="card bg-grey">
      <div
        className="card-header product-car-header borderAll"
        id="headingOne"
      >
        <button
          className="btn btn-link"
          data-toggle="collapse"
          data-target="#collapse2"
          aria-expanded="true"
          aria-controls="collapse2"
        >
          <div className="slectText">
            <p>Listings</p>
          </div>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </button>
      </div>

      <div
        id="collapse2"
        className="collapse show "
        aria-labelledby="headingOne"
        data-parent="#accordion2"
      >
        <div className="card-body product-card-body p-0">
          <div className="table-responsive">
            <table className="topTable">
              <tr>
                <th>From</th>
                <th>Price</th>
                <th>Expiration</th>
                <th></th>
              </tr>
              {bidList &&
                bidList.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <span>{sortAddress(listData.currentOwner)}</span>
                      </td>
                      <td>{data.price}</td>
                      {/* <td>{data.expir}</td> */}
                      <td>
                        <div>
                          <button
                            className="acc-btn btn-green"
                            disabled={orderDetails.sellerAddress !== account}
                            onClick={() => acceptBid(data)}
                          >
                            {isLoading ? 'PENDING...' : 'ACCEPT BID'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
