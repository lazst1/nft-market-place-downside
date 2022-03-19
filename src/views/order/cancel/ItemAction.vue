<script setup>
import { ref, watchEffect } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import Ribbon from '@/core/components/Ribbon.vue';
import DetailButton from '@/core/components/DetailButton.vue';
import Icon from '@/core/components/Icon.vue'
import Timer from '@/core/components/Timer.vue'
import NftmxButton from '@/core/components/NftmxButton.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import NftmxLineChart from '@/core/components/NftmxLineChart.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxSelectNetwork from '@/core/components/NftmxSelectNetwork.vue';
import NftmxWalletAddressPop from '@/core/components/NftmxWalletAddressPop.vue';
import NftmxPriceCommon from '@/core/components/NftmxPriceCommon.vue';
import moralisService from '@/core/services/moralis.service';
import { useStore } from 'vuex';
import { exchangeRate, TokenType } from '@/core/config';
import marketService from '@/core/services/market.service';
import { roundTo } from '@/core/utils';
import CancelModal from './components/CancelModal.vue';
import { formatAMPM } from '@/core/utils'

const props = defineProps({
    order: Object,
    tokenPrice: String,
    nft: Object
})

const buyModalActive = ref(false);
const syndicationModalActive = ref(false);
const store = useStore();
const balance = ref();
const vote = ref(false);
const nftCreator = ref('');
const openCancelModal = ref(false);
const date = new Date();
const displayDate = date.toLocaleString('default', { month: 'long' }) + ' ' + date.getDay() + ', ' + date.getFullYear() + ' at ' + formatAMPM(date) + ' UTC'

const bnbPrice = ref(0);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    bnbPrice.value = res.USD;
})

watchEffect(() => {
    if (props.order.votes) {
        vote.value = props.order.votes.find(item => item === store.getters['auth/getUserId'] ? true : false);
    }
})
watchEffect(() => {
    if (props.nft && props.nft.token_address) {
        moralisService.nftTransfers(props.nft.token_address, props.nft.token_id).then(res => {
            nftCreator.value = res.result[res.result.length - 1].to_address;
        })
    }
})

const openCancel = () => {
    openCancelModal.value = true;
}
function handleVote() {
    vote.value = !vote.value;
    if (vote.value) {
        marketService.vote(props.order.tokenAddress, props.order.tokenId, store.state.user.id).then(res => {

        });
    } else {
        marketService.cancelVote(props.order.tokenAddress, props.order.tokenId, store.state.user.id).then(res => {
        });
    }
}
const cancelOrder = async (order) => {
    const gas = await store.state.marketContract.methods.claimDownsideProtectionAmount(
        props.order.orderId
    ).estimateGas('', { from: store.state.user.walletAddress });
    store.state.marketContract.methods.claimDownsideProtectionAmount(
        props.order.orderId
    ).send({ from: store.state.user.walletAddress, gas: gas }).then(res => {
        console.log('res: ', res);
    }).catch(err => {
        console.log('err: ', err);
    });
}

</script>

<template>
    <div class="flex mb-6 text-5/2xl">
        <div class="flex-1 font-ibm-bold">{{ nft.name }}</div>
        <div class>
            <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                :class="[vote ? 'text-primary-900' : 'text-white', 'transition cursor-pointer hover:text-primary-900']"
                @click="handleVote()"
            />
        </div>
    </div>
    <div class="flex text-xs pb-12">
        <div class="flex flex-wrap flex-1">
            <div>
                Created by
                <span class="text-primary-900">
                    <nftmx-wallet-address-pop class="text-primary-900" :address="nftCreator"></nftmx-wallet-address-pop>
                </span> |&nbsp;
            </div>
            <div>
                Owned by
                <span class="text-primary-900">
                    <nftmx-wallet-address-pop class="text-primary-900" :address="nft.owner_of"></nftmx-wallet-address-pop>
                </span>
            </div>
        </div>
        <div class="text-primary-900 font-ibm-bold">AUCTION</div>
    </div>

    <div
        class="grid grid-cols-1 sm:grid-cols-2 bg-tertiary-800 border border-black font-ibm-bold gap-4 px-6.5 py-5"
    >
        <div>
            <div class="text-lg">Last Sale</div>
            <div class="flex items-baseline text-5xl text-primary-900 font-ibm py-2">
                <nftmx-price-common
                    :price="roundTo(parseInt(tokenPrice) / exchangeRate * bnbPrice)"
                />
                <span class="font-sans font-black text-lg text-tertiary-500">&nbsp;Ξ&nbsp;</span>
                <span
                    class="text-lg text-tertiary-500"
                >{{ roundTo(parseInt(tokenPrice) / exchangeRate) }}</span>
            </div>
            <div class="font-ibm-semi-bold text-sm text-tertiary-500 mt-2.75 mb-5">{{ displayDate }}</div>
        </div>
        <div class="flex items-center">
            <nftmx-button
                color="red"
                label="CANCEL INVESTMENT"
                class="font-press w-full text-base lg:text-lg mt-0.75 h-15"
                @click="openCancel(true)"
            />
        </div>
    </div>
    <cancel-modal v-model="openCancelModal" @confirm="cancelOrder" />
</template>

<style scoped>
.text-5\/2xl {
    font-size: 1.75rem /* 20px */;
    line-height: 2.15rem /* 28px */;
}
</style>
