<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import { useToast } from "vue-toastification";
import { mainChain } from '@/core/config'

defineProps({
    wallet: {
        type: Object,
        required: true
    }
});

const store = useStore();
const toast = useToast();

const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
        ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                ethereum.request({ method: 'eth_chainId' })
                    .then(chain => {
                        if (chain !== mainChain) {
                            toast.error('Please switch to BSC Testnet');
                            store.dispatch('auth/login', null)
                        } else {
                            handleLogin(accounts)
                        }
                    })
            })
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    toast.error('Please connect to MetaMask')
                } else {
                    toast.error('Something went wrong')
                }
            });
    } else {
        toast.error('Please install MetaMask')
    }
}

const handleLogin = (accounts) => {
    if (accounts.length === 0) {
        toast.error('Please connect to MetaMask')
    }
}

</script>

<template>
    <div class="flex flex-col text-center justify-center items-center">
        <div class="w-fit font-press text-sm sm:pt-4 sm:pb-6">
            <img :src="wallet.imgUrl" alt class />
            <nftmx-button
                color="primary"
                label="CONNECT YOUR WALLET"
                class="font-press w-full text-sm h-13.5"
                @click="connect()"
            />
        </div>
        <div class="text-white text-sm py-1.25">Use a different wallet</div>
    </div>
</template>
