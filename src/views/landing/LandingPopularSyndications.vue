<script setup>
import LandingSection from './containers/LandingSection.vue';
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import NftmxPriceCommon from '@/core/components/NftmxPriceCommon.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';

</script>

<template>
    <landing-section black>
        <div class="font-press text-center pt-1 text-white">
            <nftmx-typography h1>PopularSyndications</nftmx-typography>
        </div>
        <div class="grid lg:grid-cols-4 gap-x-7 xl:gap-x-9 mt-4">
            <div v-for="i in 8" :key="i" class="border-b border-black">
                <div class="flex py-8 lg:gap-6 2xl:gap-9">
                    <div class="font-bold text-2xl">1</div>
                    <div class="flex items-center">
                        <div
                            :style="{ background: 'url(' + '/images/item1-45x.png' + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }"
                            class="w-16 h-15"
                        ></div>
                        <div class="pl-6">
                            <div>Mutant Ape Yacht Club</div>
                            <div class="text-sm text-tertiary-500">
                                <nftmx-price-common price="50000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10 text-center">
            <nftmx-button
                to="home"
                color="primary"
                label="GO TO COLLECTIONS"
                :outline="true"
                class="font-ibm-medium text-lg text-primary-700 hover:text-white h-13.5"
            />
        </div>
    </landing-section>
</template>
