<script setup>
import NftmxHelp from '@/core/components/NftmxHelp.vue';
import NftmxPrice from '@/core/components/NftmxPrice.vue';
import AnalyzerCardContainer from './container/AnalyzerCardContainer.vue';
</script>


<template>
    <div
        class="grid lg:grid-cols-2 3xl:flex justify-center 3xl:justify-between pt-10.5 pb-2.75 px-22"
    >
        <analyzer-card-container>
            <div class="h-9">
                Decentralized Venture Capital
                <nftmx-help />
            </div>
            <div class="font-ibm-semi-bold text-lg sm:text-xl text-center pt-2">
                <nftmx-price :price="1548985.53" color="secondary"></nftmx-price>
            </div>
            <div class="text-11 font-ibm text-tertiary-400 pt-2.5 pb-3">
                <span>Avg ROI 125.52%&nbsp;</span>
                <span class="font-ibm-bold text-secondary-500">Become A Baker</span>
                |
                <span class="font-ibm-bold text-secondary-700">see more DVCs</span>
            </div>
        </analyzer-card-container>
        <analyzer-card-container>
            <div class="h-10 flex justify-center items-center">Downside Protection</div>
            <div class="font-ibm-semi-bold text-lg sm:text-xl text-center pt-2">
                <nftmx-price :price="6452653.3248"></nftmx-price>
            </div>
        </analyzer-card-container>
        <analyzer-card-container>
            <div class="h-10 flex justify-center items-center">Total sales to Date</div>
            <div class="font-ibm-semi-bold text-lg sm:text-xl text-center pt-2">
                <nftmx-price :price="1256859.6559"></nftmx-price>
            </div>
        </analyzer-card-container>
        <analyzer-card-container>
            <div
                class="h-10 flex justify-center items-center"
            >Decentralized Venture Capital Available</div>
            <div class="font-ibm-semi-bold text-lg sm:text-xl text-center pt-2">
                <nftmx-price :price="25689963.3289"></nftmx-price>
            </div>
        </analyzer-card-container>
    </div>
</template>