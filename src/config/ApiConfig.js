let baseurl = "https://node-nft-jude.mobiloitte.com";
let user = `${baseurl}/api/v1/user`;
let nft = `${baseurl}/api/v1/nft`;

const apiConfig = {
  connectWallet: `${user}/connectWallet`,
  createCollection: `${user}/createCollection`,
  listCollection: `${user}/listCollection`,
  myCollectionList: `${user}/myCollectionList`,
  viewCollection: `${user}/viewCollection`,

  //NFT
  // /api/v1/nft/sellOrderList
  // /api/v1/nft/placeOrderList
  // /api/v1/nft/cancelOrderList
  // /api/v1/nft/listAllCreatedNft
  // /api/v1/nft/nftList
  addImage: `${nft}/addImage`,
  addNFT: `${nft}/addNFT`,
  uploadNFT: `${nft}/uploadNFT`,
  listNft: `${nft}/listNft`,
  placeOrder: `${nft}/placeOrder`,
  placeOrderList: `${nft}/placeOrderList`,
  placeOrderListById: `${nft}/placeOrderListById`,
  placeBid: `${nft}/placeBid`,
  sellOrder: `${nft}/sellOrder`,
  sellSubOrder: `${nft}/sellSubOrder`,
  placeSubOrder: `${nft}/placeSubOrder`,
  withoutPlaceNftList: `${nft}/withoutPlaceNftList`,
  acceptBid: `${nft}/acceptBid`,
  sellOrderList: `${nft}/sellOrderList`,
  cancelOrderList: `${nft}/cancelOrderList`,
  listAllCreatedNft: `${nft}/listAllCreatedNft`,
  nftList: `${nft}/nftList`,
  viewSaleOrder: `${nft}/ViewSaleOrder`,
  nftActivityList: `${nft}/nftActivityList`,
};

export default apiConfig;
