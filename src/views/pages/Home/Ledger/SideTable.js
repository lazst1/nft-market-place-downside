import React, { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "src/config/ApiConfig";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // hideShow: {
  //   display: "none",
  // },
}));
export default function SideTable() {
  const classes = useStyles();
  const token = window.sessionStorage.getItem("token");
  const [listdata, setlistdata] = useState([]);
  const [data, setdata] = useState([]);
  const [nftdata, setnftdata] = useState([]);
  const [canceldata, setcanceldata] = useState([]);
  const [showdata, setshowdata] = useState("");
  // const [loader, setLoader] = useState(true);
  //SOLD

  const soldhendler = async (page, limit) => {
    // setLoader(true);

    setlistdata([]);
    setdata([]);
    setnftdata([]);
    setcanceldata([]);
    await axios({
      method: "GET",
      url: apiConfig.sellOrderList,
      // location.search.substring(1, location.search.length),
      headers: {
        token,
      },
      params: {
        page,
      },
      params: {
        limit,
      },
    }).then(async (res) => {
      if (res.data.response_code === 200) {
        setlistdata(res.data.result.docs);
        console.log("hellooooooooooooo", res.data.result.docs);
        // setLoader(false);
        // setviewdata(res.data.result.nftId);

        console.log("dattaaaaaa++++++>>>12", res.data.result);
        // listuserapi();
      } else {
        setshowdata("Data not found");
      }
    });
  };

  useEffect(() => {
    soldhendler();
  }, []);

  //PLACEORDERLIST

  const CreatePlaceorderlist = async (page, limit) => {
    setlistdata([]);
    setdata([]);
    setnftdata([]);
    setcanceldata([]);
    await axios({
      method: "GET",
      url: apiConfig.placeOrderList,
    }).then(async (res) => {
      if (res.data.response_code === 200) {
        setdata(res.data.result);
        // setviewdata(res.data.result.nftId);

        // listuserapi();
      }
      console.log("dattaaaaaa++++++>>>12345", res.data.result);
    });
    console.log("datadata12@", data);
  };
  console.log("datadata123", data);

  // CancelOrderListData

  const CreateCancelorderlist = async (page, limit) => {
    setlistdata([]);
    setdata([]);
    setnftdata([]);
    setcanceldata([]);
    await axios({
      method: "GET",
      url: apiConfig.cancelOrderList,
      headers: {
        token,
      },
      params: {
        page,
      },
      params: {
        limit,
      },
    }).then(async (res) => {
      if (res.data.response_code === 200) {
        setcanceldata(res.data.result.docs);
        // setviewdata(res.data.result.nftId);

        // listuserapi();
      }
      console.log("dattaaaaaa++++++>>>12345", res.data.result);
    });
    console.log("datadata12@", canceldata);
  };
  console.log("datadata123", canceldata);

  //ListAllNft

  const CreateNftlist = async (page, limit) => {
    setlistdata([]);
    setdata([]);
    setnftdata([]);
    setcanceldata([]);
    await axios({
      method: "POST",
      url: apiConfig.listAllCreatedNft,
      // headers: {
      //   token,
      // },
      params: {
        page: 1,
      },
      params: {
        limit: 10,
      },
    }).then(async (res) => {
      if (res.data.response_code === 200) {
        console.log("asascascascasc", res.data.result.docs);
        setnftdata(res.data.result.docs);
        // setviewdata(res.data.result.nftId);

        // listuserapi();
      }
      console.log("dattaaaaaa++++++>>>12345", res.data.result);
    });
    console.log("datadata12@", nftdata);
  };
  console.log("datadata123", nftdata);
  console.log("found@@++", showdata);
  return (
    <>
      <div id="accordion">
        <div className="card">
          <div
            className="card-header product-car-header "
            style={{ borderTop: "none" }}
            id="headingOne"
          >
            <button className="btn btn-link pl-0 pr-0">
              Ledger
              <i
                className="fa fa-external-link"
                aria-hidden="true"
                style={{ color: "#19cb58" }}
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div className="table-responsive button-list-2">
        <button onClick={soldhendler} className="sold-btn">
          SOLD
        </button>
        <button
          onClick={CreateCancelorderlist}
          className="cancel-btn"
        >
          CANCELED
        </button>
        <button onClick={CreatePlaceorderlist} className="lc-btn">
          LISTED
        </button>
        <button onClick={CreateNftlist} className="lc-btn border-right">
          CREATED
        </button>
        <table className="table">
          <tbody>
            {/* <tr className="border-right">
           
                <td className="green-color  border-bottom">SOLD</td>
           
              <td className="red-color border-bottom">CANCELED</td>
              <td className="gray-color border-bottom">LISTED</td>
              <td className="gray-color border-bottom">CREATED</td>
            </tr> */}
            <tr>
              <td className="gray-color border-bottom" colspan="2">
                Item
              </td>
              <td className="gray-color border-bottom" colspan="2">
                Price (USD)
              </td>
            </tr>
            <h1>{showdata}</h1>
            {listdata.map((data, i) => {
              return (
                <tr>
                  <td colspan="2">
                    {data?.nftId?.tokenName ? data?.nftId?.tokenName : ""}
                  </td>
                  <td className="green-color" colspan="2">
                    {data?.price ? data?.price : ""}
                  </td>
                </tr>
              );
            })}

            {data.map((data2, i) => {
              return (
                <tr>
                  <td colspan="2">
                    {data2?.nftId?.tokenName ? data2?.nftId?.tokenName : ""}
                  </td>
                  <td className="green-color" colspan="2">
                    {data2.price}
                  </td>
                </tr>
              );
            })}

            {nftdata.map((nftdata, i) => {
              return (
                <tr>
                  <td colspan="2">{nftdata?.nftDetails?.tokenName}</td>
                  <td className="green-color" colspan="2">
                    0.0
                  </td>
                </tr>
              );
            })}

            {canceldata.map((data4, i) => {
              return (
                <tr>
                  <td colspan="2">HJGHJ</td>
                  <td className="red-color" colspan="2">
                    55
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="red-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr>
            <tr>
              <td colspan="2">Hashmasks #14</td>
              <td className="green-color" colspan="2">
                55
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
