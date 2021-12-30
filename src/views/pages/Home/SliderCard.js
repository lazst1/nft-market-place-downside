import { useEffect, useContext } from "react";
import React from "react";
import moment from "moment";
import ReactTooltip from 'react-tooltip';
import { HiQuestionMarkCircle } from "react-icons/hi";

function customJS(index) {
  var note = window.$('#note'),
    ts = new Date(2012, 0, 1),
    newYear = true;

  if (new Date() > ts) {
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;
    newYear = false;
  }

  window.$(`.countdown${index}`).countdown({
    timestamp: ts,
    callback: function (days, hours, minutes, seconds) {
      var message = '';

      message += days + ' day' + (days == 1 ? '' : 's') + ', ';
      message += hours + ' hour' + (hours == 1 ? '' : 's') + ', ';
      message += minutes + ' minute' + (minutes == 1 ? '' : 's') + ' and ';
      message += seconds + ' second' + (seconds == 1 ? '' : 's') + ' <br />';

      if (newYear) {
        message += 'left until the new year!';
      } else {
        message += 'left to 10 days from now!';
      }

      note.html(message);
    },
  });
}
function SliderCard({ index, data, history }) {
  useEffect(() => {
    customJS(index);
  });
  return (
    <div>
      <div className="slider-card">
        <figure className="mb-0">
          {/* <img src="images/img.png" alt="" /> */}
          <img src={data.nftId.uri} alt="" />
          <div className="green-badge">
            <h4>90% / 365</h4>
            <p>Downside Protection</p>
          </div>
        </figure>
        <div className="slider-contant">
          <div className="p-30">
            <h5 className="mb-3">{data.name}</h5>
            <p>
              Syndication type
              <sup>
                <div className="hover-content">
                  <HiQuestionMarkCircle/>
                  <div className="mark-content mark-content2">
                   Test
                  </div>
                </div>
              </sup>
            </p>
            <span>
              {data.orderType === "AUCTION_TYPE" ? "Auction" : "Sale"}
            </span>
            <p className="mt-1">
              Total locked value
              <sup>
                <div className="hover-content">
                  <HiQuestionMarkCircle/>
                  <div className="mark-content mark-content2">
                   Test
                  </div>
                </div>
              </sup> 
            </p>
            <span>
              {data.price}
              {/* <label>(Ξ 458,6645)</label> */}
            </span>
            <div className="progress mt-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '25%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="time mt-3 text-center">
              <h6 className="mb-3">Current auction ends in</h6>
              {/* <span>
                {moment(data.expiryTime * 1000).format("DD-MM-YYYY hh:mm A")}
              </span> */}
              <div className={`countdown${index}`}></div>
            </div>
          </div>

          <button
            onClick={() =>
              history.push({
                pathname: "/details",
                search: data._id,
                state: { data },
              })
            }
            className="btn btn-blue btn-block"
          >
            
            JOIN SYNDICATION
          </button>
        </div>
      </div>
    </div>
  );
}
export default React.memo(SliderCard);
