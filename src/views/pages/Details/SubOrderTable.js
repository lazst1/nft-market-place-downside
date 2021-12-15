import { protectedMarketplace } from 'src/constants';
import { getContract, sortAddress } from 'src/utils';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { ethers } from 'ethers';
import moment from 'moment';
import protectedMarketplaceABI from 'src/abis/ProtectedMarketplaceABI.json';
import apiConfig from 'src/config/ApiConfig';
import axios from 'axios';

export default function SubOrderTable({ subOrders, listData, orderDetails }) {
  const { account, library } = useWeb3React();
  const [isLoading, setIsLoading] = useState(false);
  const token = window.sessionStorage.getItem('token');
  const [selectedSubOrder, setSelectedSubOrder] = useState();
  const buySubOrderHandler = async (data) => {
    setSelectedSubOrder(data);
    console.log('DAYA', data, listData.placeId, data.subPlaceId);
    setIsLoading(true);
    const contract = getContract(
      protectedMarketplace,
      protectedMarketplaceABI,
      library,
      account
    );
    console.log('contract', contract);
    contract
      .buySubOrder(listData.placeId, data.subPlaceId, {
        from: account,
        value: ethers.utils.parseEther(data.tokenPrice),
      })
      .then(async (res) => {
        await res.wait();
        await sellSubOrderHandler(data);
      })
      .catch((error) => {
        alert(error.message);
        console.log('ERROR', error);
        setIsLoading(false);
      });
  };

  const sellSubOrderHandler = async (data) => {
    console.log('data', data);
    try {
      const res = await axios.post(
        apiConfig.sellSubOrder,
        {
          sellId: listData._id,
          subPlaceId: data.subPlaceId,
          currentOwner: account,
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
        setSelectedSubOrder();
      } else {
      }
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
      console.log('ERROR', error);
    }
  };

  return (
    <div className="card bg-grey mb-10 ">
      <div
        className="card-header product-car-header borderAll border-bottom0"
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
            <p>Sub Order List</p>
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
                <td>Buyer Address</td>
                <td>Price</td>
                <td>Expiration</td>
                <td></td>
              </tr>
              {subOrders &&
                subOrders.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <span>{sortAddress(data.buyerAddress)}</span>
                      </td>
                      <td>{data.tokenPrice}</td>
                      <td>
                        {moment(data.expiryTime * 1000).format(
                          'DD-MM-YYYY hh:mm:ss'
                        )}
                      </td>
                      <td>
                        <div>
                          <button
                            className="acc-btn btn-green"
                            disabled={
                              (isLoading &&
                                selectedSubOrder &&
                                selectedSubOrder._id === data._id) ||
                              orderDetails.sellerAddress === account ||
                              data.expiryTime < moment().unix()
                            }
                            onClick={() => buySubOrderHandler(data)}
                          >
                            {isLoading &&
                            selectedSubOrder &&
                            selectedSubOrder._id === data._id
                              ? 'PENDING...'
                              : data.expiryTime < moment().unix()
                              ? 'Expired'
                              : 'Buy Order'}
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
