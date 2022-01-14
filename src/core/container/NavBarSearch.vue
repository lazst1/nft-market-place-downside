<script setup>
import { computed, ref } from 'vue'
import NavBarItem from '@/core/components/NavBarItem.vue'
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import Icon from '@/core/components/Icon.vue'
import { mdiFilter, mdiCloseBox } from '@mdi/js'
import NftmxButton from '@/core/components/NftmxButton.vue';
import TopBar from '@/core/components/TopBar.vue';
</script>

<template>
  <top-bar class="font-ibm-medium" :search="true">
    <div class="pl-16 flex-grow items-stretch flex h-95px bg-tertiary-800">
        <nav-bar-item class="w-full">
            <nav-bar-search-input class="w-full font-ibm-medium" placeholder="Search items, collections, and accounts"></nav-bar-search-input>
        </nav-bar-item>
    </div>
    <div
      class="absolute w-screen top-14 left-0 shadow hidden bg-tertiary-800 pr-16
        lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-gray-900"
    >
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <nav-bar-item class="cursor-auto">
        <font-awesome-icon :icon="['fas', 'filter']" :class="[filterActive?'text-primary-900':'text-white', 'text-lg hover:text-primary-900 cursor-pointer']" />
        </nav-bar-item>
        <nav-bar-item class="cursor-auto">
          <nftmx-button
            color="primary"
            label="SEARCH"
            class="font-press w-72"
          />
        </nav-bar-item>
      </div>
    </div>
  </top-bar>
</template>

<style scoped>
.h-95px {
  height: 95px;
}
</style>