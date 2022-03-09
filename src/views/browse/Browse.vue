<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import { mdiFilter, mdiCloseBox } from '@mdi/js'
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import DropDown from '@/core/components/DropDown.vue';
import NavBarItem from '@/core/components/NavBarItem.vue'
import DropDownItem from '@/core/components/DropDownItem.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { useStore } from 'vuex';
import BrowseSearch from './BrowseSearch.vue';
import marketService from '../../core/services/market.service';
import { computed } from 'vue';

const store = useStore();

const orders = computed(() => store.state.orders);

</script>

<template>
    <browse-search />
    <body-container>
        <div class="flex flex-col sm:flex-row justify-start items-center pb-15">
            <div class="mt-3.5 w-full sm:w-auto">
                <span class="text-white font-ibm-semi-bold mr-4 text-lg">1,291,029 results</span>
            </div>
            <div class="flex mt-3.5 w-full sm:w-auto">
                <nftmx-button
                    :outline="true"
                    color="primary"
                    label="List Price Available"
                    :small="true"
                    :iconAfter="mdiCloseBox"
                    class="hover:bg-transparent hover:text-primary-900 h-9"
                />
                <nav-bar-item>
                    <span class="text-primary-900 text-xs">Clear All</span>
                </nav-bar-item>
            </div>
        </div>
        <div
            class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mb-11 pb-0.5"
        >
            <nftmx-sale-card v-for="(order, index) in orders.items" :data="order" :key="index"></nftmx-sale-card>
            <!-- <nftmx-sale-card v-for="index in 2" :key="index"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :data="{syndication:false}"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :data="{auction:true}"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :data="{bought:true}"></nftmx-sale-card>-->
        </div>
        <div
            v-if="!orders.meta.currentPage"
            class="h-96 flex justify-center items-center font-ibm-bold text-tertiary-500 text-lg"
        >Loading...</div>
    </body-container>
    <nftmx-footer />
</template>

<style scoped>
.min-h-item {
    min-height: 500px;
}
</style>
