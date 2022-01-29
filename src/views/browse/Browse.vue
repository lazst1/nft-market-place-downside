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

const store = useStore();

</script>

<template>
    <body-container :searchAble="true">
        <div class="flex py-4 border-b border-b-black">
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
        </div>
        <div class="flex py-4">
            <div class="flex-1 flex items-center">
                <span class="text-white font-ibm-bold mr-4 text-xl">1,291,029 results</span>
                <nftmx-button
                    :outline="true"
                    color="primary"
                    label="Buy Now"
                    :small="true"
                    :iconAfter="mdiCloseBox"
                    class="hover:bg-tertiary-600 hover:text-primary-900"
                />
                <nav-bar-item>
                    <span class="text-primary-900 text-sm">Clear All</span>
                </nav-bar-item>
            </div>
            <div class="hidden md:block">
                <drop-down
                    title="Event type"
                >
                    <drop-down-item>
                        DropDown Item
                    </drop-down-item>
                </drop-down>
            </div>
            <div class="ml-3 hidden md:block">
                <drop-down
                    title="Event type"
                >
                    <nav-bar-search-input small></nav-bar-search-input>
                    <drop-down-item>
                        <checkbox-cell><div class="text-xs pt-1">ETH Address</div></checkbox-cell>
                    </drop-down-item>
                </drop-down>
            </div>
        </div>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mb-11 pb-0.5">
            <nftmx-sale-card v-for="index in 2" :key="index"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :syndication="false"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :auction="true"></nftmx-sale-card>
            <nftmx-sale-card v-for="index in 2" :key="index" :bought="true"></nftmx-sale-card>
        </div>
    </body-container>
    <nftmx-footer />
</template>
