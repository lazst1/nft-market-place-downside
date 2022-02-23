<script setup>
import LandingSection from './containers/LandingSection.vue';
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import NftmxPriceCommon from '@/core/components/NftmxPriceCommon.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import SyndicationCarousel from './components/SyndicationCarousel.vue';

</script>

<template>
    <landing-section class="px-0 sm:px-0 md:px-0 lg:px-0">
        <div class="font-press text-center pt-1 text-white">
            <nftmx-typography h1>Syndications</nftmx-typography>
        </div>
        <div class="mt-4">
            <syndication-carousel></syndication-carousel>
        </div>
    </landing-section>
</template>
