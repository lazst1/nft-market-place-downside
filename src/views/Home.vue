<template>
    <body-container :padding="false">
        <div class="bg-[url('/images/hero-image-1920.png')] h-96 2xl:h-full bg-no-repeat bg-cover bg-right font-press line-h text-3xl leading-loose text-white py-32 2xl:py-48 px-24">
            Buy NFTs with 100%<br/>Downside Protection
        </div>
        <nftmx-carousel></nftmx-carousel>
        <nftmx-divider class="mt-9"></nftmx-divider>
        <div class="flex justify-between px-22">
            <div class="pt-12 pb-4 text-white text-center font-press text-sm flex">
                <div class="w-min">
                    <div class="h-10">
                        Decentralized Venture Capital
                        <nftmx-help></nftmx-help>
                    </div>
                    <div class="font-ibm-semi-bold text-xl text-center pt-2">
                        <nftmx-price :price="1548985.53" color="secondary"></nftmx-price>
                    </div>
                    <div class="text-xxs font-ibm text-tertiary-400 pt-2.5 pb-3">
                        <span>
                            Avg ROI 125.52%
                        </span>
                        <span class="font-ibm-bold text-secondary-700">Become A Baker</span>
                        |
                        <span class="font-ibm-bold text-secondary-700">see more DVCs</span>
                    </div>
                </div>
            </div>
            <div class="pt-12 pb-4 text-white text-center font-press text-sm flex">
                <div class="w-min">
                    <div class="h-10 flex justify-center items-center">
                        Total downside protection locked value
                    </div>
                    <div class="font-ibm-semi-bold text-xl text-center pt-2">
                        <nftmx-price :price="6452653.3248"></nftmx-price>
                    </div>
                </div>
            </div>
            <div class="pt-12 pb-4 text-white text-center font-press text-sm flex justify-start">
                <div class="w-min">
                    <div class="h-10 flex justify-center items-center">Total sales to Date</div>
                    <div class="font-ibm-semi-bold text-xl text-center pt-2">
                        <nftmx-price :price="1256859.6559"></nftmx-price>
                    </div>
                </div>
            </div>
            <div class="pt-12 pb-4 text-white text-center font-press text-sm flex justify-end">
                <div class="w-min">
                    <div class="h-10 flex justify-center items-center">
                        Total staking Collected
                    </div>
                    <div class="font-ibm-semi-bold text-xl text-center pt-2">
                        <nftmx-price :price="25689963.3289"></nftmx-price>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-tertiary-800 border-t border-b border-black py-5 px-10 lg:px-22">
            <div class="flex items-center">
                <nav-bar-search-input class="w-full font-ibm-medium text-sm" placeholder="Search items, collections, and accounts"></nav-bar-search-input>
                <font-awesome-icon @click="clickFilter" :icon="['fas', 'filter']" :class="[filterActive?'text-primary-900':'text-white', 'text-lg hover:text-primary-900 cursor-pointer']" />
                <nftmx-button
                    color="secondary"
                    label="LAUNCH YOUR DVC"
                    class="font-press w-full max-w-search text-xs leading-5 mx-2.5"
                />
                <nftmx-button
                    color="primary"
                    label="STAKE/SELL YOUR NFT"
                    class="font-press w-full max-w-search text-xs leading-5 mx-2.5"
                />
                <nftmx-button
                    color="primary"
                    label="STAKE/SELL YOUR LAND"
                    class="font-press w-full max-w-search text-xs leading-5 ml-2.5"
                />
            </div>
            <div v-if="filterActive" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 pt-6">
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">List Price Available</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Open Offer Available</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Creator Owned</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Sold</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Reverse Price Set</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Music</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Most Popular</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Art</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Domain Names</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Virtual Worlds</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Trading Cards</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Collectibles</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Sports</span></checkbox-cell>
                <checkbox-cell class="pb-4"><span class="text-xs relative -top-0.5">Utility</span></checkbox-cell>
            </div>
        </div>
        <div class="flex px-10 py-6 lg:px-20">
            <div class="w-68 pt-2">
                <div class="flex font-press text-white">
                    <span class="flex-1">Ledger</span>
                    <font-awesome-icon :icon="['fas', 'external-link-alt']" class="text-primary-900 cursor-pointer" />
                </div>
                <div class="border border-black my-7">
                    <div class="grid grid-cols-4 border-b border-black">
                        <div class="font-ibm-semi-bold text-xxs text-primary-900 border-r border-black py-4 text-center">SOLD</div>
                        <div class="font-ibm-semi-bold text-xxs text-red-700 border-r border-black py-4 text-center">CANCELED</div>
                        <div class="font-ibm-semi-bold text-xxs text-white border-r border-black py-4 text-center">LISTED</div>
                        <div class="font-ibm-semi-bold text-xxs text-tertiary-500 py-4 text-center">CREATED</div>
                    </div>
                    <div class="grid grid-cols-2 border-b border-black">
                        <div class="font-ibm-medium text-xs text-tertiary-500 border-r border-black py-3 pl-3">Items</div>
                        <div class="font-ibm-medium text-xs text-tertiary-500 py-3 pl-3">Price (USD)</div>
                    </div>
                    <div class="grid grid-cols-2 border-black">
                        <template v-for="(item, index) in items" :key="index">
                            <div class="font-ibm-medium text-xs text-white border-r border-black py-4 pl-3">{{item.name}}</div>
                            <div :class="[item.price>300?'text-red-700':item.price<1?'text-white':'text-primary-900', 'font-ibm-medium text-xs py-4 pl-3']">{{item.price}}</div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="flex-1">
                <div class="font-press text-white">
                    <nftmx-cards-accordion more></nftmx-cards-accordion>
                    <nftmx-divider class="mt-8 mb-6 mx-6"></nftmx-divider>
                    <accordion :border="false">
                        <template v-slot:caption>
                            <div class="flex items-center w-full">
                                <div class="flex-1 text-sm font-press py-4 mr-24">
                                    Digital Art
                                </div>
                            </div>
                        </template>
                        <div class="px-6 pt-2">
                            <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
                                <nftmx-sale-card :connect="true"></nftmx-sale-card>
                                <nftmx-sale-card></nftmx-sale-card>
                                <nftmx-sale-card :bought="true"></nftmx-sale-card>
                                <nftmx-sale-card :sold="true"></nftmx-sale-card>
                                <nftmx-sale-card :closed="true"></nftmx-sale-card>
                            </div>
                        </div>
                    </accordion>
                </div>
            </div>
        </div>
    </body-container>
    <nftmx-footer :devs="true" />
