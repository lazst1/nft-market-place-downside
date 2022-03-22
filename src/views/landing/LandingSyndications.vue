<script setup>
import LandingSection from './containers/LandingSection.vue';
import NftmxPriceCommon from '@/core/components/price/NftmxPriceCommon.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import SyndicationCarousel from './components/SyndicationCarousel.vue';

</script>

<template>
    <landing-section class="px-0 sm:px-0 md:px-0 lg:px-0">
        <div class="font-press text-center pt-1 text-white">
            <div class="text-xl sm:text-2xl lg:text-3xl">Syndications</div>
        </div>
        <div class="mt-4">
            <syndication-carousel></syndication-carousel>
        </div>
    </landing-section>
</template>
