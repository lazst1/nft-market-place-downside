<template>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true">
        <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item" :style="{marginLeft: marginLeft+'em'}">
                <div class="grid grid-cols-2 m-4 cursor-pointer hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700">
                    <div class="relative w-80 h-80 overflow-hidden bg-[url('@/assets/test.jpg')] bg-cover">
                        <ribbon :percent="100" :period="256" />
                    </div>
                    <div class="relative w-80 overflow-hidden bg-black text-white">
                        <div class="py-6 px-8 text-left font-ibm-bold leading-10">
                            <div class="text-xl pb-2">Syndication</div>
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
            <!-- <Navigation /> -->
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
        Timer
    },
    data() {
        return {
            window: {
                width: 0,
                height: 0
            },
            itemsToShow: 2.9,
            marginLeft: -42
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
                this.itemsToShow = 2.9
            } else if (this.window.width <= 720) {
                this.itemsToShow = 1
            } else {
                this.itemsToShow = (this.window.width - 720) / 620 + 1;
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
.carousel__item {
    /* margin-left: -42em; */
}
/deep/ .carousel__slide--prev {
    display: none;
}
/deep/ .carousel__pagination-button {
    width: var(--vc-pgn-width);
    height: var(--vc-pgn-width);
    border-radius: 0;
    background-color: #535353;
}
/deep/ .carousel__pagination-button--active {
    background-color: #19cb58;
}
</style>