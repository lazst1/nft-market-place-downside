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

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import NftmxButton from './NftmxButton.vue';
import { useToast } from "vue-toastification";

defineProps({
    wallet: {
        type: Object,
        required: true
    }
});

const store = useStore();
const router = useRouter();
const toast = useToast();

const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
        ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                ethereum.request({ method: 'eth_chainId' })
                    .then(chain => {
                        if (chain !== '0x61') {
                            toast.error('Please switch to BSC Testnet');
                            store.dispatch('auth/login', null)
                            router.push('/login');
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
        // MetaMask is locked or the user has not connected any accounts
        toast.error('Please connect to MetaMask')
    } else if (accounts[0] !== store.getters['auth/getWalletAddress']) {
        store.dispatch("auth/login", accounts[0].toLowerCase()).then(
            () => {
                router.push('/profile');
            },
            (error) => {
                toast.error('Something went wrong')
            }
        )
    }
}

</script>
