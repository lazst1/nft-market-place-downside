<script setup>
import LandingSection from './containers/LandingSection.vue';
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import NftmxPriceCommon from '@/core/components/NftmxPriceCommon.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';

</script>

<template>
    <landing-section>
        <div class="font-press text-center pt-1 text-white">
            <nftmx-typography h1>All Categories</nftmx-typography>
        </div>
        <div class="mt-4">
            <nftmx-carousel></nftmx-carousel>
        </div>
        <div class="mt-10 text-center">
            <nftmx-button
                to="home"
                color="primary"
                label="GO TO RANKINGS"
                :outline="true"
                class="font-ibm-medium text-lg text-primary-700 hover:text-white h-13.5"
            />
        </div>
    </landing-section>
</template>
