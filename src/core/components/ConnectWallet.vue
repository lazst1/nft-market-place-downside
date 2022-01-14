<template>
    <div class="text-center">
        <div class="w-fit font-press text-sm pt-4 pb-6">
            <img :src="wallet.imgUrl" alt="" class="" />
            <nftmx-button1
                size="big"
                class="-mt-6"
                @click="connect()"
            >
                CONNECT YOUR WALLET
            </nftmx-button1>
        </div>
        <div class="text-white text-sm py-1.25">
            Use a different wallet
        </div>
    </div>
</template>

<script>
import NftmxButton1 from './NftmxButton1.vue';

export default {
    props: {
        wallet: {
            type: Object,
            required: true
        }
    },
    components: {
        NftmxButton1
    },
    methods: {
        connect() {
            ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(this.handleLogin)
                .catch((err) => {
                    if (err.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        // If this happens, the user rejected the connection request.
                        console.log('Please connect to MetaMask.');
                    } else {
                        console.error(err);
                    }
                });
        },
        handleLogin(accounts) {
            if (accounts.length === 0) {
                // MetaMask is locked or the user has not connected any accounts
                console.log('Please connect to MetaMask.');
            } else if (accounts[0] !== this.$store.state.auth.currentAccount) {
                this.$store.dispatch("auth/login", accounts[0]).then(
                    () => {
                        this.$router.push("/profile");
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            }
        }
    }
}

</script>
