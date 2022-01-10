<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import ConnectWallet from '@/core/components/ConnectWallet.vue';


</script>

<template>
    <body-container>
        <connect-wallet wallet="metamask" />
        <div class="my-7 py-0.5">
            <div class="w-68 h-68 bg-tertiary-700 hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_0px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700 text-center text-white text-sm font-ibm-bold py-7">
                <img src="/images/wallet_logo/metamask.png" alt="" class="w-42 mb-6">
                MetaMask
            </div>
        </div>
    </body-container>
    <nftmx-footer />
</template>