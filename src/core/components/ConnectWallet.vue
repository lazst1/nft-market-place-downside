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
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';

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
    data() {
        return {
            provider: {},
            web3: null,
            currentAccount: null,
            abi: null,
        }
    },
    async mounted() {
        this.provider = await detectEthereumProvider();
        if (this.provider) {
            this.web3 = new Web3(Web3.givenProvider);
            await this.provider.request({
                method: "eth_accounts"
            }).then(this.handleAccountChanged)
        }
    },
    methods: {
        handleAccountChanged(accounts) {
            if (accounts.length === 0) {
                console.log("Please connect to MetaMask.", accounts);
            } else if (accounts[0] !== this.currentAccount) {
                this.currentAccount = this.web3.utils.toChecksumAddress(accounts[0]);
                console.log("this.currentAccount", this.currentAccount);
                this.setAbi();
                this.handleLogin(this.currentAccount);
            }
        },
        setAbi() {
            this.abi = new this.web3.eth.Contract(
                abiJSON,
                this.web3.utils.toChecksumAddress(this.contractAddress),
                {
                    from: this.currentAccount,
                }
            );
            console.log("this.abi", this.abi);
        },
        connect() {
            this.provider.request({ method: "eth_requestAccounts" }).then(
                this.handleAccountChanged
            ).catch(err => {
                if (err.code === 4001) {
                    console.log("ERR: Please connect to MetaMask.");
                } else {
                    console.error(err);
                }
            })
        },
        handleLogin(walletAddress) {
            this.$store.dispatch("auth/login", walletAddress).then(
                () => {
                    this.$router.push("/");
                },
                (error) => {
                    console.log(error);
                }
            )
        }
    }
}

</script>
