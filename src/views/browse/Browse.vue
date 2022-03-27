<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import { mdiFilter, mdiCloseBox } from '@mdi/js'
import CheckboxCell from '@/core/components/basic/CheckboxCell.vue';
import NftmxSaleCard from '@/core/components/cards/NftmxSaleCard.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { useStore } from 'vuex';
import BrowseSearch from './BrowseSearch.vue';
import marketService from '@/core/services/market.service';
import { computed, ref, watchEffect } from 'vue';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/walletAddress']);
const orders = ref([]);
const loading = ref(true);

watchEffect(() => {
    if (walletAddress.value) {
        marketService.getSaleOrders(walletAddress.value).then(res => {
            loading.value = false;
            orders.value = res.data.items;
        })
    }
})
</script>

<template>
    <browse-search />
    <body-container>
        <div class="flex flex-col sm:flex-row justify-start items-center mt-3.5">
            <div class="w-full sm:w-auto">
                <span class="text-white font-ibm-semi-bold mr-4 text-lg">1,291,029 results</span>
            </div>
            <div class="flex w-full sm:w-auto">
                <nftmx-button
                    :outline="true"
                    color="primary"
                    label="List Price Available"
                    :small="true"
                    :iconAfter="mdiCloseBox"
                    class="hover:bg-transparent hover:text-primary-900 h-9 text-xs"
                />
            </div>
            <span class="text-primary-900 text-11 ml-4">Clear All</span>
        </div>
        <div
            class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mb-11 pb-0.5 mt-10"
        >
            <nftmx-sale-card v-for="(order, index) in orders" :order="order" :key="index"></nftmx-sale-card>
            <!-- <nftmx-sale-card v-for="index in 2" :key="index"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :data="{syndication:false}"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :data="{auction:true}"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :data="{bought:true}"></nftmx-sale-card>-->
        </div>
        <div
            v-if="loading"
            class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
        >Loading...</div>
        <div
            v-if="!loading && orders.length === 0"
            class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
        >No NFTs found</div>
    </body-container>
</template>
