<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import LandingHead from './LandingHead.vue';
import LandingDescription from './LandingDescription.vue';
import LandingGuide from './LandingGuide.vue';
import LandingSection from './containers/LandingSection.vue';
import LandingTopVcs from './LandingTopVcs.vue';
import LandingPopularSyndications from './LandingPopularSyndications.vue';
import LandingCategories from './LandingCategories.vue';
import SyndicationCarousel from './components/SyndicationCarousel.vue';
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import LandingSyndications from './LandingSyndications.vue';
</script>

<template>
    <landing-head />
    <body-container :padding="false">
        <landing-description />
        <landing-syndications />
        <landing-guide />
        <landing-top-vcs />
        <landing-popular-syndications />
        <landing-categories />
    </body-container>
    <nftmx-footer :devs="true" />
</template>
