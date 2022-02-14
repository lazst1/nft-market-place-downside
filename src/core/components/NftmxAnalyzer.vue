<script setup>
import NftmxHelp from './NftmxHelp.vue';
import NftmxPrice from './NftmxPrice.vue';
</script>


<template>
    <div class="grid lg:grid-cols-2 3xl:grid-cols-4 justify-center px-22 sm:gap-6">
        <div class="justify-center pt-12 pb-4 text-white text-center font-press text-10 flex">
            <div class="w-min">
                <div class="h-10">
                    Decentralized Venture Capital
                    <nftmx-help />
                </div>
                <div class="font-ibm-semi-bold text-xl text-center pt-2">
                    <nftmx-price :price="1548985.53" color="secondary"></nftmx-price>
                </div>
                <div class="text-xxs font-ibm text-tertiary-400 pt-2.5 pb-3">
                    <span>Avg ROI 125.52%&nbsp;</span>
                    <span class="font-ibm-bold text-secondary-700">Become A Baker</span>
                    |
                    <span
                        class="font-ibm-bold text-secondary-700"
                    >see more DVCs</span>
                </div>
            </div>
        </div>
        <div class="justify-center pt-12 pb-4 text-white text-center font-press text-10 flex">
            <div class="w-min">
                <div
                    class="h-10 flex justify-center items-center"
                >Downside Protection</div>
                <div class="font-ibm-semi-bold text-xl text-center pt-2">
                    <nftmx-price :price="6452653.3248"></nftmx-price>
                </div>
            </div>
        </div>
        <div class="justify-center pt-12 pb-4 text-white text-center font-press text-10 flex">
            <div class="w-min">
                <div class="h-10 flex justify-center items-center">Total sales to Date</div>
                <div class="font-ibm-semi-bold text-xl text-center pt-2">
                    <nftmx-price :price="1256859.6559"></nftmx-price>
                </div>
            </div>
        </div>
        <div class="justify-center pt-12 pb-4 text-white text-center font-press text-10 flex">
            <div class="w-min">
                <div class="h-10 flex justify-center items-center">Decentralized Venture Capital Available</div>
                <div class="font-ibm-semi-bold text-xl text-center pt-2">
                    <nftmx-price :price="25689963.3289"></nftmx-price>
                </div>
            </div>
        </div>
    </div>
</template>