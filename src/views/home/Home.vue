
<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxAnalyzer from '@/core/components/NftmxAnalyzer.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import TrendingAssets from './TrendingAssets.vue';
import TrendingSearch from './TrendingSearch.vue';
import SyndicationCarousel from '../landing/components/SyndicationCarousel.vue';
import Analyzer from './Analyzer.vue';
import NftmxTypography from '@/core/components/NftmxTypography.vue';

const store = useStore();

</script>

<template>
    <div
        class="bg-[url('/images/landing/hero-image-1920.png')] bg-no-repeat bg-cover bg-right font-press sm:leading-relaxed xl:leading-relaxed text-white px-5.5 sm:px-10 md:px-16 lg:px-22 h-summary-xs lg:h-96 xl:h-asset-img"
    >
        <div class="max-w-screen-3xl mx-auto">
            <div class="relative top-16.75 lg:top-36 xl:top-45.5 w-home-sm lg:w-home-md xl:w-home-lg">
                <nftmx-typography home>Buy NFTs with 100% Downside Protection</nftmx-typography>
            </div>
        </div>
    </div>
    <body-container :padding="false" footerExtended>
        <div class="pt-6 sm:pt-4">
            <syndication-carousel></syndication-carousel>
        </div>
        <nftmx-divider class="mt-9"></nftmx-divider>
        <analyzer />
        <trending-search />
        <trending-assets />
    </body-container>
</template>
