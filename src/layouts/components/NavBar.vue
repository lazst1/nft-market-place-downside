<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import NavBarItem from './NavBarItem.vue'
import TopBar from '@/core/components/basic/TopBar.vue';
import Icon from '@/core/components/basic/Icon.vue'
import NftmxTooltip from '@/core/components/basic/NftmxTooltip.vue';
import MenuBar from '@/views/sidebar/menu/MenuBar.vue'
import NotificationsBar from '@/views/sidebar/notification/NotificationsBar.vue';
import NftmxWalletAddress from '@/core/components/blockchain-address/NftmxWalletAddress.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import NftmxBadge from '@/core/components/basic/NftmxBadge.vue';
import marketService from '@/core/services/market.service';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/walletAdderss'])
const orderLogs = ref([]);

marketService.getOrderLogs(1, 20).then(res => {
  orderLogs.value = res.data.items;
});

const onClickOutside = () => {
  store.commit('app/TOGGLE_MENU', false);
  store.commit('app/TOGGLE_NOTIFICATION_BAR', false);
}
const toggleSidebar = () => {
  store.commit('app/TOGGLE_MENU', !store.state.app.menuOpened);
  store.commit('app/TOGGLE_NOTIFICATION_BAR', false);
}
const toggleNotificationBar = () => {
  store.commit('app/TOGGLE_NOTIFICATION_BAR', !store.state.app.logBarOpened);
  store.commit('app/TOGGLE_MENU', false);
}

</script>

<template>
  <div v-click-outside="onClickOutside">
    <top-bar class="px-2">
      <div class="flex-1 items-stretch flex h-70px font-ibm">
        <nav-bar-item to="/">
          <img src="/images/logo/nftmx-logo.png" alt="NFT mx" />
        </nav-bar-item>
      </div>
      <div
        class="top-14 left-0 w-auto items-stretch flex grow static border-b-0 overflow-visible shadow-none"
      >
        <div class="max-h-screen-menu overflow-visible flex items-center justify-end ml-auto">
          <nav-bar-item v-if="walletAddress">
            <div @click="toggleNotificationBar">
              <font-awesome-icon :icon="['fas', 'bell']" class="text-lg text-white" />
              <nftmx-badge :value="orderLogs.length" />
            </div>
          </nav-bar-item>
          <nav-bar-item class="hidden lg:block">
            <div>
              <nftmx-button
                to="/profile"
                color="primary"
                label="List NFT"
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
            <div class="ml-6 flex flex-col gap-1 items-center">
              <div class="w-2 h-2 bg-primary-900 rounded" />
              <div class="w-1.5 h-1.5 bg-primary-900 rounded" />
              <div class="w-1 h-1 bg-primary-900 rounded" />
            </div>
          </nav-bar-item>
        </div>
      </div>
    </top-bar>
    <menu-bar
      :class="[store.state.app.menuOpened ? '-translate-x-0' : 'translate-x-full', 'transition']"
    />
    <notifications-bar
      :class="[store.state.app.logBarOpened ? '-translate-x-0' : 'translate-x-full', 'transition']"
      :orderLogs="orderLogs"
    />
  </div>
</template>

<style scoped>
.h-70px {
  height: 70px;
}
</style>