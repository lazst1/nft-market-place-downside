<script setup>
import LandingSection from './containers/LandingSection.vue';
import NftmxPriceCommon from '@/core/components/price/NftmxPriceCommon.vue';
import SectionButton from './components/SectionButton.vue';
import NftmxTrimString from '@/core/components/basic/NftmxTrimString.vue';
import { popularSyndications } from '@/core/config'
</script>

<template>
    <landing-section black>
        <div class="font-press text-center pt-1 text-white">
            <div class="text-xl sm:text-2xl lg:text-3xl">Popular Syndications</div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 xl:gap-x-9 mt-4">
            <div
                v-for="(syndication, i) in popularSyndications"
                :key="i"
                class="border-b border-black"
            >
                <div class="flex py-8 gap-6 2xl:gap-9">
                    <div class="text-2xl">1</div>
                    <div class="flex items-center">
                        <div
                            :style="{ background: 'url(' + '/images/nfts/item1-45x.png' + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }"
                            class="w-16 h-15"
                        ></div>
                        <div class="pl-6 font-ibm-medium">
                            <nftmx-trim-string :line="1">{{ syndication.name }}</nftmx-trim-string>
                            <div
                                :class="[syndication.rate > 0 ? 'text-primary-400' : 'text-red-700', 'text-sm']"
                            >{{ syndication.rate > 0 ? '+' + syndication.rate : syndication.rate }}%</div>
                            <div class="text-sm font-ibm text-tertiary-500">
                                <nftmx-price-common :price="syndication.price" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10 text-center">
            <section-button to="home" label="GO TO COLLECTIONS" />
        </div>
    </landing-section>
</template>
