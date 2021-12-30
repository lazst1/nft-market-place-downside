import { Scrollbars } from 'react-custom-scrollbars';

function CustomScrollbars(props) {
  return (
    <Scrollbars
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => <div {...props} className="notification-view" />}
      autoHide
      style={props.style}
    >
      {props.children}
    </Scrollbars>
  );
}

export default function HistoryTab() {
  return (
    <div className="current_auction p-0 border-0">
      <div className="card bg-grey mb-0">
        <div
          className="card-header product-car-header"
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
          <CustomScrollbars style={{ width: "100%", height: "370px"}}>
              <div className="table-responsive">
                <table className="BottomTable BottomTable2">
                  <tr>
                    <td className="tb-title">Event</td>
                    <td className="tb-title">Item</td>
                    <td className="tb-title">unit Price</td>
                    <td className="tb-title">Quantity</td>
                    <td className="tb-title">From</td>
                    <td className="tb-title">To</td>
                    <td className="date tb-title">Date</td>
                    <td className="txn tb-title">Txn Hash</td>
                  </tr>
                  <tr>
                    <td>Tramsfer</td>
                    <td>
                      <img
                        src="images/table-img.png"
                        className="table-img1"
                        alt=""
                      />
                      I’m selling this song as NFT
                    </td>
                    <td></td>
                    <td>1</td>
                    <td className="green">
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Kyle
                    </td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Jude
                    </td>
                    <td>
                      18th april, 2021
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
                      
                      <img
                        src="images/table-img.png"
                        className="table-img1"
                        alt=""
                      />
                      I’m selling this song as NFT
                    </td>
                    <td></td>
                    <td>1</td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Kyle
                    </td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Jude
                    </td>
                    <td>
                      17 Hours Ago
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
                      
                      <img
                        src="images/table-img.png"
                        className="table-img1"
                        alt=""
                      />
                      I’m selling this song as NFT
                    </td>
                    <td></td>
                    <td>1</td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Kyle
                    </td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Jude
                    </td>
                    <td>
                      17 Hours Ago
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
                      
                      <img
                        src="images/table-img.png"
                        className="table-img1"
                        alt=""
                      />
                      I’m selling this song as NFT
                    </td>
                    <td></td>
                    <td>1</td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Kyle
                    </td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Jude
                    </td>
                    <td>
                      17 Hours Ago
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
                      
                      <img
                        src="images/table-img.png"
                        className="table-img1"
                        alt=""
                      />
                      I’m selling this song as NFT
                    </td>
                    <td></td>
                    <td>1</td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Kyle
                    </td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Jude
                    </td>
                    <td>
                      17 Hours Ago
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
                      
                      <img
                        src="images/table-img.png"
                        className="table-img1"
                        alt=""
                      />
                      I’m selling this song as NFT
                    </td>
                    <td></td>
                    <td>1</td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Kyle
                    </td>
                    <td className="green">
                      
                      <img
                        src="images/user-table.png"
                        className="table-img"
                        alt=""
                      />
                      Jude
                    </td>
                    <td>
                      17 Hours Ago
                      <i
                        className="fa fa-external-link green"
                        aria-hidden="true"
                      ></i>
                    </td>
                    <td className="purple">0x12....0254</td>
                  </tr>
                </table>
              </div>
            </CustomScrollbars>
          </div>
        </div>
      </div>
    </div>
  );
}
