<script setup>
import { useWindowSize } from '@vueuse/core'
import { watch } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import NftmxLayout from './layouts/NftmxLayout.vue';
import { publicPages, mainChain } from '@/core/config'

const store = useStore();
const toast = useToast();
const router = useRouter();

if (typeof window.ethereum !== 'undefined') {
  ethereum
    .request({ method: 'eth_accounts' })
    .then(accounts => {
      console.log('===========eth_accounts===========', accounts);
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        store.dispatch('auth/login', null).then(res => {
          const authRequired = !publicPages.includes(router.currentRoute.value.path);
          if (authRequired) {
            router.push('/login');
          }
        });
      } else {
        ethereum.request({ method: 'eth_chainId' })
          .then(chain => {
            if (chain !== mainChain) {
              toast.error('Please switch to BSC Testnet');
              store.dispatch('auth/login', null).then(res => {
                const authRequired = !publicPages.includes(router.currentRoute.value.path);
                if (authRequired) {
                  router.push('/login');
                }
              })
            } else {
              store.dispatch("auth/login", accounts[0]).then(res => {
                if (router.currentRoute.value.path === '/login') {
                  router.push('/profile');
                }
              });
            }
          }).catch(err => {
            consolr.log('err ', err);
          })
      }
    })
  ethereum.on('accountsChanged', function (accounts) {
    console.log('===========accountsChanged===========', accounts);
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      store.dispatch('auth/login', null).then(res => {
        const authRequired = !publicPages.includes(router.currentRoute.value.path);
        if (authRequired) {
          router.push('/login');
        }
      });
    } else {
      ethereum.request({ method: 'eth_chainId' })
        .then(chain => {
          if (chain !== mainChain) {
            toast.error('Please switch to BSC Testnet');
            // store.dispatch('auth/login', null).then(res => {
            //   router.push('/login');
            // })
          } else {
            store.dispatch("auth/login", accounts[0]).then(res => {
              if (router.currentRoute.value.path === '/login') {
                router.push('/profile');
              }
            });
          }
        }).catch(err => {
          consolr.log('err ', err);
        })
    }
  })
  ethereum.on('chainChanged', (chainId) => {
    console.log('===========chainChanged===========', chainId);
    if (chainId !== mainChain) {
      toast.error('Please switch to BSC Testnet')
      store.dispatch('auth/login', null).then(res => {
        const authRequired = !publicPages.includes(router.currentRoute.value.path);
        if (authRequired) {
          router.push('/login');
        }
      })
    } else {
      ethereum
        .request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            store.dispatch("auth/login", accounts[0]).then(res => {
              if (router.currentRoute.value.path === '/login') {
                router.push('/profile');
              }
            });
          }
        })
    }
  });
}

store.commit('app/UPDATE_WINDOW_WIDTH', window.innerWidth);
const { width: windowWidth } = useWindowSize()
watch(windowWidth, val => {
  store.commit('app/UPDATE_WINDOW_WIDTH', val)
})

</script>

<template>
  <nftmx-layout />
</template>
