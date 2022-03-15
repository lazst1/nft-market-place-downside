<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import LandingHead from './LandingHead.vue';
import LandingDescription from './LandingDescription.vue';
import LandingGuide from './LandingGuide.vue';
import LandingTopVcs from './LandingTopVcs.vue';
import LandingPopularSyndications from './LandingPopularSyndications.vue';
import LandingCategories from './LandingCategories.vue';
import LandingSyndications from './LandingSyndications.vue';
</script>

<template>
    <landing-head />
    <body-container :padding="false" footerExtended>
        <landing-description />
        <landing-syndications />
        <landing-guide />
        <landing-top-vcs />
        <landing-popular-syndications />
        <landing-categories />
    </body-container>
</template>
