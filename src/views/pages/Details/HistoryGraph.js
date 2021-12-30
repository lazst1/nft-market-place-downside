import React from 'react';
import Collapse from "@kunukn/react-collapse";
import { FaSearch, FaFilter, FaCaretDown, FaWindowClose } from 'react-icons/fa';

export default function HistoryGraph() {

  const [isOpen1, setIsOpen1] = React.useState(false);
  const onInit = ({ state, style, node }) => {
    setIsOpen1(false);
  };

  return (
    <div className="card bg-grey borderAll">
      <div className="card-header product-car-header newheader border-top-0" id="headingOne">
        <div className="slectText">
          <p>History</p>
          {/* <select className="form-control pl-10">
            <option value="">All Time</option>
            <option value="">All Time</option>
          </select> */}
          <div className="c-select c-select-2 c-select-3">
            <button onClick={() => setIsOpen1(state => !state)}> All Time <FaCaretDown/></button>
            <Collapse onInit={onInit} isOpen={isOpen1} transition={true}>
              <ul>
                <li className='active'>5 PM</li>
                <li>6 AM</li>
                <li>10 AM</li>
              </ul>
            </Collapse>
          </div>
        </div>
        <button
          className="btn-link newbtn"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </button>
      </div>

      <div
        id="collapseOne"
        className="collapse show borderTop"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body product-card-body p-0">
          <img src="images/chart.jpg" alt="" className="img-responsive" />
        </div>
      </div>
    </div>
  );
}
