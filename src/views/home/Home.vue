
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

const store = useStore();
if (store.getters['auth/getWalletAddress']) {
    store.dispatch("market/getSaleOrders");
}

</script>

<template>
    <div
        class="bg-[url('/images/hero-image-1920.png')] bg-no-repeat bg-cover bg-right font-press text-xl sm:text-2.5xl xl:text-4xl sm:leading-relaxed xl:leading-relaxed text-white px-5.5 sm:px-10 md:px-16 lg:px-22 h-summary-xs sm:h-96 lg:h-asset-img"
    >
        <div class="max-w-screen-3xl mx-auto">
            <div
                class="relative top-17 sm:top-32 lg:top-45.75 w-80 sm:w-asset-img xl:w-xl-text"
            >Buy NFTs with 100% Downside Protection</div>
        </div>
    </div>
    <body-container :padding="false" footerExtended>
        <div class="pt-4">
            <syndication-carousel></syndication-carousel>
        </div>

        <nftmx-divider class="mt-9"></nftmx-divider>

        <analyzer />
        <trending-search />
        <trending-assets />
    </body-container>
    <nftmx-footer :devs="true" />
</template>
