import { sortAddress } from "src/utils";
import axios from "axios";
import { ethers } from "ethers";
import moment from "moment";
import { useState, useEffect } from "react";
import Pagination from "src/components/Pagination";

export default function Ledger({ account, contractAddress, address }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [transactionData, setTransactionData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [noOfPages, setnoOfPages] = useState(1);
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);

  const getTransactioData = async (account, contractAddress, address) => {
    try {
      const res = await axios.get(
        `https://api-kovan.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=YFPX2UAJHFYKZ5S52URHJPXEIBIP2WAUT2`
      );
      if (res.data.status === "1") {
        const result = res.data.result.filter(
          (data) =>
            data.to.toLowerCase() === contractAddress.toLowerCase() ||
            data.to.toLowerCase() === address.toLowerCase()
        );
        setTransactionData(result);
        setnoOfPages(Math.ceil(result.length / 20));

        setDataToDisplay(result.slice(0, 20));
        setPage(parseInt(result.length / 20));
      }
      console.log("res", res);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const pageWiseDate = (lower, higher) => {
    var items = transactionData.slice(lower, higher);
    setDataToDisplay(items);
  };

  useEffect(() => {
    if (account) {
      getTransactioData(account, contractAddress, address);
    }
  }, [account, contractAddress, address]);

  return (
    <div className="card bg-grey mb-10 ">
      <div
        className="card-header product-car-header borderAll border-bottom0"
        id="headingOne"
      >
        <button
          className="btn btn-link"
          data-toggle="collapse"
          data-target="#collapse3"
          aria-expanded="true"
          aria-controls="collapse3"
        >
          <div className="slectText">
            <p>Ledger</p>
          </div>
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </button>
      </div>

      <div
        id="collapse3"
        className="collapse show "
        aria-labelledby="headingOne"
        data-parent="#accordion3"
      >
        <div className="card-body product-card-body p-0">
          <div className="table-responsive">
            <table className="BottomTable">
              <tr>
                {/* <td>Event</td> */}
                <td>Price</td>
                <td>from</td>
                <td>To</td>
                <td>Date</td>
                <td>Tran Hash</td>
              </tr>
              {dataToDisplay &&
                dataToDisplay.map((data, i) => {
                  return (
                    <tr
                      key={i}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        window.open(
                          `https://kovan.etherscan.io/tx/${data.hash}`
                        )
                      }
                    >
                      {/* <td>Sale</td> */}
                      <td>{ethers.utils.formatEther(data.value)}</td>
                      <td className="green">{sortAddress(data.from)}</td>
                      <td className="green">{sortAddress(data.to)}</td>
                      <td>{moment().format("DD MMM YYYY hh:mm A")}</td>
                      <td className="purple">{sortAddress(data.hash)}</td>
                    </tr>
                  );
                })}
            </table>
            <table
              className="table mb-0 tred-history-div"
              style={{
                borderRadius: 0,
              }}
            >
              <thead>
                <tr className=" text-right" style={{ color: "black" }}>
                  <td colSpan="10 p-4">
                    <nav aria-label="Page navigation example">
                      <Pagination
                        noOfPages={noOfPages}
                        pageWiseDate={(lower, upper) => {
                          pageWiseDate(lower, upper);
                        }}
                        selectedPageNumber={(data) =>
                          setSelectedPageNumber(data)
                        }
                        max={20}
                      />{" "}
                    </nav>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
