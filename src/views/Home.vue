<template>
    <body-container :padding="false">
        <div class="bg-[url('/images/hero-image-1920.png')] h-96 2xl:h-full bg-no-repeat bg-cover bg-right font-press line-h text-3xl leading-loose text-white py-32 2xl:py-48 px-24">
            Buy NFTs with 100%<br/>Downside Protection
        </div>

        <nftmx-carousel></nftmx-carousel>

        <nftmx-divider class="mt-9"></nftmx-divider>

        <nftmx-analyzer />

        <div class="bg-tertiary-800 border-t border-b border-black py-5 px-10 lg:px-22">
            <div class="flex flex-wrap justify-between items-center">
                <div class="flex flex-1 w-full min-w-max items-center">
                    <nav-bar-search-input class="w-full font-ibm-medium text-sm" placeholder="Search items, collections, and accounts"></nav-bar-search-input>
                    <font-awesome-icon @click="clickFilter" :icon="['fas', 'filter']" :class="[filterActive?'text-primary-900':'text-white', 'text-lg hover:text-primary-900 cursor-pointer']" />
                </div>
                <nftmx-button
                    color="secondary"
                    label="LAUNCH YOUR DVC"
                    class="font-press w-full max-w-search text-xs leading-5 mx-2.5"
                />
                <button class="font-press w-full max-w-search text-xs leading-5 ml-2.5 bg-gradient-to-r from-primary-900 to-primary-700 text-white h-13">
                    DOWNSIDE PROTECTION BENEFITS
                </button>
            </div>
            <div>
                <div class="font-ibm-bold text-white text-xs mt-8 mb-7">
                    <button class="bg-black w-30 h-9">
                        All NFTs
                    </button>
                    <button class="bg-primary-900 w-30 h-9">
                        Collections
                    </button>
                </div>
                <div class="flex my-2">
                    <div class="border border-black w-fit px-5 h-42.5">
                        <accordion :border="false" :sidebar="true" class="w-58">
                            <template v-slot:caption>
                                <div class="flex items-center w-full">
                                    <div class="flex-1 text-xs font-ibm py-4">
                                        Status
                                    </div>
                                </div>
                            </template>
                            <div class="flex flex-wrap pt-2 gap-y-2 justify-between text-xs">
                                <nftmx-button1 width="w-28" align="text-left pl-4" outline>Buy Now</nftmx-button1>
                                <nftmx-button1 width="w-28" align="text-left pl-4" outline>On Auction</nftmx-button1>
                                <nftmx-button1 width="w-28" align="text-left pl-4" outline>New</nftmx-button1>
                                <nftmx-button1 width="w-28" align="text-left pl-4" outline>Has Offers</nftmx-button1>
                            </div>
                        </accordion>
                    </div>
                    <nftmx-divider vertical class="mx-2.5" />
                    <div class="border border-black w-fit px-5 h-42.5">
                        <accordion :border="false" :sidebar="true" class="w-58">
                            <template v-slot:caption>
                                <div class="flex items-center w-full">
                                    <div class="flex-1 text-xs font-ibm py-4">
                                        Status
                                    </div>
                                </div>
                            </template>
                            <div class="flex flex-wrap pt-2 gap-y-2 justify-between">
                                <nftmx-select class="font-ibm-bold w-full text-sm mb-3" :data="people" />
                            </div>
                        </accordion>
                    </div>
                    <nftmx-divider vertical class="mx-2.5" />
                    <div class="border border-black w-fit px-5 h-42.5">
                        <accordion :border="false" :sidebar="true" class="w-58">
                            <template v-slot:caption>
                                <div class="flex items-center w-full">
                                    <div class="flex-1 text-xs font-ibm py-4">
                                        Status
                                    </div>
                                </div>
                            </template>
                            <div class="flex flex-wrap pt-2 gap-y-2 justify-between">
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                            </div>
                        </accordion>
                    </div>
                    <nftmx-divider vertical class="mx-2.5" />
                    <div class="border border-black w-fit px-5 h-42.5">
                        <accordion :border="false" :sidebar="true" class="w-58">
                            <template v-slot:caption>
                                <div class="flex items-center w-full">
                                    <div class="flex-1 text-xs font-ibm py-4">
                                        Status
                                    </div>
                                </div>
                            </template>
                            <div class="flex flex-wrap pt-2 gap-y-2 justify-between">
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                                <button class="bg-primary-900 text-white text-xs w-28 h-9 text-left pl-4 border border-black">Buy Now</button>
                            </div>
                        </accordion>
                    </div>
                </div>
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

        <div class="flex px-10 py-6 lg:px-22">
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
            <div class="flex-1 pl-5">
                <div class="font-press text-white">
                    <nftmx-cards-accordion more></nftmx-cards-accordion>
                    <nftmx-divider class="mt-8 mb-6"></nftmx-divider>
                    <accordion :border="false" :sidebar="true">
                        <template v-slot:caption>
                            <div class="flex items-center w-full">
                                <div class="flex-1 text-sm font-press py-4 mr-24">
                                    Digital Art
                                </div>
                            </div>
                        </template>
                        <div class="pt-2">
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
import NftmxAnalyzer from '@/core/components/NftmxAnalyzer.vue';
import NftmxButton1 from '@/core/components/NftmxButton1.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
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

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Arlene Mccoy',
        image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Devon Webb',
        image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Tom Cook',
        image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 5,
        name: 'Tanya Fox',
        image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 6,
        name: 'Hellen Schmidt',
        image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 7,
        name: 'Caroline Schultz',
        image:
        'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 8,
        name: 'Mason Heaney',
        image:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 9,
        name: 'Claudie Smitham',
        image:
        'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 10,
        name: 'Emil Schaefer',
        image:
        'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
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
    NftmxTooltip,
    NftmxAnalyzer,
    NftmxButton1,
    NftmxSelect
},
    data() {
        return {
            filterActive: false,
            items: items,
            people: people
        }
    },
    methods: {
        clickFilter() {
            this.filterActive = !this.filterActive;
        }
    }
})

</script>
