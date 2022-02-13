<template>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true">
        <Slide v-for="(item, index) in items" :key="index">
            <div class="carousel__item w-full">
                <div
                    class="m-4 cursor-pointer hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
                >
                    <div
                        :style="{ background: 'url(' + item.img + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }"
                        class="relative w-full pt-55per"
                    >
                        <div
                            class="absolute top-1 -right-1 bg-primary-700 bg-opacity-60 font-ibm-medium px-4 py-2"
                        >
                            <div class="text-sm">10%-100% / 7-365</div>
                            <div class="text-xxs">Downside Protection</div>
                            <div
                                class="w-2 h-2 absolute right-0.5 -bottom-1 bg-primary-900 bg-opacity-60 rotate-45 -z-10"
                            ></div>
                        </div>
                    </div>
                    <div class="bg-tertiary-700 p-6 text-left font-ibm h-56">
                        <div class="flex">
                            <div
                                :style="{ background: 'url(' + '/images/item1-45x.png' + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }"
                                class="w-16 h-15"
                            ></div>
                            <div class="pl-4">
                                <div class="text-white font-ibm-semi-bold">
                                    <nftmx-trim-string>Mutant Ape Yacht Club</nftmx-trim-string>
                                </div>
                                <div class="text-xs text-tertiary-500">
                                    Created by
                                    <span
                                        class="text-primary-900 cursor-pointer"
                                    >MutantApeYachtClub</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-tertiary-500 text-sm mt-5 leading-6">
                            <nftmx-trim-string
                                :line="4"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta mollitia cumque eveniet beatae sequi quas praesentium doloremque rerum error exercitationem illo odit enim, eius quo in commodi dolore fugit?</nftmx-trim-string>
                        </div>
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
import { themeConfig } from '@/core/config';
import NftmxTrimString from '@/core/components/NftmxTrimString.vue';

const windowSize = ref({
    width: 0,
    height: 0
});
const itemsToShow = ref(3);
const items = ref([
    {
        img: '/images/img1.png'
    },
    {
        img: '/images/img2.png'
    },
    {
        img: '/images/img3.png'
    },
    {
        img: '/images/img4.png'
    },
    {
        img: '/images/img5.png'
    },
    {
        img: '/images/img6.png'
    },
    {
        img: '/images/img7.png'
    },
    {
        img: '/images/img8.png'
    }
]);


function handleResize() {
    console.log('======')
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