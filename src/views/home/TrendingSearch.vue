<script setup>
import { ref } from "@vue/reactivity";
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxButtonSlot from '@/core/components/NftmxButtonSlot.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import NftmxSearchInput from "@/core/components/NftmxSearchInput.vue";
import SearchAccordionContainer from "./container/SearchAccordionContainer.vue";

const filterBy = ref('collection')
const filterActive = ref(false);

function clickFilter() {
    filterActive.value = !filterActive.value;
}
function clickFilterBy(value) {
    filterBy.value = value;
}
</script>

<template>
    <div class="bg-tertiary-800 border-t border-b border-black py-5 px-10 lg:px-22">
        <div class="flex flex-wrap flex-col xl:flex-row justify-between items-center">
            <div class="flex flex-1 w-full min-w-max items-center">
                <nftmx-search-input
                    v-model="filterActive"
                    @handle-filter="clickFilter"
                    navbar
                    class="w-full h-full font-ibm-medium text-sm"
                    placeholder="Search items, collections, and accounts"
                ></nftmx-search-input>
            </div>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 justify-center gap-2 mt-4 lg:mt-0 w-full xl:w-auto"
            >
                <div class="xl:ml-5">
                    <nftmx-button
                        color="secondary"
                        label="LAUNCH YOUR DVC"
                        class="font-press w-full xl:max-w-search text-xs leading-5 h-13.5"
                    />
                </div>
                <div class="xl:mx-2.5">
                    <nftmx-button
                        color="primary"
                        label="DOWNSIDE PROTECTION BENEFITS"
                        class="font-press w-full xl:max-w-search text-xs leading-5 bg-gradient-to-r from-primary-900 to-primary-700 text-white h-13.5"
                    ></nftmx-button>
                </div>
            </div>
        </div>
        <div v-if="filterActive">
            <div class="grid grid-cols-2 text-center text-lg font-ibm-semi-bold mt-5">
                <div
                    @click="clickFilterBy('collection')"
                    :class="[filterBy === 'collection' ? 'text-primary-900 border-primary-900' : 'text-white border-black', 'hover:text-primary-900 border-b-2 hover:border-primary-900 py-4 cursor-pointer']"
                >Collections</div>
                <div
                    @click="clickFilterBy('all')"
                    :class="[filterBy === 'all' ? 'text-primary-900 border-primary-900' : 'text-white border-black', 'hover:text-primary-900 border-b-2 hover:border-primary-900 py-4 cursor-pointer']"
                >All NFTs</div>
            </div>
            <div v-if="filterBy === 'all'" class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 my-4.75">
                <!-- <div class="border border-black w-full px-5 h-42.5">
                    <search-accordion-container title="Status">
                        <template v-slot:content>
                            <nftmx-button-slot>Buy Now</nftmx-button-slot>
                            <nftmx-button-slot>On Auction</nftmx-button-slot>
                            <nftmx-button-slot width="w-full" align="text-left pl-4" outline>New</nftmx-button-slot>
                            <nftmx-button-slot>Has Offers</nftmx-button-slot>
                        </template>
                    </search-accordion-container>
                </div>
                <div class="border border-black w-full px-5 h-42.5">
                    <search-accordion-container title="Status">
                        <template v-slot:content>
                            <nftmx-button-slot>Buy Now</nftmx-button-slot>
                            <nftmx-button-slot>On Auction</nftmx-button-slot>
                            <nftmx-button-slot width="w-full" align="text-left pl-4" outline>New</nftmx-button-slot>
                            <nftmx-button-slot>Has Offers</nftmx-button-slot>
                        </template>
                    </search-accordion-container>
                </div>
                <div class="border border-black w-full px-5 h-42.5">
                    <search-accordion-container title="Status">
                        <template v-slot:content>
                            <nftmx-button-slot>Buy Now</nftmx-button-slot>
                            <nftmx-button-slot>On Auction</nftmx-button-slot>
                            <nftmx-button-slot width="w-full" align="text-left pl-4" outline>New</nftmx-button-slot>
                            <nftmx-button-slot>Has Offers</nftmx-button-slot>
                        </template>
                    </search-accordion-container>
                </div>
                <div class="border border-black w-full px-5 h-42.5">
                    <search-accordion-container title="Status">
                        <template v-slot:content>
                            <nftmx-button-slot>Buy Now</nftmx-button-slot>
                            <nftmx-button-slot>On Auction</nftmx-button-slot>
                            <nftmx-button-slot width="w-full" align="text-left pl-4" outline>New</nftmx-button-slot>
                            <nftmx-button-slot>Has Offers</nftmx-button-slot>
                        </template>
                    </search-accordion-container>
                </div> -->
            </div>
            <div v-if="filterBy === 'collection'" class="pt-6 grid grid-cols-1 sm:grid-cols-2">
                <!-- <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">List Price Available</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Open Offer Available</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Creator Owned</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Sold</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Domain Names</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Music</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Art</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Collectibles</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Virtual Worlds</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Utility</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Most Popular</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Trading Cards</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Reverse Price Set</span>
                    </checkbox-cell>
                    <checkbox-cell class="pb-3.5">
                        <span class="text-xs relative -top-0.5">Sports</span>
                    </checkbox-cell>
                </div> -->
                <div></div>
            </div>
        </div>
    </div>
</template>

<style>
.text-center {
    text-align: -webkit-center;
}
@media (min-width: 1280px) {
    .xl\:max-w-search {
        max-width: 23em;
    }
}
.w-68 {
    width: 17rem /* 260px */;
}
.leading-7\.5 {
    line-height: 30px;
}
.leading-4\.5 {
    line-height: 18px;
}
</style>
