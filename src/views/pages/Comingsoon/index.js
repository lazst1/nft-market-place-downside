import Page from "src/components/Page";

export default function Comingsoon() {
  return (
    <Page title="Coming Soon" noFooter>
      <div className="comingsoon-div">
        <div className="coming-content">
          <h4>
            The world's first NFT marketplace with 100% downside protection as
            liquidity solution{" "}
          </h4>
          <h1 className="mt-4 mb-4">Coming Soon</h1>
          <button className="btn btn-green mr-3">pre-sale</button>
          <button className="btn btn-border">Testnet</button>
        </div>
        <div className="left-cartoon ">
          <img src="images/cartoon-1.png" alt="" />
          <div className="comment-box comment-box2">
            If you are a buyer, think of NFT.mx as a new strategic staking
            program with upside from selling the NFT, while also providing the
            option to cancel your investment and get a 100% refund with your
            original tokens.
            <div className="hover-content">
              <i className="fa fa-question-circle" aria-hidden="true"></i>
              <div className="mark-content">
                Creators offering downside protection receive rewards in the
                same token invested with through 3rd party staking providers
                like Venus. You earn APY rewards while inc+reasing your
                attractiveness to buyers! With NFT Max, you never pay to list
                only a small percentage from the APY rewards.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="right-cartoon">
          <div className="comment-box comment-box3">
            If you are a seller, NFT.mx allows you to increase your success rate
            by offering buyers downside protection all while gaining profits
            from the APY in leveraging other people's money.
            <div className="hover-content">
              <i className="fa fa-question-circle" aria-hidden="true"></i>
              <div className="mark-content">
                Creators offering downside protection receive rewards in the
                same token invested with through 3rd party staking providers
                like Venus. You earn APY rewards while inc+reasing your
                attractiveness to buyers! With NFT Max, you never pay to list
                only a small percentage from the APY rewards.{" "}
              </div>
            </div>
          </div>
          <img src="images/cartoon-3.png" alt="" />
        </div>
      </div>
    </Page>
  );
}
