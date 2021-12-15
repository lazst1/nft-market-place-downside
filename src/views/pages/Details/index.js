import { useWeb3React } from "@web3-react/core";
import {
  MarketplaceContract,
  NftTokenAddress,
  protectedMarketplace,
} from "src/constants";
import { getContract } from "src/utils";
import { useEffect, useContext, useState } from "react";
import React from "react";
import MarketplaceABI from "src/abis/MarketplaceABI.json";
import NftTokenABI from "src/abis/NftTokenABI.json";
import { ethers } from "ethers";
import moment from "moment";
import { useLocation } from "react-router";
import Page from "src/components/Page";
import DownsideProtection from "./DownsideProtection";
import RightDetails from "./RightDetails";
import HistoryGraph from "./HistoryGraph";
import HistoryTable from "./HistoryTable";
import Ledger from "./Ledger";
import apiConfig from "src/config/ApiConfig";
import axios from "axios";
import protectedMarketplaceABI from "src/abis/ProtectedMarketplaceABI.json";
import SubOrderTable from "./SubOrderTable";
import { useHistory } from "react-router-dom";

export default function Details() {
  const { active, account, chainId, library } = useWeb3React();
  const [listData, setListdata] = useState();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [orderDetails, setorderDetails] = useState();
  const [subOrderList, setSubOrderList] = useState([]);
  const [bidList, setBidList] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (account) {
      if (location.search.substring(1, location.search.length).length > 8) {
        getOrderDetailsHandler(
          location.search.substring(1, location.search.length)
        );
        // myNftActivityListhandler(location.search.substring(1, location.search.length))
      }
    } else {
      history.push("/");
    }
  }, [location, account]);

  const getOrderDetailsHandler = async (id) => {
    console.log("*****ID****", id);
    setIsDataLoading(true);
    const userToken = window.sessionStorage.getItem("token");
    try {
      const res = await axios.get(`${apiConfig.placeOrderListById}/${id}`, {
        headers: {
          token: userToken,
        },
      });
      setIsDataLoading(false);
      console.log("%%%%%RES%%%%%", res);
      if (res.data.response_code === 200) {
        console.log("**12**", res.data.result);
        setListdata(res.data.result);
        getOrderDetails(res.data.result.placeId);
        const resultSub = res.data.result.subOrderId.filter(
          (data) =>
            data.buyerAddress === account ||
            res.data.result.currentOwner === account
        );
        console.log("resultresult", resultSub);

        setSubOrderList(resultSub);
        setBidList(res.data.result.bidId);
      } else {
        setListdata();
      }
    } catch (error) {
      getOrderDetailsHandler(id);
      console.log("ERROR", error);
    }
  };

  const getOrderDetails = async (id) => {
    setorderDetails();
    console.log("orderId::::", id);
    try {
      const orderIdCountObj = await getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      const ordersData = await orderIdCountObj.orders(parseInt(id));
      console.log("getOrderDetails", ordersData);
      setorderDetails(ordersData);
    } catch (error) {
      console.log("errr", error);
      return false;
    }
  };
  const myNftActivityListhandler = async () => {
    const token = window.sessionStorage.getItem("token");
    console.log("confirmID",listData?.nftId?._id);
    if(listData?.nftId?._id){
      const nftID = listData?.nftId?._id
      console.log("asadasdasd",nftID);
    }
    
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.nftActivityList,
        headers: {
          token: token,
        },
        params:{
          nftId:listData?.nftId?._id
        }
      }).then(async (res) => {
        console.log("****££*", res);
        if (res.data.response_code === 200) {
          console.log("+++++****++++", res.data.result);
          // setSolfNFtList(res.data.result);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    myNftActivityListhandler()
  }, [])
  return (
    <Page title="NFT Details">
      {listData && orderDetails && (
        <>
          <section className="mt-5">
            <div className="container-1440">
              <div className="row">
                <div className="col-lg-5">
                  <DownsideProtection
                    apiimage={listData.collectionId.baseURI}
                  />
                </div>
                <div className="col-lg-7 divComponent">
                  <RightDetails
                    apiname={listData.nftId.tokenName}
                    apiprice={listData.price}
                    createdBy={orderDetails.sellerAddress}
                    expiresAt={moment(listData.expiryTime * 1000).format(
                      "DD-MM-YYYY hh:mm A"
                    )}
                    ownerOf={listData.currentOwner}
                    apiimage={""}
                    acceptedToken={listData.tokenId}
                    id={listData.tokenId}
                    metaDataHash={listData.contractAddress}
                    seller={listData.orderType}
                    orderType={listData.orderType}
                    placeId={listData.placeId}
                    listData={listData}
                    getOrderDetails={(id) => getOrderDetailsHandler(id)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="current_auction p-0  bg-transparent">
                    <div id="accordion">
                      <HistoryGraph />
                      {bidList && (
                        <HistoryTable
                          id={listData.tokenId}
                          createdBy={listData.currentOwner}
                          seller={listData.orderType}
                          bidList={bidList}
                          listData={listData}
                          orderDetails={orderDetails}
                        />
                      )}
                      {listData.subOrderId &&
                        listData.subOrderId.length > 0 && (
                          <SubOrderTable
                            id={listData.tokenId}
                            createdBy={listData.currentOwner}
                            seller={listData.orderType}
                            subOrders={subOrderList}
                            listData={listData}
                            orderDetails={orderDetails}
                          />
                        )}
                      <Ledger
                        address={protectedMarketplace}
                        account={account}
                        contractAddress={listData.collectionId.contractAddress}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Page>
  );
}
