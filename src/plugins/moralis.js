import Moralis from "moralis";

console.log(import.meta.env)

Moralis.start({
  serverUrl: import.meta.env.VITE_APP_MORALIS_SERVER_URL,
  appId: import.meta.env.VITE_APP_MORALIS_APP_ID,
});

export default Moralis;
