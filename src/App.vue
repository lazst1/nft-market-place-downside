<script setup>
import { onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core'
import { watch } from 'vue';
import NavBar from './core/container/NavBar.vue';
import { useStore } from 'vuex';

const store = useStore();


if (typeof window.ethereum !== 'undefined') {
  window.ethereum.on('accountsChanged', function (accounts) {
    store.dispatch("auth/login", accounts[0]);
  })
  ethereum
    .request({ method: 'eth_accounts' })
    .then(accounts => {
      store.dispatch("auth/login", accounts[0]);
    })
}
store.commit('app/UPDATE_WINDOW_WIDTH', window.innerWidth);
const { width: windowWidth } = useWindowSize()
watch(windowWidth, val => {
  store.commit('app/UPDATE_WINDOW_WIDTH', val)
})
store.dispatch('market/getBnbPrice');

</script>

<template>
  <nav-bar />
  <router-view />
</template>
