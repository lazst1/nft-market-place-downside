<script setup>
import { ref, watchEffect } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import Ribbon from '@/core/components/basic/Ribbon.vue';
import DetailButton from '@/core/components/basic/DetailTab.vue';
import Icon from '@/core/components/basic/Icon.vue'
import { mdiHelpCircle } from '@mdi/js'
import Timer from '@/core/components/timer/Timer.vue'
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import NftmxSelect from '@/core/components/basic/NftmxSelect.vue';
import NftmxLineChart from '@/core/components/chart/NftmxLineChart.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import BuyModal from './BuyModal.vue';
import SyndicationModal from './SyndicationModal.vue';
import NftmxSelectNetwork from '@/core/components/basic/NftmxSelectNetwork.vue';
import NftmxWalletAddressPop from '@/core/components/blockchain-address/NftmxWalletAddressPop.vue';
import NftmxPriceCommon from '@/core/components/price/NftmxPriceCommon.vue';
import moralisService from '@/core/services/moralis.service';
import { useStore } from 'vuex';
import { TokenType } from '@/core/config';
import marketService from '@/core/services/market.service';
import { roundTo } from '@/core/utils';

const props = defineProps({
    order: Object,
    nft: Object,
    nftCreator: Object
})
const buyModalActive = ref(false);
const syndicationModalActive = ref(false);
const store = useStore();
const balance = ref();
const vote = ref(false);
const creatorAddress = ref('');
const tokenPrice = ref(0);
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

const handleBuyModal = (value) => {
    buyModalActive.value = value;
    moralisService.getBalance(store.getters['auth/walletAddress']).then(res => {
        balance.value = store.getters['market/etherFromWei'](res.data.balance);
    })
}
const handleVote = () => {
    vote.value = !vote.value;
    if (vote.value) {
        marketService.vote(props.order.tokenAddress, props.order.tokenId, store.state.user.id).then(res => {
        });
    } else {
        marketService.cancelVote(props.order.tokenAddress, props.order.tokenId, store.state.user.id).then(res => {
        });
    }
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
        class="grid grid-cols-1 sm:grid-cols-2 bg-tertiary-800 border border-black font-ibm-bold p-4 sm:p-7 gap-4"
    >
        <div class="items-center">
            <div class="flex flex-col items-center sm:items-start">
                <div class="mt-3.25 text-lg">Current auction ends in</div>
                <timer size="big" color="tertiary-800" class="my-3.25" />
            </div>
        </div>

        <div class="items-centers -mt-px mb-px">
            <nftmx-select-network class="font-ibm-bold w-full text-sm mb-2" color="black" big></nftmx-select-network>
            <nftmx-button
                color="primary"
                label="BUY NOW"
                class="font-press w-full text-base lg:text-lg mt-0.75 h-15"
                @click="handleBuyModal(true)"
            />
        </div>
    </div>

    <div class="bg-tertiary-800 border border-black mt-3.5">
        <div class="items-center p-4 sm:py-6 sm:px-8 text-center">
            <div class="text-lg font-ibm-bold">
                Total locked value
                <icon class="-ml-2" :path="mdiHelpCircle" w="w-4" h="h-4" size="36" color="white" />
            </div>
            <div class="lg:text-3xl flex justify-center mt-1.75">
                <span class="text-primary-900 font-ibm-bold">
                    <nftmx-price-common :price="roundTo(tokenPrice * bnbPrice)" />
                </span>
                <span class="text-tertiary-400">
                    (
                    <span class="font-sans">Ξ</span>
                    {{ roundTo(tokenPrice) }})
                </span>
            </div>
            <nftmx-button
                color="secondary"
                label="JOIN SYNDICATION"
                class="font-press w-full text-base lg:text-lg mt-7 mb-px h-15 sm:h-17.75"
                @click="syndicationModalActive = true"
            />
        </div>
    </div>
    <buy-modal v-model="buyModalActive" :order="order" :nft="nft" :balance="balance" />
    <syndication-modal v-model="syndicationModalActive" />
</template>

<style scoped>
.text-5\/2xl {
    font-size: 1.75rem /* 20px */;
    line-height: 2.15rem /* 28px */;
}
</style>
