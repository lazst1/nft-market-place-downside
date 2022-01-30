<script setup>
import { computed, ref } from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import ConnectWallet from '@/core/components/ConnectWallet.vue';
import NftmxWalletCard from '@/core/components/NftmxWalletCard.vue';
import { walletList } from '@/core/config';
import { useRouter } from 'vue-router'

const router = useRouter();
const loggedIn = localStorage.getItem('isLoggedIn');
if (loggedIn) {
    router.push('/profile')
}
const selectedWallet = ref(walletList[0]);

</script>

<template>
    <body-container>
        <div class="mt-8">
            <connect-wallet :wallet="selectedWallet" />
        </div>
        <div class="mt-7 mb-16 pt-0.5 pb-1.5 flex flex-wrap justify-between mx-auto lg:-mx-2 w-min sm:w-auto">
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