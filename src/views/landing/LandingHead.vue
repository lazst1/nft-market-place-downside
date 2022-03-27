<script setup>
import HeadButton from './components/HeadButton.vue';

</script>

<template>
    <div
        class="bg-[url('/images/landing/hero-image-1920.png')] bg-no-repeat bg-cover bg-right font-press sm:leading-relaxed xl:leading-relaxed text-white px-5.5 sm:px-10 md:px-16 lg:px-22 h-summary-xs lg:h-96 xl:h-asset-img"
    >
        <div class="max-w-screen-3xl mx-auto">
            <div class="relative top-9 lg:top-24 xl:top-33.25 w-home-sm lg:w-home-md xl:w-home-lg">
                <p
                    class="text-home-sm lg:text-home-md xl:text-home-lg"
                >Buy NFTs with 100% Downside Protection</p>
                <div class="flex flex-wrap mt-3 xl:mt-8.25 gap-5.25 xl:gap-11">
                    <head-button to="home" color="secondary" label="EXPLORE" />
                    <head-button color="primary" label="LIST" />
                </div>
            </div>
        </div>
    </div>
</template>