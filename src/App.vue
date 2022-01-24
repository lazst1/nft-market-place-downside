<script setup>
import NavBar from './core/container/NavBar.vue';
import { useStore } from 'vuex';
import Moralis from 'moralis'

Moralis.start({appId: 'z7cJa6SN0vtK4goTUZUAhAG6sI71kh8a0xfYfgNc', serverUrl: 'https://dr8dwbs8zgqr.usemoralis.com:2053/server'})

const store = useStore();

window.ethereum.on('accountsChanged', function (accounts) {
  store.dispatch("auth/login", accounts[0]);
})

if (typeof window.ethereum !== 'undefined') {
    ethereum
      .request({ method: 'eth_accounts' })
      .then(accounts => {
        store.dispatch("auth/login", accounts[0]);
      })
}

</script>

<template>
  <nav-bar />
  <router-view />
</template>
