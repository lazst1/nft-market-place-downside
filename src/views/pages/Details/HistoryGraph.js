export default function HistoryGraph() {
  return (
    <div className="card bg-grey mb-10 borderAll">
      <div className="card-header product-car-header newheader" id="headingOne">
        <div className="slectText">
          <p>History</p>
          <select className="form-control pl-10">
            <option value="">All Time</option>
            <option value="">All Time</option>
          </select>
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
