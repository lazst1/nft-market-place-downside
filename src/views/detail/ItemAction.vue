<script setup>
import { ref, watchEffect } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import Ribbon from '@/core/components/Ribbon.vue';
import DetailButton from '@/core/components/DetailButton.vue';
import Icon from '@/core/components/Icon.vue'
import { mdiThumbUp, mdiHelpCircle, mdiMenu } from '@mdi/js'
import Timer from '@/core/components/Timer.vue'
import NftmxButton from '@/core/components/NftmxButton.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import NftmxLineChart from '@/core/components/NftmxLineChart.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { mdiClose } from '@mdi/js'
import MoreInfo from './MoreInfo.vue';
import BuyModal from './BuyModal.vue';
import SyndicationModal from './SyndicationModal.vue';
import NftmxSelectNetwork from '@/core/components/NftmxSelectNetwork.vue';
import NftmxWalletAddressPop from '@/core/components/NftmxWalletAddressPop.vue';
import NftmxPriceCommon from '@/core/components/NftmxPriceCommon.vue';
import moralisService from '@/core/services/moralis.service';
import { useStore } from 'vuex';
import { exchangeRate, TokenType } from '@/core/config';
import marketService from '@/core/services/market.service';
import { roundTo } from '@/core/utils';

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const props = defineProps({
    order: Object,
    orderID: String,
    tokenPrice: String,
    nft: Object
})

const buyModalActive = ref(false);
const syndicationModalActive = ref(false);
const fundError = ref(false);
const store = useStore();
const balance = ref();

const handleBuyModal = (value) => {
    buyModalActive.value = value;
    moralisService.getBalance(store.state.user.address).then(res => {
        balance.value = res.balance / exchangeRate;
    })
}

const bnbPrice = ref(0);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    bnbPrice.value = res.price;
})

</script>

<template>
    <div class="flex py-6 text-5/2xl">
        <div class="flex-1 font-ibm-bold">{{ nft.name }}</div>
        <div class>
            <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                class="cursor-pointer hover:text-primary-900"
            />
        </div>
    </div>
    <div class="flex text-xs pb-12">
        <div class="flex flex-wrap flex-1">
            <div>
                Created by
                <span class="text-primary-900">234...293</span> |&nbsp;
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

    <div class="grid grid-cols-1 sm:grid-cols-2 bg-tertiary-800 border border-black font-ibm-bold">
        <div class="h-44 items-center p-4">
            <div class="py-4">
                <div class="pt-3 pb-4 text-base">Current auction ends in</div>
                <timer size="big" color="tertiary-800" />
            </div>
        </div>

        <div class="h-40 sm:h-46.25 items-center pl-7 sm:pl-0 pr-7 sm:pt-6.25">
            <nftmx-select-network class="font-ibm-bold w-full text-sm mb-2" color="black" big></nftmx-select-network>
            <nftmx-button
                color="primary"
                label="BUY NOW"
                class="font-press w-full text-lg mt-0.75"
                @click="handleBuyModal(true)"
            />
        </div>
    </div>

    <div class="bg-tertiary-800 border border-black mt-3.5">
        <div class="items-center p-4 pb-6.25 text-center">
            <div class="pt-2 text-lg font-ibm-bold">
                Total locked value
                <icon class="-ml-2" :path="mdiHelpCircle" w="w-4" h="h-4" size="36" color="white" />
            </div>
            <div class="pt-2 pb-7 lg:text-3xl">
                <span class="text-primary-900 font-ibm-bold">
                    <nftmx-price-common :price="roundTo(parseInt(tokenPrice) / exchangeRate)" />
                </span>
                <span class="text-tertiary-400">(<span class="font-mono">Ξ</span>{{roundTo(bnbPrice)}})</span>
            </div>
            <nftmx-button
                color="secondary"
                label="JOIN SYNDICATION"
                class="font-press w-full lg:text-lg pt-5.5 pb-5.25"
                @click="syndicationModalActive = true"
            />
        </div>
    </div>
    <buy-modal v-model="buyModalActive" :order="order" :nft="nft" :orderID="orderID" :tokenPrice="tokenPrice" :balance="balance" />
    <syndication-modal v-model="syndicationModalActive" />
</template>

<style scoped>
.text-5\/2xl {
    font-size: 1.75rem /* 20px */;
    line-height: 2.15rem /* 28px */;
}
</style>
