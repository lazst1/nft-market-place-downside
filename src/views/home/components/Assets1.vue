<script setup>
import Accordion from '@/core/container/Accordion.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import { useStore } from 'vuex';
import { computed, ref, watchEffect } from 'vue';
import marketService from '../../../core/services/market.service';

const store = useStore();
const open = ref(true);
const more = ref(false);
const orders = ref([]);
const loading = ref(true);

marketService.getSaleOrders().then(res => {
    loading.value = false;
    orders.value = res.items;
})
</script>

<template>
    <div class="-mx-4">
        <accordion :border="false" :bIcon="true">
            <template v-slot:caption>
                <div class="flex items-center w-full">
                    <div class="flex-1 text-sm font-press pt-3 pb-5 mr-4">Trending Collection</div>
                </div>
            </template>
            <div class="px-4 pt-2 pb-4">
                <div
                    class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
                >
                    <nftmx-sale-card v-for="(order, index) in orders" :data="order" :key="index"></nftmx-sale-card>
                </div>
                <div
                    v-if="loading"
                    class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
                >Loading...</div>
                <div
                    v-if="!loading && orders.length === 0"
                    class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
                >No NFTs found</div>
            </div>
            <div v-if="more" class="text-sm text-right px-6 text-primary-900 font-ibm-bold mt-3">
                <span class="cursor-pointer">See More</span>
            </div>
        </accordion>
    </div>
</template>
