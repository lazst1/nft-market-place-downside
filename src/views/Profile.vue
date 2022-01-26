<script setup>
import { computed, ref, reactive, onMounted} from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { useStore } from 'vuex'
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import NftmxItemCard from '@/core/components/NftmxItemCard.vue';
import CardsContainer from '@/core/container/CardsContainer.vue';
import NavBarSearch from '@/core/container/NavbarSearch.vue';
import NftmxSearchInput from '../core/components/NftmxSearchInput.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])
const user = computed(() => store.getters['auth/getUser']);
</script>

<template>
    <nav-bar-search></nav-bar-search>
    <div class="bg-[url('/images/profile-banner-1920.png')] bg-no-repeat bg-cover bg-right font-press line-h text-3xl leading-loose text-white px-22 pt-0.75 pb-px">
        <div class="flex pt-12 pb-12">
            <div>
                <img src="/images/profile-big.png" class="w-50" />
            </div>
            <div class="ml-13 pt-1.75">
                <div class="mb-2">Kyle White</div>
                <div class="font-ibm text-sm pb-5 text-primary-900">{{walletAddress}}</div>
                <div class="font-ibm text-sm mt-0.75 pb-px">Joined January 2022</div>
                <div class="flex mt-4 text-sm">
                    <div class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fas', 'copy']" />
                    </div>
                    <div class="border-y border-r border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fas', 'globe']" />
                    </div>
                    <div class="border-y border-r border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                    </div>
                    <div class="border-y border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </div>
                    <div class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                        <font-awesome-icon :icon="['fas', 'cog']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <body-container>
        <div class="flex text-white font-ibm-semi-bold text-sm py-3 mt-4.75">
            <div class="mx-4 cursor-pointer hover:text-primary-700">My Collection</div>
            <div class="ml-10 cursor-pointer hover:text-primary-700">Ledger</div>
        </div>
        <nftmx-divider class="mt-2.5 mb-6"></nftmx-divider>
        <div class="2xl:flex justify-between text-white font-ibm-semi-bold text-sm pt-0.5">
            <div class="overflow-auto">
                <div class="flex gap-2.5 py-4 w-max">
                    <div class="mx-4 cursor-pointer hover:text-primary-700">
                        Collected <span class="font-ibm-light">{{user.nftData ? user.nftData.total : 0}}</span>
                    </div>
                    <div class="mx-4 cursor-pointer hover:text-primary-700">
                        On Sale <span class="font-ibm-light">0</span>
                    </div>
                    <div class="mx-4 cursor-pointer hover:text-primary-700">
                        Downside Protection <span class="font-ibm-light">0</span>
                    </div>
                    <div class="mx-4 cursor-pointer hover:text-primary-700">
                        Favorited <span class="font-ibm-light">0</span>
                    </div>
                    <div class="mx-4 cursor-pointer hover:text-primary-700">
                        Hidden <span class="font-ibm-light">0</span>
                    </div>
                    <div class="mx-4 cursor-pointer hover:text-primary-700">
                        Activity <span class="font-ibm-light">0</span>
                    </div>
                    <div class="mx-4 cursor-pointer hover:text-primary-700">
                        <span class="mr-4">Offers</span>
                        <font-awesome-icon :icon="['fas', 'sort-down']" class="relative -top-0.75" />
                    </div>
                </div>
            </div>
            <nftmx-search-input class="bg-tertiary-800 mt-3.25 2xl:my-0.75 ml-4" />
        </div>
        <cards-container class="mt-12 2xl:mt-10 mb-22 place-items-center">
            <nftmx-item-card v-for="(nft, index) in user.nftData?user.nftData.result:[]" :key="index" :item="nft" class="bg-tertiary-800"></nftmx-item-card>
        </cards-container>
    </body-container>
    <nftmx-footer />
</template>
