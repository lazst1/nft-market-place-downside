<script setup>
import { computed, ref } from 'vue'
import NavBarItem from '@/core/components/NavBarItem.vue'
import TopBar from '@/core/components/TopBar.vue';
import Icon from '@/core/components/Icon.vue'
import { mdiThumbUp, mdiHelpCircle } from '@mdi/js'
</script>


<template>
  <top-bar>
    <div class="flex-1 items-stretch flex h-70px font-ibm">
      <nav-bar-item>
        <img src="" alt="NFT mx" />
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
          <router-link to="/activity">
            <div class="">
              <span class="text-sm font-ibm-bold">
                Seller
              </span>
              <icon
                class="-ml-1"
                :path="mdiHelpCircle"
                w="w-3"
                h="h-3"
                size="30"
                color="white"
              />
            </div>
          </router-link>
        </nav-bar-item>
        <nav-bar-item>
          <div class="">
            <span class="text-sm font-ibm-bold">
              Buyer
            </span>
            <icon
              class="-ml-1"
              :path="mdiHelpCircle"
              w="w-3"
              h="h-3"
              size="30"
              color="white"
            />
          </div>
        </nav-bar-item>
        <nav-bar-item>
          <span class="text-sm font-ibm-bold pt-1">
            0x291A...H1RS
          </span>
        </nav-bar-item>
      </div>
    </div>
  </top-bar>
</template>

<style scoped>
.h-70px {
  height: 70px;
}
</style>