<script setup>
import Accordion from '@/core/container/Accordion.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore();
const orders = computed(() => store.state.orders);
const open = ref(true);
const more = ref(false);

const handleClick = (value) => {
    open.value = value
}

</script>

<template>
    <accordion
        :border="false"
        :sidebar="true"
        :bIcon="true"
        :animation="false"
        v-model="open"
        @handle-click="handleClick"
    >
        <template v-slot:caption>
            <div class="flex items-center w-full">
                <div class="flex-1 text-sm font-press pt-3 pb-5 mr-4">Trending Collection</div>
            </div>
        </template>
        <div class="pt-2">
            <div
                v-if="orders.meta.totalItems > 0"
                class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
            >
                <nftmx-sale-card v-for="(order, index) in orders.items" :data="order" :key="index"></nftmx-sale-card>
            </div>
            <div
                v-if="!orders.meta.currentPage"
                class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
            >Loading...</div>
        </div>
        <div v-if="more" class="text-sm text-right px-6 text-primary-900 font-ibm-bold mt-3">
            <span class="cursor-pointer">See More</span>
        </div>
    </accordion>
</template>
