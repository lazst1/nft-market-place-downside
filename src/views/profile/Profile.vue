<script setup>
import { computed, ref, watchEffect } from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { useStore } from 'vuex'
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import CardsContainer from '@/core/container/CardsContainer.vue';
import NavBarSearch from '@/core/container/NavBarSearch.vue';
import NftmxSearchInput from '@/core/components/NftmxSearchInput.vue';
import { themeConfig } from '@/core/config';
import ProfileSummary from './ProfileSummary.vue';
import ChooseCollection from './ChooseCollection.vue';
import ChooseNftGroup from './ChooseNftGroup.vue';
import NftCard from './components/NftCard.vue';
import OrderCard from './components/OrderCard.vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])
const collectedNFTs = computed(() => store.state.collectedNFTs);
const myActiveOrders = computed(() => store.state.myActiveOrders);
const selectedGroup = ref({ key: 'COLLECTED', name: 'Collected', count: store.state.collectedNFTs.total });

const selectGroup = (value) => {
    switch (value) {
        case 'COLLECTED':
            selectedGroup.value = { key: 'COLLECTED', name: 'Collected', count: store.state.collectedNFTs.total };

            break;
        case 'ON_SALE':
            selectedGroup.value = { key: 'ON_SALE', name: 'On Sale', count: store.state.myActiveOrders.meta.totalItems };
            break;
        case 'DOWNSIDE':
            selectedGroup.value = { key: 'DOWNSIDE', name: 'Downside Protection', count: 0 };
            break;
        case 'FAVORITE':
            selectedGroup.value = { key: 'FAVORITE', name: 'Favorited', count: 0 };
            break;
        case 'HIDDEN':
            selectedGroup.value = { key: 'HIDDEN', name: 'Hidden', count: 0 };
            break;
        case 'ACTIVITY':
            selectedGroup.value = { key: 'ACTIVITY', name: 'Activity', count: 0 };
            break;
        case 'OFFERS':
            selectedGroup.value = { key: 'OFFERS', name: 'Offers', count: 0 };
            break;
        default:
            break;
    }
}

watchEffect(() => {
    if (selectedGroup.value.key === 'COLLECTED') {
        selectedGroup.value = { key: 'COLLECTED', name: 'Collected', count: store.state.collectedNFTs.total }
    }
})

</script>

<template>
    <nav-bar-search></nav-bar-search>
    <profile-summary />
    <body-container>
        <choose-collection />
        <nftmx-divider class="mt-4.75 mb-3"></nftmx-divider>
        <div class="2xl:flex justify-between text-white font-ibm-semi-bold text-sm pt-0.5">
            <choose-nft-group :selectedGroup="selectedGroup" @select-group="selectGroup" />
            <nftmx-divider class="mt-4.75 mb-5"></nftmx-divider>
            <nftmx-search-input class="bg-tertiary-800 mt-3.25 2xl:my-0.75 sm:ml-4" />
        </div>
        <cards-container
            v-if="selectedGroup.key === 'COLLECTED'"
            class="mt-12 2xl:mt-11 mb-22 place-items-center"
        >
            <nft-card
                v-for="(nft, index) in collectedNFTs ? collectedNFTs.result : []"
                :key="index"
                :item="nft"
                class="bg-tertiary-800"
            ></nft-card>
        </cards-container>
        <cards-container
            v-if="selectedGroup.key === 'ON_SALE'"
            class="mt-12 2xl:mt-11 mb-22 place-items-center"
        >
            <order-card
                v-for="(order, index) in myActiveOrders ? myActiveOrders.items : []"
                :key="index"
                :order="order"
                class="bg-tertiary-800"
            ></order-card>
        </cards-container>
    </body-container>
    <nftmx-footer />
</template>
