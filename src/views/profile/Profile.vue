<script setup>
import { computed } from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { useStore } from 'vuex'
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import NftmxItemCard from '@/core/components/NftmxItemCard.vue';
import CardsContainer from '@/core/container/CardsContainer.vue';
import NavBarSearch from '@/core/container/NavBarSearch.vue';
import NftmxSearchInput from '@/core/components/NftmxSearchInput.vue';
import { themeConfig } from '@/core/config';
import ProfileSummary from './ProfileSummary.vue';
import ChooseCollection from './ChooseCollection.vue';
import ChooseNftGroup from './ChooseNftGroup.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])
const user = computed(() => store.getters['auth/getUser']);
if (walletAddress.value) {
    store.dispatch("moralis/getMyNFTs");
}

</script>

<template>
    <nav-bar-search></nav-bar-search>
    <profile-summary />
    <body-container>
        <choose-collection />
        <nftmx-divider class="mt-4.75 mb-3"></nftmx-divider>
        <div class="2xl:flex justify-between text-white font-ibm-semi-bold text-sm pt-0.5">
            <choose-nft-group />
            <nftmx-divider class="mt-4.75 mb-5"></nftmx-divider>
            <nftmx-search-input class="bg-tertiary-800 mt-3.25 2xl:my-0.75 sm:ml-4" />
        </div>
        <cards-container class="mt-12 2xl:mt-11 mb-22 place-items-center">
            <nftmx-item-card
                v-for="(nft, index) in user.nftData ? user.nftData.result : []"
                :key="index"
                :item="nft"
                class="bg-tertiary-800"
            ></nftmx-item-card>
        </cards-container>
    </body-container>
    <nftmx-footer />
</template>
