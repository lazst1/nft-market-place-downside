<script setup>
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import LandingSection from './containers/LandingSection.vue';

</script>

<template>
    <landing-section black>
        <div class="font-press text-center xl:mt-0.75">
            <nftmx-typography h1>Downside Protection</nftmx-typography>
        </div>
        <div class="grid sm:grid-cols-2 px-4 lg:px-22 sm:gap-10 text-center pt-6 lg:pt-12 pb-14">
            <div class="py-0.5">
                <div class="text-xl lg:text-2xl font-ibm-bold">For Buyer</div>
                <div
                    class="text-tertiary-500 py-5 lg:py-7 mt-px"
                >If you are a buyer, think of NFT.mx as a new strategic staking program with upside from selling the NFT, while also providing the option to cancel your investment and get a 100% refund with your original tokens.</div>
            </div>
            <div class="">
                <div class="text-xl lg:text-2xl font-ibm-bold">For Seller</div>
                <div
                    class="text-tertiary-500 py-7"
                >If you are a seller, NFT.mx allows you to increase your success rate by offering buyers downside protection all while gaining profits from the APY in leveraging other people's money.</div>
            </div>
        </div>
    </landing-section>
</template>