</template>

<style>
.text-center {
    text-align: -webkit-center;
}
.max-w-search {
    max-width: 23em;
}
.w-68 {
    width: 17rem/* 260px */;
}
.leading-7\.5 {
    line-height: 30px;
}
.leading-4\.5 {
    line-height: 18px;
}
</style>

<script>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxCarousel from '@/core/components/NftmxCarousel.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import NftmxHelp from '@/core/components/NftmxHelp.vue';
import NftmxPrice from '@/core/components/NftmxPrice.vue';
import NavBarSearchInput from '@/core/components/NavBarSearchInput.vue';
import Icon from '@/core/components/Icon.vue'
import NftmxButton from '@/core/components/NftmxButton.vue';
import CheckboxCell from '@/core/components/CheckboxCell.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import { defineComponent } from 'vue';
import NftmxCardsAccordion from '@/core/components/NftmxCardsAccordion.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxTooltip from '@/core/components/NftmxTooltip.vue';
const items = [
    {
        name: "Hashtasks #21",
        price: 55
    },
    {
        name: "Hashtasks #21",
        price: 322.4445
    },
    {
        name: "Hashtasks #21",
        price:0.291
    },
    {
        name: "Hashtasks #21",
        price: 78.220
    }
]

export default defineComponent({
    components: {
        BodyContainer,
        NftmxCarousel,
        NftmxDivider,
        NftmxHelp,
        NftmxPrice,
        NavBarSearchInput,
        Icon,
        NftmxButton,
        CheckboxCell,
        Accordion,
        NftmxSaleCard,
        NftmxCardsAccordion,
        NftmxFooter,
        NftmxTooltip
    },
    data() {
        return {
            filterActive: false,
            items: items
        }
    },
    methods: {
        clickFilter() {
            this.filterActive = !this.filterActive;
        }
    }
})

</script>
