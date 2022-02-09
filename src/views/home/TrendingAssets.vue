<script setup>
import { ref } from 'vue';
import NftmxCardsAccordion from '@/core/components/NftmxCardsAccordion.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import AccordionContainer from './container/AccordionContainer.vue';
import Assets1 from './components/Assets1.vue';
import Assets2 from './components/Assets2.vue';

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
        price: 0.291
    },
    {
        name: "Hashtasks #21",
        price: 78.220
    }
]

</script>

<template>
    <div class="flex flex-wrap justify-center px-10 py-6 lg:px-22">
        <div class="w-full sm:w-68 pt-2">
            <div class="flex font-press text-white">
                <span class="flex-1">Ledger</span>
                <font-awesome-icon
                    :icon="['fas', 'external-link-alt']"
                    class="text-primary-900 cursor-pointer"
                />
            </div>
            <div class="border border-black my-7 bg-tertiary-800">
                <div class="grid grid-cols-4 border-b border-black">
                    <div
                        class="font-ibm-semi-bold text-xxs text-primary-900 border-r border-black py-4 text-center hover:bg-tertiary-900 cursor-pointer"
                    >SOLD</div>
                    <div
                        class="font-ibm-semi-bold text-xxs text-red-700 border-r border-black py-4 text-center hover:bg-tertiary-900 cursor-pointer"
                    >CANCELED</div>
                    <div
                        class="font-ibm-semi-bold text-xxs text-white border-r border-black py-4 text-center hover:bg-tertiary-900 cursor-pointer"
                    >LISTED</div>
                    <div
                        class="font-ibm-semi-bold text-xxs text-tertiary-500 py-4 text-center hover:bg-tertiary-900 cursor-pointer"
                    >CREATED</div>
                </div>
                <div class="grid grid-cols-2 border-b border-black">
                    <div
                        class="font-ibm-medium text-xs text-tertiary-500 border-r border-black py-3 pl-3"
                    >Items</div>
                    <div class="font-ibm-medium text-xs text-tertiary-500 py-3 pl-3">Price (USD)</div>
                </div>
                <div class="grid grid-cols-2 border-black">
                    <template v-for="(item, index) in items" :key="index">
                        <div
                            class="font-ibm-medium text-xs text-white border-r border-black py-4 pl-3"
                        >{{ item.name }}</div>
                        <div
                            :class="[item.price > 300 ? 'text-red-700' : item.price < 1 ? 'text-white' : 'text-primary-900', 'font-ibm-medium text-xs py-4 pl-3']"
                        >{{ item.price }}</div>
                    </template>
                </div>
            </div>
        </div>
        <div class="flex-1 sm:pl-5">
            <div class="font-press text-white">
                <assets1 />
                <nftmx-divider class="mt-8 mb-6"></nftmx-divider>
                <assets2 />
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-center {
    text-align: -webkit-center;
}
</style>