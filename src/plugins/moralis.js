import Moralis from "moralis";

const serverUrl = import.meta.env.VITE_APP_MORALIS_SERVER_URL;
const appId = import.meta.env.VITE_APP_MORALIS_APP_ID;

Moralis.start({serverUrl, appId});

export default Moralis;
