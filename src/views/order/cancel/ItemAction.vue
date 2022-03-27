<script setup>
import { computed, ref, watchEffect } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import Ribbon from '@/core/components/basic/Ribbon.vue';
import DetailButton from '@/core/components/basic/DetailTab.vue';
import Icon from '@/core/components/basic/Icon.vue'
import Timer from '@/core/components/timer/Timer.vue'
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import NftmxSelect from '@/core/components/basic/NftmxSelect.vue';
import NftmxLineChart from '@/core/components/chart/NftmxLineChart.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxSelectNetwork from '@/core/components/basic/NftmxSelectNetwork.vue';
import NftmxWalletAddressPop from '@/core/components/blockchain-address/NftmxWalletAddressPop.vue';
import NftmxPriceCommon from '@/core/components/price/NftmxPriceCommon.vue';
import moralisService from '@/core/services/moralis.service';
import { useStore } from 'vuex';
import { TokenType } from '@/core/config';
import marketService from '@/core/services/market.service';
import { roundTo } from '@/core/utils';
import { formatAMPM } from '@/core/utils'
import NftmxCancelModal from '@/core/components/modal/NftmxCancelModal.vue';

const props = defineProps({
    order: Object,
    nft: Object,
    nftCreator: Object
})

const store = useStore();
const walletAddress = computed(() => store.getters['auth/walletAddress'])
const balance = ref(0);
const vote = ref(false);
const tokenPrice = ref(0);
const creatorAddress = ref('');
const openCancelModal = ref(false);
const date = new Date();
const displayDate = date.toLocaleString('default', { month: 'long' }) + ' ' + date.getDay() + ', ' + date.getFullYear() + ' at ' + formatAMPM(date) + ' UTC'

const bnbPrice = ref(0);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    bnbPrice.value = res.data.USD;
})

watchEffect(() => {
    if (props.order.id) {
        vote.value = props.order.votes.find(item => item === store.getters['auth/userId'] ? true : false);
        tokenPrice.value = store.getters['market/etherFromWei'](props.order.tokenPrice);
    }
})
watchEffect(() => {
    if (props.nftCreator) {
        creatorAddress.value = props.nftCreator.walletAddress;
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
    store.state.marketContract.methods.claimDownsideProtectionAmount(
        props.order.orderId
    ).send({ from: walletAddress.value }).then(res => {
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
                    <nftmx-wallet-address-pop class="text-primary-900" :address="creatorAddress"></nftmx-wallet-address-pop>
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
                <nftmx-price-common :price="roundTo(tokenPrice * bnbPrice)" />
                <span class="font-sans font-black text-lg text-tertiary-500">&nbsp;Ξ&nbsp;</span>
                <span class="text-lg text-tertiary-500">{{ roundTo(tokenPrice) }}</span>
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
    <nftmx-cancel-modal v-model="openCancelModal" @confirm="cancelOrder" />
</template>

<style scoped>
.text-5\/2xl {
    font-size: 1.75rem /* 20px */;
    line-height: 2.15rem /* 28px */;
}
</style>
