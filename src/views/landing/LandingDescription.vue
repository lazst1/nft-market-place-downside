<script setup>
import LandingSection from './containers/LandingSection.vue';

</script>

<template>
    <landing-section black>
        <div class="font-press text-center mt-0.75">
            <div class="text-xl sm:text-2xl lg:text-3xl">Downside Protection</div>
        </div>
        <div class="grid sm:grid-cols-2 sm:gap-10 text-center mt-6 lg:mt-12">
            <div class="flex flex-col gap-7">
                <div class="text-xl lg:text-2xl font-ibm-bold">For Buyer</div>
                <div
                    class="text-tertiary-500 text-sm sm:text-base"
                >If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens.</div>
            </div>
            <div class="flex flex-col gap-7 mt-6 sm:mt-0">
                <div class="text-xl lg:text-2xl font-ibm-bold">For Seller</div>
                <div
                    class="text-tertiary-500 text-sm sm:text-base"
                >If you are a seller, NFT.mx allows you to increase your success rate by offering buyers downside protection all while gaining profits from the APY in leveraging other people's money.</div>
            </div>
        </div>
    </landing-section>
</template>
