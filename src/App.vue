<script setup>
import { onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core'
import { watch } from 'vue';
import NavBar from './core/container/NavBar.vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const store = useStore();
const toast = useToast();
const router = useRouter();

if (typeof window.ethereum !== 'undefined') {
  window.ethereum.on('accountsChanged', function (accounts) {
    ethereum.request({ method: 'eth_chainId' })
      .then(chain => {
        if (chain !== '0x61') {
          toast.error('Please switch to BSC Testnet');
          store.dispatch('auth/login', null)
          router.push('/login');
        } else {
          store.dispatch("auth/login", accounts[0]);
        }
      }).catch(err => {
        consolr.log('err ', err);
      })
  })
  ethereum
    .request({ method: 'eth_accounts' })
    .then(accounts => {
      ethereum.request({ method: 'eth_chainId' })
        .then(chain => {
          if (chain !== '0x61') {
            toast.error('Please switch to BSC Testnet');
            store.dispatch('auth/login', null)
            router.push('/login');
          } else {
            store.dispatch("auth/login", accounts[0]);
          }
        }).catch(err => {
          consolr.log('err ', err);
        })
    })
  ethereum.on('chainChanged', (chainId) => {
    if (chainId !== '0x61') {
      toast.error('Please switch to BSC Testnet')
      store.dispatch('auth/login', null);
      router.push('/login');
    }
  });
  ethereum.on('connect', (connectInfo) => {
    console.log(connectInfo)
  });
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
