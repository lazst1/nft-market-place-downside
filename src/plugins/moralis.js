import Moralis from "moralis";

console.log(process.env)

Moralis.start({
  serverUrl: process.env.VUE_APP_MORALIS_SERVER_URL || 'https://dr8dwbs8zgqr.usemoralis.com:2053/server',
  appId: process.env.VUE_APP_MORALIS_APP_ID || 'z7cJa6SN0vtK4goTUZUAhAG6sI71kh8a0xfYfgNc',
});

export default Moralis;
