<script setup>
import NavBar from './core/container/NavBar.vue';
import { useStore } from 'vuex';

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
