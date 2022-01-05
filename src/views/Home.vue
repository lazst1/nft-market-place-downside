<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import { mdiFilter, mdiCloseBox } from '@mdi/js'
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import DropDown from '../core/components/DropDown.vue';
import NavBarItem from '@/core/components/NavBarItem.vue'
import DropDownItem from '@/core/components/DropDownItem.vue';
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxTable from '@/core/components/NftmxTable.vue';
import NftmxThead from '@/core/components/NftmxThead.vue';
import NftmxTh from '@/core/components/NftmxTh.vue';
import NftmxTbody from '@/core/components/NftmxTbody.vue';
import NftmxTd from '@/core/components/NftmxTd.vue';
import NftmxTr from '@/core/components/NftmxTr.vue';
</script>

<template>
    <body-container :searchAble="true">
        <div class="flex py-4 border-b border-b-black font-ibm-medium">
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Domain Names</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
            <checkbox-cell><span class="text-xs">Art</span></checkbox-cell>
        </div>
        <div class="flex py-4">
            <div class="flex-1 items-stretch flex">
                <nftmx-button
                    :outline="true"
                    color="primary"
                    label="Listings"
                    :small="true"
                    :iconAfter="mdiCloseBox"
                />
                <nav-bar-item>
                    <span class="text-primary-900 mx-2">Clear All</span>
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
                    <nav-bar-search-input placeholder="Filter" fontSize="text-xs"></nav-bar-search-input>
                    <drop-down-item>
                        <checkbox-cell><span class="text-xs">ETH Address</span></checkbox-cell>
                    </drop-down-item>
                    <drop-down-item>
                        <checkbox-cell><span class="text-xs">ETH</span></checkbox-cell>
                    </drop-down-item>
                    <drop-down-item>
                        <checkbox-cell><span class="text-xs">ETH</span></checkbox-cell>
                    </drop-down-item>
                </drop-down>
            </div>
        </div>
        <accordion caption="Trading History" :accordion="false">
            <nftmx-table height="80%">
                <nftmx-thead>
                    <nftmx-tr>
                        <nftmx-th>Event</nftmx-th>
                        <nftmx-th>Item</nftmx-th>
                        <nftmx-th>Unit Price</nftmx-th>
                        <nftmx-th>Quantity</nftmx-th>
                        <nftmx-th>From</nftmx-th>
                        <nftmx-th :border="false">To</nftmx-th>
                    </nftmx-tr>
                </nftmx-thead>
                <nftmx-tbody>
                    <nftmx-tr v-for="index in 10" :key="index" :border="index===10 ? false : true">
                        <nftmx-td>Name</nftmx-td>
                        <nftmx-td class="flex">
                            Item
                        </nftmx-td>
                        <nftmx-td>Unit Price</nftmx-td>
                        <nftmx-td>Quantity</nftmx-td>
                        <nftmx-td>From</nftmx-td>
                        <nftmx-td :border="false">To</nftmx-td>
                    </nftmx-tr>
                </nftmx-tbody>
            </nftmx-table>
        </accordion>
    </body-container>
</template>

<style>
.px-22 {
    padding-left: 88px;
    padding-right: 88px;
}
</style>
