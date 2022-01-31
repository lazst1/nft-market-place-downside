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
        <div>
            <div class="mt-7 mb-16 pt-0.5 pb-1.5 gap-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6 justify-between mx-auto w-fit">
                <nftmx-wallet-card
                    v-for="wallet in walletList"
                    :key="wallet.id"
                    :wallet="wallet"
                    @click="selectedWallet = wallet"
                    :active="selectedWallet.id === wallet.id"
                />
            </div>
        </div>
    </body-container>
    <nftmx-footer />
</template>