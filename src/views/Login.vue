<script setup>
import { ref } from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import ConnectWallet from '@/core/components/ConnectWallet.vue';
import NftmxWalletCard from '@/core/components/NftmxWalletCard.vue';
import { walletList } from '@/core/config';

const selectedWallet = ref(walletList[0]);

</script>

<template>
    <body-container>
        <connect-wallet :wallet="selectedWallet" />
        <div class="my-7 py-0.5 flex flex-wrap justify-between mx-auto lg:-mx-2 w-min sm:w-auto">
            <nftmx-wallet-card
                v-for="wallet in walletList"
                :key="wallet.id"
                :wallet="wallet"
                @click="selectedWallet = wallet"
                :active="selectedWallet.id === wallet.id"
            />
        </div>
    </body-container>
    <nftmx-footer />
</template>