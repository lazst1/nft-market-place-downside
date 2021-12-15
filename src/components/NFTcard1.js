import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { protectedMarketplace } from "src/constants";
import protectedMarketplaceABI from "src/abis/ProtectedMarketplaceABI.json";
import { getContract } from "src/utils";
import { toast } from "react-toastify";
export default function NFTcard1(props) {
  const { data, history, state } = props;
  const { account, library } = useWeb3React();
  const [checkForCliam, setCheckForClaim] = useState(false);
  const buyerCheckAmountHandler = async (id) => {
    console.log("***ID***", id);
    console.log("buyer");
    try {
      const contractF = await getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );
      console.log("contractF***>", contractF);

      const claimUpsideDownCheck =
        await contractF.buyerCheckClaimDownsideProtectionAmount(id);
      console.log("returnValue", claimUpsideDownCheck);
      setCheckForClaim(claimUpsideDownCheck);
      if (!claimUpsideDownCheck) {
        toast.error("Not eligible to claim downside protection yet");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const buyerClaimHandler = async (id) => {
    console.log(("IIIIIIIDDDDDDD", id));
    try {
      const contractF = await getContract(
        protectedMarketplace,
        protectedMarketplaceABI,
        library,
        account
      );

      const claimFun = await contractF.claimDownsideProtectionAmount(id);
      console.log("claimFun", claimFun);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("stateaaaaaaaaa", state);
  return (
    <div className="collaction_div">
      {/* <div className=" col-md-4 col-lg-3 col-xl-2 mb-4"> */}
        {/* <div className="collaction_div"> */}
          <div
            className="collaction_div1"
            onClick={() => {
              history.push({
                pathname: "/details",
                search: data?._id,
                //   hash: record.contractAddress,
              });
            }}
          >
            <img src={data?.nftId?.uri} alt="" />
          </div>
          <div className="collaction_div2 text-left">
            <label>{data?.nftId?.tokenName}</label>
          </div>
          <div collaction_div2>
            <button
              className="btn btn-green"
              style={{
                width: "100%",
                margin: "8px 0px",
              }}
              onClick={() => {
                buyerCheckAmountHandler(data?.placeId);
              }}
            >
              Check DP claim
            </button>

            {checkForCliam ? (
              <button
                className="btn btn-blue"
                style={{
                  width: "100%",
                  margin: "8px 0px",
                }}
                  onClick={()=>buyerClaimHandler(data?.placeId)}
              >
                Claim DP
              </button>
            ) : (
              ""
            )}
          </div>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}
