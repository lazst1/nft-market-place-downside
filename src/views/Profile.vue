<script setup>
import { computed, ref } from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { useStore } from 'vuex'
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import NftmxItemCard from '@/core/components/NftmxItemCard.vue';
import CardsContainer from '../core/container/CardsContainer.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])

</script>

<template>
    <div class="bg-[url('/images/profile-banner-1920.png')] bg-no-repeat bg-cover bg-right font-press line-h text-3xl leading-loose text-white px-22 py-0.5">
        <div class="flex pt-11 pb-13">
            <div>
                <img src="/images/profile-big.png" class="w-50" />
            </div>
            <div class="ml-13 pt-1">
                <div class="mb-2">Kyle White</div>
                <div class="font-ibm text-sm pb-4">{{walletAddress}}</div>
                <div class="font-ibm text-sm mt-0.5">kylewhite.com</div>
                <div class="flex">
                    <div class="border border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                        <svg class="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="1 4 1 10 7 10" />  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                    </div>
                    <div class="border-y border-r border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                        <svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />  <line x1="10" y1="14" x2="20" y2="4" />  <polyline points="15 4 20 4 20 9" /></svg>
                    </div>
                    <div class="border-y border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                        <svg class="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="18" cy="5" r="3" />  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="19" r="3" />  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    </div>
                    <div class="border border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                        <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <body-container>
        <div class="flex text-white font-ibm-semi-bold text-sm py-3">
            <div class="mx-4 cursor-pointer hover:text-primary-700">My Collection</div>
            <div class="ml-10 cursor-pointer hover:text-primary-700">Ledger</div>
        </div>
        <nftmx-divider class="mt-2.5"></nftmx-divider>
        <div class="flex items-center text-white font-ibm-semi-bold text-sm mt-8 py-0.5">
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                Collected <span class="font-ibm-light">2</span>
            </div>
            <div class="ml-6 cursor-pointer hover:text-primary-700">
                On Sale <span class="font-ibm-light">1</span>
            </div>
            <div class="ml-11 cursor-pointer hover:text-primary-700">
                Downside Protection <span class="font-ibm-light">5</span>
            </div>
            <div class="ml-10 cursor-pointer hover:text-primary-700">
                Favorited <span class="font-ibm-light">6</span>
            </div>
            <div class="ml-11 cursor-pointer hover:text-primary-700">
                Hidden <span class="font-ibm-light">0</span>
            </div>
            <div class="ml-10 cursor-pointer hover:text-primary-700">
                Activity <span class="font-ibm-light">1</span>
            </div>
            <div class="ml-11 cursor-pointer hover:text-primary-700">
                <span class="mr-4">Offers</span>
                <font-awesome-icon :icon="['fas', 'sort-down']" class="relative -top-0.75" />
            </div>
            <nftmx-divider :vertical="true" class="mx-8 h-7"></nftmx-divider>
            <div class="flex items-center">
                <font-awesome-icon :icon="['fas', 'search']" class="text-white text-lg pointer-events-none" />
                <input class="text-white pl-6 py-2 font-ibm placeholder-tertiary-500 w-full border-0 focus:outline-none bg-tertiary-900" placeholder="Search" />
            </div>
        </div>
        <cards-container class="my-12 place-items-center">
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
        </cards-container>
    </body-container>
    <nftmx-footer />
</template>
