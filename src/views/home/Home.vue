
<script setup>
import { computed, ref } from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxCarousel from '@/core/components/NftmxCarousel.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import NftmxHelp from '@/core/components/NftmxHelp.vue';
import NftmxPrice from '@/core/components/NftmxPrice.vue';
import Icon from '@/core/components/Icon.vue'
import Accordion from '@/core/container/Accordion.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxTooltip from '@/core/components/NftmxTooltip.vue';
import NftmxAnalyzer from '@/core/components/NftmxAnalyzer.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import TrendingAssets from './TrendingAssets.vue';
import TrendingSearch from './TrendingSearch.vue';
import { useStore } from 'vuex';

const user = computed(() => {
    return this.$store.state.auth.user;
})
const store = useStore();
if (store.getters['auth/getWalletAddress']) {
    store.dispatch("market/getSaleOrders");
}

</script>

<template>
    <div
        class="bg-[url('/images/hero-image-1920.png')] bg-no-repeat bg-cover bg-right font-press text-xl sm:text-2.5xl xl:text-4xl sm:leading-relaxed xl:leading-relaxed text-white px-5.5 sm:px-10 md:px-16 lg:px-22 h-summary-xs sm:h-96 lg:h-asset-img"
    >
        <div
            class="relative top-17 sm:top-32 lg:top-45.75 w-80 sm:w-asset-img xl:w-xl-text"
        >Buy NFTs with 100% Downside Protection</div>
    </div>
    <body-container :padding="false">
        <div class="pt-4">
            <nftmx-carousel></nftmx-carousel>
        </div>

        <nftmx-divider class="mt-9"></nftmx-divider>

        <nftmx-analyzer />
        <trending-search />
        <trending-assets />
    </body-container>
    <nftmx-footer :devs="true" />
</template>
