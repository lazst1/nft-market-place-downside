<script setup>
import { computed, ref, watchEffect } from 'vue'
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
import NftmxSelectNetwork from '@/core/components/basic/NftmxSelectNetwork.vue';
import NftmxWalletAddressPop from '@/core/components/blockchain-address/NftmxWalletAddressPop.vue';
import NftmxPriceCommon from '@/core/components/price/NftmxPriceCommon.vue';
import moralisService from '@/core/services/moralis.service';
import { useStore } from 'vuex';
import { TokenType } from '@/core/config';
import marketService from '@/core/services/market.service';
import { roundTo } from '@/core/utils';
import OfferModal from './OfferModal.vue';

const props = defineProps({
    asset: Object
});

const defaultAsset = {
    creator: {},
    owner: {},
    votes: [],
};
const token = computed(() => props.asset.tokenAddress ? props.asset : defaultAsset);
const offerModalActive = ref(false);
const store = useStore();
const balance = ref();
const vote = ref(false);
const bnbPrice = ref(0);

watchEffect(() => {
    if (props.asset.tokenAddress) {
        vote.value = props.asset.votes.find(item => item === store.getters['auth/userId'] ? true : false);
    }
})

marketService.getUSDFromToken(TokenType.BNB).then(res => {
    bnbPrice.value = res.data.USD;
})

const handleOfferModal = (value) => {
    offerModalActive.value = value;
    moralisService.getBalance(store.getters['auth/walletAddress']).then(res => {
        balance.value = store.getters['market/etherFromWei'](res.data.balance);
    })
}
const handleVote = () => {
    vote.value = !vote.value;
    if (vote.value) {
        marketService.vote(props.asset.tokenAddress, props.asset.tokenId, store.state.user.id).then(res => {
            console.log('asdfasdfasdf')
        });
    } else {
        marketService.cancelVote(props.asset.tokenAddress, props.asset.tokenId, store.state.user.id).then(res => {
            console.log('werqerqwerq')
        });
    }
}

const handleModal = (value) => {
    offerModalActive.value = value
}
</script>

<template>
    <div class="flex mb-6 text-5/2xl">
        <div class="flex-1 font-ibm-bold">{{ token.name }}</div>
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
                    <nftmx-wallet-address-pop
                        class="text-primary-900"
                        :address="token.creator.address"
                    ></nftmx-wallet-address-pop>
                </span> |&nbsp;
            </div>
            <div>
                Owned by
                <span class="text-primary-900">
                    <nftmx-wallet-address-pop
                        class="text-primary-900"
                        :address="token.owner.address"
                    ></nftmx-wallet-address-pop>
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
                label="MAKE AN OFFER"
                class="font-press w-full text-base lg:text-lg mt-0.75 h-15"
                @click="handleOfferModal(true)"
            />
        </div>
    </div>
    <offer-modal :asset="asset" v-model="offerModalActive" @handle-modal="handleModal" />
</template>

<style scoped>
.text-5\/2xl {
    font-size: 1.75rem /* 20px */;
    line-height: 2.15rem /* 28px */;
}
</style>
