export default function OffersRecivedTab() {
  return (
    <div className="current_auction p-0">
      <div className="card bg-grey mb-10 ">
        <div
          id="collapse3"
          className="collapse show "
          aria-labelledby="headingOne"
          data-parent="#accordion3"
        >
          <div className="card-body product-card-body p-0">
            <div className="table-responsive">
              <table className="BottomTable BottomTable2 text-center">
                <tr>
                  <td>Offers Mode</td>
                  <td>Offers Received</td>
                </tr>
                <tr>
                  <td colspan="2" className="offer-td">
                    No Offer yet
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
