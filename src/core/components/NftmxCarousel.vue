<template>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true" class="mt-4">
        <Slide v-for="(item, index) in items" :key="index">
            <div class="carousel__item" :style="{marginLeft: marginLeft+'em'}">
                <div class="grid grid-cols-2 m-4 cursor-pointer hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700">
                    <div :style="{background:'url('+item.img+')', backgroundRepeat:'no-repeat', backgroundSize:'cover'}" class="relative w-82.5 h-82.5 overflow-hidden">
                        <ribbon :percent="100" :period="256" />
                    </div>
                    <div class="relative w-82.5 overflow-hidden bg-black text-white">
                        <div class="py-4 px-8 text-left font-ibm-bold">
                            <div class="text-xl py-2">Syndication</div>
                            <div class="text-xs font-ibm-semi-bold">
                                <nftmx-help>
                                    Syndication type
                                </nftmx-help>
                            </div>
                            <div class="text-primary-900 text-xs font-ibm-medium leading-5">Auction</div>
                            <div class="text-xs font-ibm-semi-bold">
                                <nftmx-help>
                                    Total locked value
                                </nftmx-help>
                            </div>
                            <div class="text-primary-900 text-xs font-ibm-medium leading-5">$1,548,548.65</div>
                        </div>

                        <div class="mt-0.75 mb-1.25 px-8">
                            <nftmx-progress-bar />
                        </div>

                        <div class="snap-center py-2">
                            <div class="text-xs py-2 font-ibm-medium">
                                Current auction ends in
                            </div>
                            <timer class="place-content-center" />
                        </div>
                        <nftmx-button
                            color="secondary"
                            label="JOIN SYNDICATION"
                            class="font-press w-full text-sm py-5 absolute left-0 bottom-0"
                        >
                        </nftmx-button>
                    </div>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import Ribbon from './Ribbon.vue';
import NftmxButton from './NftmxButton.vue';
import NftmxHelp from './NftmxHelp.vue';
import Timer from './Timer.vue';
import NftmxProgressBar from './NftmxProgressBar.vue';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination,
        Ribbon,
        NftmxButton,
        NftmxHelp,
        Timer,
        NftmxProgressBar
    },
    data() {
        return {
            window: {
                width: 0,
                height: 0
            },
            itemsToShow: 2.6,
            marginLeft: -42,
            items: [
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
            ]
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
            if (this.window.width >= 1920) {
                this.itemsToShow = 2.7
            } else if (this.window.width <= 720) {
                this.itemsToShow = 1
            } else {
                this.itemsToShow = (this.window.width - 720) / 700 + 1;
                if (this.itemsToShow > 2) {
                    this.marginLeft = -42
                } else {
                    this.marginLeft = 0
                }
            }
        }
    }
});
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