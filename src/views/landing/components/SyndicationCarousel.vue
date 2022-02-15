<template>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true">
        <Slide v-for="(item, index) in syndications" :key="index">
            <div class="carousel__item" :style="{ marginLeft: marginLeft + 'em' }">
                <div
                    class="transition duration-300 grid grid-cols-2 m-4 cursor-default hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
                >
                    <div
                        :style="{ background: 'url(' + item.img + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
                        class="relative w-82.5 h-82.5 overflow-hidden col-span-2 sm:col-span-1"
                    >
                        <ribbon :percent="100" :period="256" />
                    </div>
                    <div
                        class="relative w-82.5 h-82.5 overflow-hidden bg-black text-white col-span-2 sm:col-span-1"
                    >
                        <div class="py-4 px-8 text-left font-ibm-bold">
                            <div class="text-xl py-2">Syndication</div>
                            <div class="text-xs font-ibm-semi-bold">
                                <nftmx-help>Syndication type</nftmx-help>
                            </div>
                            <div class="text-primary-900 text-xs font-ibm-medium leading-5 flex">
                                {{ item.type === 'AUCTION' ? 'Auction' : 'Fix Sale&nbsp;' }}
                                <nftmx-price-common
                                    v-if="item.type === 'FIX_SALE'"
                                    :price="item.fixPrice"
                                />
                                <span
                                    v-if="item.type === 'FIX_SALE'"
                                    class="text-xs font-ibm text-tertiary-400 flex"
                                >
                                    &nbsp;(
                                    <span class="font-sans">Ξ&nbsp;</span>
                                    {{ item.fixPrice }})
                                </span>
                            </div>
                            <div class="text-xs font-ibm-semi-bold">
                                <nftmx-help>Total locked value</nftmx-help>
                            </div>
                            <div class="text-primary-900 text-xs font-ibm-medium leading-5 flex">
                                <nftmx-price-common
                                    :price="item.lockedValue"
                                />
                                <span
                                    class="text-xs font-ibm text-tertiary-400 flex"
                                >
                                    &nbsp;(
                                    <span class="font-sans">Ξ&nbsp;</span>
                                    {{ '443.25' }})
                                </span>
                            </div>
                        </div>

                        <div class="mt-0.75 mb-1.25 px-8">
                            <nftmx-progress-bar />
                        </div>

                        <div class="snap-center py-2">
                            <div class="text-xs py-2 font-ibm-medium">Current auction ends in</div>
                            <timer class="place-content-center" />
                        </div>
                        <nftmx-button
                            color="secondary"
                            label="JOIN SYNDICATION"
                            class="font-press w-full text-sm py-5 absolute left-0 bottom-0"
                        ></nftmx-button>
                    </div>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup>
import { defineComponent, ref, watchEffect } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import Ribbon from '@/core/components/Ribbon.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import NftmxProgressBar from '@/core/components/NftmxProgressBar.vue';
import 'vue3-carousel/dist/carousel.css';
import { themeConfig, syndications } from '@/core/config';
import NftmxTrimString from '@/core/components/NftmxTrimString.vue';
import NftmxPriceCommon from '@/core/components/NftmxPriceCommon.vue';
import Timer from '@/core/components/Timer.vue';

const windowSize = ref({
    width: 0,
    height: 0
});
const itemsToShow = ref(3);
const marginLeft = ref(-42);

function handleResize() {
    windowSize.value.width = window.innerWidth;
    windowSize.value.height = window.innerHeight;
    if (windowSize.value.width >= 1920) {
        itemsToShow.value = 2.7
    } else if (windowSize.value.width <= 720) {
        itemsToShow.value = 1
        marginLeft.value = 0
    } else {
        itemsToShow.value = (windowSize.value.width - 720) / 700 + 1;
        if (itemsToShow.value > 2) {
            marginLeft.value = -42
        } else {
            marginLeft.value = 0
        }
    }
}
handleResize();
window.addEventListener('resize', handleResize);

</script>

<style scoped>
/deep/ .carousel__slide--prev {
    display: none;
}
/deep/ .carousel__pagination-button {
    width: var(--vc-pgn-width);
    height: var(--vc-pgn-width);
    border-radius: 0;
    background-color: #535353;
    width: 11px;
    height: 11px;
}
/deep/ .carousel__pagination-button--active {
    background-color: #19cb58;
    width: 11px;
    height: 11px;
}
</style>
