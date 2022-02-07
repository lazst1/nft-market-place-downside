<script setup>
import NftmxButton from '@/core/components/NftmxButton.vue';

</script>

<template>
    <div
        class="bg-[url('/images/hero-image-1920.png')] bg-no-repeat bg-cover bg-right font-press text-2xl lg:text-4xl lg:leading-relaxed text-white py-32 2xl:py-32 px-5.5 sm:px-10 md:px-16 lg:px-24"
    >
        <div class="mt-1.25 mb-5">
            Buy NFTs with 100%
            <br />Downside Protection
        </div>
        <div class="pt-0.75 mb-6 pb-0.5">
            <nftmx-button
                to="home"
                color="secondary"
                label="EXPLORE"
                class="font-press w-full max-w-md text-sm h-15 mr-px"
            />
            <nftmx-button
                color="primary"
                label="CREATE"
                class="font-press w-full max-w-md text-sm h-15 sm:ml-11"
            />
        </div>
    </div>
</template>