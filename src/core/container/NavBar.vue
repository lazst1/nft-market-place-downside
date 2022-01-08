<script setup>
import { computed, ref } from 'vue'
import NavBarItem from '@/core/components/NavBarItem.vue'
import TopBar from '@/core/components/TopBar.vue';
import Icon from '@/core/components/Icon.vue'
import { mdiThumbUp, mdiHelpCircle } from '@mdi/js'
import NftmxTooltip from '@/core/components/NftmxTooltip.vue';
import Sidebar from '@/core/components/Sidebar.vue';

const sidebar = ref(false);
</script>

<template>
  <top-bar class="px-2">
    <div class="flex-1 items-stretch flex h-70px font-ibm">
      <nav-bar-item>
        <img src="/images/nftmx-logo.png" alt="NFT mx" />
      </nav-bar-item>
    </div>
    <div
      class="hidden absolute w-screen top-14 left-0 shadow
        lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-gray-900"
    >
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <nav-bar-item>
          <div class="">
            <span class="text-sm font-ibm-bold">
              Seller
            </span>
            <nftmx-tooltip class="-top-2 -left-1" text="If you are a seller, NFT.mx allows you to increase your success rate by offering buyers downside protection all while gaining profits from the APY in leveraging other people's money.">
              <font-awesome-icon :icon="['fas', 'question-circle']" class="text-xxs" />
            </nftmx-tooltip>
          </div>
        </nav-bar-item>
        <nav-bar-item>
          <div class="">
            <span class="text-sm font-ibm-bold">
              Buyer
            </span>
            <nftmx-tooltip class="-top-2 -left-1" text="If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens.">
              <font-awesome-icon :icon="['fas', 'question-circle']" class="text-xxs" />
            </nftmx-tooltip>
          </div>
        </nav-bar-item>
        <nav-bar-item @click="sidebar = !sidebar">
          <span class="text-sm font-ibm-bold pt-1">
            0x291A...H1RS
          </span>
        </nav-bar-item>
        <nav-bar-item>
          <div class="w-2.5 h-2.5 bg-primary-900 rounded-md mt-0.5"></div>
        </nav-bar-item>
      </div>
    </div>
  </top-bar>
  <sidebar v-if="sidebar" />
</template>

<style scoped>
.h-70px {
  height: 70px;
}
</style>