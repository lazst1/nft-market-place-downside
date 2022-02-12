<script setup>
import { ref } from "@vue/reactivity";
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxButtonSlot from '@/core/components/NftmxButtonSlot.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import NftmxSearchInput from "@/core/components/NftmxSearchInput.vue";


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
    <div class="bg-tertiary-800 border-t border-b border-black pt-5 pb-4 px-10 lg:px-22">
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
        </div>
        <div v-if="filterActive">
            <div class="grid grid-cols-2 text-center text-lg font-ibm-semi-bold mt-5">
                <div
                    @click="clickFilterBy('collection')"
                    :class="[filterBy === 'collection' ? 'text-primary-900 border-primary-900' : 'text-white border-black', 'hover:text-primary-900 border-b-2 hover:border-primary-900 py-4']"
                >Collections</div>
                <div
                    @click="clickFilterBy('all')"
                    :class="[filterBy === 'all' ? 'text-primary-900 border-primary-900' : 'text-white border-black', 'hover:text-primary-900 border-b-2 hover:border-primary-900 py-4']"
                >All NFTs</div>
            </div>
            <div v-if="filterBy === 'all'" class="flex my-2">
                <div class="border border-black w-fit px-5 h-42.5">
                    <accordion :border="false" :sidebar="true" class="w-58">
                        <template v-slot:caption>
                            <div class="flex items-center w-full">
                                <div class="flex-1 text-xs font-ibm py-4">Status</div>
                            </div>
                        </template>
                        <div class="flex flex-wrap pt-2 gap-y-2 justify-between text-xs">
                            <nftmx-button-slot width="w-28" align="text-left pl-4" outline>Buy Now</nftmx-button-slot>
                            <nftmx-button-slot
                                width="w-28"
                                align="text-left pl-4"
                                outline
                            >On Auction</nftmx-button-slot>
                            <nftmx-button-slot width="w-28" align="text-left pl-4" outline>New</nftmx-button-slot>
                            <nftmx-button-slot
                                width="w-28"
                                align="text-left pl-4"
                                outline
                            >Has Offers</nftmx-button-slot>
                        </div>
                    </accordion>
                </div>
                <nftmx-divider vertical class="mx-2.5" />
                <div class="border border-black w-fit px-5 h-42.5">
                    <accordion :border="false" :sidebar="true" class="w-58">
                        <template v-slot:caption>
                            <div class="flex items-center w-full">
                                <div class="flex-1 text-xs font-ibm py-4">Status</div>
                            </div>
                        </template>
                        <div class="flex flex-wrap pt-2 gap-y-2 justify-between">
                            <!-- <nftmx-select class="font-ibm-bold w-full text-sm mb-3" :data="people" /> -->
                        </div>
                    </accordion>
                </div>
                <nftmx-divider vertical class="mx-2.5" />
                <div class="border border-black w-fit px-5 h-42.5">
                    <accordion :border="false" :sidebar="true" class="w-58">
                        <template v-slot:caption>
                            <div class="flex items-center w-full">
                                <div class="flex-1 text-xs font-ibm py-4">Status</div>
                            </div>
                        </template>
                        <div class="flex flex-wrap pt-2 gap-y-2 justify-between">
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                        </div>
                    </accordion>
                </div>
                <nftmx-divider vertical class="mx-2.5" />
                <div class="border border-black w-fit px-5 h-42.5">
                    <accordion :border="false" :sidebar="true" class="w-58">
                        <template v-slot:caption>
                            <div class="flex items-center w-full">
                                <div class="flex-1 text-xs font-ibm py-4">Status</div>
                            </div>
                        </template>
                        <div class="flex flex-wrap pt-2 gap-y-2 justify-between">
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                            <button
                                class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black"
                            >Buy Now</button>
                        </div>
                    </accordion>
                </div>
            </div>
            <div
                v-if="filterBy === 'collection'"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 pt-6"
            >
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
            </div>
        </div>
    </div>
</template>

<style>
.text-center {
    text-align: -webkit-center;
}
.max-w-search {
    max-width: 23em;
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
