<script setup>
import NftmxTypography from '@/core/components/NftmxTypography.vue';
import LandingSection from './containers/LandingSection.vue';
</script>

<template>
    <landing-section black>
        <div class="font-press text-center pt-1 pb-10 text-white">
            <nftmx-typography h1>Create and Sell Your NFTs</nftmx-typography>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 text-center">
            <div class="flex flex-col items-center px-1">
                <img src="/images/setup-wallet.png" class="py-5" />
                <div class="text-white font-ibm-medium text-lg py-3">Set up your wallet</div>
                <div class="text-tertiary-400 font-ibm text-description">
                    Once you've set up your wallet of choice, connect it to Opensea by clicking the wallet icon in the top right corner. Learn about the
                    <span
                        class="text-primary-400"
                    >wallets we support</span>.
                </div>
            </div>
            <div class="flex flex-col items-center px-1">
                <img src="/images/create-collections.png" class="py-5" />
                <div class="text-white font-ibm-medium text-lg py-3">Create your collection</div>
                <div class="text-tertiary-400 font-ibm text-description">
                    Click
                    <span class="text-primary-400">My Collections</span> and set up your collection.
                    Add social links, a description, profile & banner images, and set a secondary sales fee.
                </div>
            </div>
            <div class="flex flex-col items-center px-1">
                <img src="/images/add-nfts.png" class="py-5" />
                <div class="text-white font-ibm-medium text-lg py-3">Add your NFTs</div>
                <div
                    class="text-tertiary-400 font-ibm text-description"
                >Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</div>
            </div>
            <div class="flex flex-col items-center px-1 text-center">
                <img src="/images/list-sale.png" class="py-5" />
                <div class="text-white font-ibm-medium text-lg py-3">List them for sale</div>
                <div
                    class="text-tertiary-400 font-ibm text-description"
                >Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</div>
            </div>
        </div>
    </landing-section>
</template>
