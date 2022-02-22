<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import NavBarItem from '@/core/components/NavBarItem.vue'
import TopBar from '@/core/components/TopBar.vue';
import Icon from '@/core/components/Icon.vue'
import { mdiThumbUp, mdiHelpCircle } from '@mdi/js'
import NftmxTooltip from '@/core/components/NftmxTooltip.vue';
import Sidebar from '@/views/sidebar/Sidebar.vue'
import NotificationsBar from '@/views/notifications/NotificationsBar.vue';
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';
import NftmxButton from '../components/NftmxButton.vue';
import NftmxBadge from '../components/NftmxBadge.vue';

const sidebar = ref(false);
const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])

function onClickOutside(params) {
  store.commit('app/TOGGLE_SIDEBAR', false)
  store.commit('app/TOGGLE_NOTIFICATION_BAR', false)
}
function toggleSidebar(params) {
  store.commit('app/TOGGLE_SIDEBAR', !store.state.app.sidebarOpened)
}
function toggleNotificationBar(params) {
  store.commit('app/TOGGLE_NOTIFICATION_BAR', !store.state.app.notificationOpened)
}

</script>

<template>
  <top-bar class="px-2">
    <div class="flex-1 items-stretch flex h-70px font-ibm">
      <nav-bar-item>
        <router-link to="/">
          <img src="/images/nftmx-logo.png" alt="NFT mx" />
        </router-link>
      </nav-bar-item>
    </div>
    <div
      class="top-14 left-0 w-auto items-stretch flex grow static border-b-0 overflow-visible shadow-none dark:bg-gray-900"
    >
      <div class="max-h-screen-menu overflow-visible flex items-stretch justify-end ml-auto">
        <nav-bar-item>
          <div @click="toggleNotificationBar" class="hidden lg:block">
            <font-awesome-icon :icon="['fas', 'bell']" class="text-lg" />
            <nftmx-badge>15</nftmx-badge>
          </div>
        </nav-bar-item>
        <nav-bar-item>
          <div class="hidden lg:block">
            <nftmx-button
              color="primary"
              label="NFT List"
              outline
              class="h-6 w-37 font-ibm-bold transition text-white"
            />
          </div>
        </nav-bar-item>
        <nav-bar-item @click="toggleSidebar" class="hover:text-primary-900">
          <nftmx-wallet-address
            v-if="walletAddress"
            class="text-sm font-ibm-bold pt-1 hidden sm:block"
            :address="walletAddress"
          />
          <div class="w-2.5 h-2.5 bg-primary-900 rounded-md mt-0.5 ml-6"></div>
        </nav-bar-item>
      </div>
    </div>
  </top-bar>
  <sidebar v-if="store.state.app.sidebarOpened" v-click-outside="onClickOutside" />
  <notifications-bar v-if="store.state.app.notificationOpened" v-click-outside="onClickOutside" />
</template>

<style scoped>
.h-70px {
  height: 70px;
}
</style>