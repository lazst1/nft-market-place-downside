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
                <div class="flex mt-6 text-sm">
                    <div class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fas', 'undo']" />
                    </div>
                    <div class="border-y border-r border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                    </div>
                    <div class="border-y border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fas', 'share-alt']" />
                    </div>
                    <div class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fas', 'bars']" />
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
        <cards-container class="mt-12 mb-22 place-items-center">
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
            <nftmx-item-card class="bg-tertiary-800"></nftmx-item-card>
        </cards-container>
    </body-container>
    <nftmx-footer />
</template>
