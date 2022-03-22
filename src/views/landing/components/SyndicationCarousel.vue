<template>
    <carousel :items-to-show="itemsToShow" :wrap-around="true">
        <slide v-for="(item, index) in syndications" :key="index">
            <div class="carousel__item" :style="{ marginLeft: marginLeft + 'em' }">
                <div
                    class="transition duration-300 grid grid-cols-2 m-4 cursor-default hover:shadow-[0_0px_12px_0px_rgb(0_0_0_/_0.1),_0_0px_0px_0px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
                >
                    <div
                        :style="{ background: 'url(' + item.img + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }"
                        class="relative w-70.75 h-70.75 2xl:w-82.5 2xl:h-82.5 overflow-hidden col-span-2 sm:col-span-1"
                    >
                        <ribbon :percent="100" :period="256" />
                    </div>
                    <div
                        class="flex flex-col justify-between relative w-70.75 h-70.75 2xl:w-82.5 2xl:h-82.5 overflow-hidden bg-black text-white col-span-2 sm:col-span-1"
                    >
                        <div class="pt-4 pb-2.25 2xl:pb-4 px-8 text-left font-ibm-bold">
                            <div class="text-lg 2xl:text-xl pt-1.5 2xl:pt-2.25">Syndication</div>
                            <div class="text-11 2xl:text-xs 2xl:mt-2">
                                <div class="font-ibm-semi-bold flex">
                                    Syndication type
                                    <nftmx-help class="text-8"></nftmx-help>
                                </div>
                                <div class="text-primary-900 font-ibm-medium leading-5 flex">
                                    {{ item.type === 'AUCTION' ? 'Auction' : 'Fix Sale&nbsp;' }}
                                    <nftmx-price-common
                                        v-if="item.type === 'FIX_SALE'"
                                        :price="item.fixPrice"
                                    />
                                    <span
                                        v-if="item.type === 'FIX_SALE'"
                                        class="font-ibm text-tertiary-400 flex"
                                    >
                                        &nbsp;(
                                        <span class="font-sans">Ξ&nbsp;</span>
                                        {{ item.fixPrice }})
                                    </span>
                                </div>
                                <div class="font-ibm-semi-bold flex">
                                    Total locked value
                                    <nftmx-help class="text-8"></nftmx-help>
                                </div>
                                <div class="text-primary-900 font-ibm-medium leading-5 flex">
                                    <nftmx-price-common :price="item.lockedValue" />
                                    <span class="font-ibm text-tertiary-400 flex">
                                        &nbsp;(
                                        <span class="font-sans">Ξ&nbsp;</span>
                                        {{ '443.25' }})
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-0.75 mb-1.25 px-8">
                            <nftmx-progress-bar />
                        </div>

                        <div class="snap-center pt-1.5 2xl:pt-2 pb-2">
                            <div
                                class="2xl:pt-2 pb-2 font-ibm-medium text-11 2xl:text-xs"
                            >Current auction ends in</div>
                            <div class="flex justify-center">
                                <timer />
                            </div>
                        </div>
                        <nftmx-button
                            color="secondary"
                            label="JOIN SYNDICATION"
                            class="font-press w-full text-xs 2xl:text-sm py-4.25 2xl:py-5 absolute left-0 bottom-0"
                        ></nftmx-button>
                    </div>
                </div>
            </div>
        </slide>

        <template #addons>
            <pagination />
        </template>
    </carousel>
</template>

<script setup>
import { defineComponent, ref, watchEffect } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import Ribbon from '@/core/components/basic/Ribbon.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import NftmxProgressBar from '@/core/components/basic/NftmxProgressBar.vue';
import 'vue3-carousel/dist/carousel.css';
import { themeConfig, syndications } from '@/core/config';
import NftmxTrimString from '@/core/components/basic/NftmxTrimString.vue';
import NftmxPriceCommon from '@/core/components/price/NftmxPriceCommon.vue';
import Timer from '@/core/components/timer/Timer.vue';
import NftmxHelp from '@/core/components/basic/NftmxHelp.vue';

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
    } else if (windowSize.value.width < 640) {
        itemsToShow.value = 1.01
        marginLeft.value = 0
    } else {
        const base = windowSize.value.width >= 1190 ? 2 : 1;
        const adjust = windowSize.value.width >= 1536 ? 1410 : windowSize.value.width >= 1190 ? 1192 : 600;
        const adjustLeft = windowSize.value.width >= 1536 ? -42 : windowSize.value.width >= 1190 ? -38 : -37;
        const adjustDivide = windowSize.value.width >= 1190 ? 660 : 566;
        itemsToShow.value = (windowSize.value.width - adjust) / adjustDivide + base;
        if (itemsToShow.value > 2) {
            marginLeft.value = adjustLeft
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
