export default function HistoryTab() {
  return (
    <div className="current_auction p-0">
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
              <table className="BottomTable BottomTable2">
                <tr>
                  <td>Event</td>
                  <td>Item</td>
                  <td>unit Price</td>
                  <td>Quantity</td>
                  <td>From</td>
                  <td>To</td>
                  <td className="date">Date</td>
                  <td className="txn">Txn Hash</td>
                </tr>
                <tr>
                  <td>Tramsfer</td>
                  <td>
                    {" "}
                    <img
                      src="images/table-img.png"
                      className="table-img"
                      alt=""
                    />
                    I’m selling this song as NFT{" "}
                  </td>
                  <td></td>
                  <td>1</td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Kyle
                  </td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Jude
                  </td>
                  <td>
                    18th april, 2021{" "}
                    <i
                      className="fa fa-external-link green"
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="purple">0x12....0254</td>
                </tr>
                <tr>
                  <td>Tramsfer</td>
                  <td>
                    {" "}
                    <img
                      src="images/table-img.png"
                      className="table-img"
                      alt=""
                    />
                    I’m selling this song as NFT{" "}
                  </td>
                  <td></td>
                  <td>1</td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Kyle
                  </td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Jude
                  </td>
                  <td>
                    17 Hours Ago{" "}
                    <i
                      className="fa fa-external-link green"
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="purple">0x12....0254</td>
                </tr>
                <tr>
                  <td>Tramsfer</td>
                  <td>
                    {" "}
                    <img
                      src="images/table-img.png"
                      className="table-img"
                      alt=""
                    />
                    I’m selling this song as NFT{" "}
                  </td>
                  <td></td>
                  <td>1</td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Kyle
                  </td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Jude
                  </td>
                  <td>
                    17 Hours Ago{" "}
                    <i
                      className="fa fa-external-link green"
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="purple">0x12....0254</td>
                </tr>
                <tr>
                  <td>Tramsfer</td>
                  <td>
                    {" "}
                    <img
                      src="images/table-img.png"
                      className="table-img"
                      alt=""
                    />
                    I’m selling this song as NFT{" "}
                  </td>
                  <td></td>
                  <td>1</td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Kyle
                  </td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Jude
                  </td>
                  <td>
                    17 Hours Ago{" "}
                    <i
                      className="fa fa-external-link green"
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="purple">0x12....0254</td>
                </tr>
                <tr>
                  <td>Tramsfer</td>
                  <td>
                    {" "}
                    <img
                      src="images/table-img.png"
                      className="table-img"
                      alt=""
                    />
                    I’m selling this song as NFT{" "}
                  </td>
                  <td></td>
                  <td>1</td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Kyle
                  </td>
                  <td className="green">
                    {" "}
                    <img
                      src="images/user-table.png"
                      className="table-img"
                      alt=""
                    />
                    Jude
                  </td>
                  <td>
                    17 Hours Ago{" "}
                    <i
                      className="fa fa-external-link green"
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td className="purple">0x12....0254</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
