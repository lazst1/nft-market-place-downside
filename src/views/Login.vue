<script setup>
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import ConnectWallet from '@/core/components/ConnectWallet.vue';
import NftmxWalletCard from '@/core/components/NftmxWalletCard.vue';
import { walletList } from '@/core/config';


</script>

<template>
    <body-container>
        <connect-wallet :wallet="walletList[0]" />
        <div class="my-7 py-0.5 flex flex-wrap justify-between mx-auto lg:-mx-2 w-min sm:w-fit">
            <nftmx-wallet-card v-for="wallet in walletList" :key="wallet.id" :wallet="wallet"></nftmx-wallet-card>
        </div>
    </body-container>
    <nftmx-footer />
</template>