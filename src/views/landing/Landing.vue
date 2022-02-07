<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxCarousel from '@/core/components/NftmxCarousel.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import LandingHead from './LandingHead.vue';
import LandingDescription from './LandingDescription.vue';
import LandingGuide from './LandingGuide.vue';

</script>

<template>
    <landing-head />
    <body-container :padding="false">
        <landing-description />
        <div class="pt-24 pb-22">
            <div class="font-press text-3xl text-center pt-1.5 pb-10 text-white">Syndication</div>
            <nftmx-carousel></nftmx-carousel>
        </div>

        <landing-guide />

        <div class="pt-24 pb-22">
            <div class="font-press text-center pt-1 pb-10 text-white">
                <nftmx-typography h1>Top Decentralized VCs</nftmx-typography>
            </div>
        </div>
    </body-container>
    <nftmx-footer :devs="true" />
</template>
