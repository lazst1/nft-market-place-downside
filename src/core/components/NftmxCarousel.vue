<template>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true">
        <Slide v-for="(item, index) in syndications" :key="index">
            <div class="carousel__item" :style="{ marginLeft: marginLeft + 'em' }">
                <div
                    class="grid grid-cols-2 m-4 cursor-pointer hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
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
                            <div class="text-primary-900 text-xs font-ibm-medium leading-5">Auction</div>
                            <div class="text-xs font-ibm-semi-bold">
                                <nftmx-help>Total locked value</nftmx-help>
                            </div>
                            <div
                                class="text-primary-900 text-xs font-ibm-medium leading-5"
                            >$1,548,548.65</div>
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

const windowSize = ref({
    width: 0,
    height: 0
});
const itemsToShow = ref(3);

function handleResize() {
    windowSize.value.width = window.innerWidth;
    windowSize.value.height = window.innerHeight;
    if (windowSize.value.width >= themeConfig.xl) {
        itemsToShow.value = 3
    } else if (windowSize.value.width >= themeConfig.sm) {
        itemsToShow.value = 2
    } else {
        itemsToShow.value = 1
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
