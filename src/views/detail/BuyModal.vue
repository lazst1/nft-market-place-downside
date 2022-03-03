<script setup>
import NftmxModal from '@/core/components/NftmxModal.vue';
import NftmxTable from '@/core/components/NftmxTable.vue';
import NftmxThead from '@/core/components/NftmxThead.vue';
import NftmxTh from '@/core/components/NftmxTh.vue';
import NftmxTbody from '@/core/components/NftmxTbody.vue';
import NftmxTd from '@/core/components/NftmxTd.vue';
import NftmxTr from '@/core/components/NftmxTr.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import { useStore } from 'vuex';
import NftmxPriceCommon from '@/core/components/NftmxPriceCommon.vue';
import { exchangeRate, TokenType } from '@/core/config';
import { roundTo } from '@/core/utils';
import marketService from '@/core/services/market.service';
import { ref } from 'vue';

const props = defineProps({
    order: Object,
    nft: Object,
    balance: Number,
    modalValue: {
        type: Boolean,
        default: true
    },
    orderId: String,
    tokenPrice: String
})
const store = useStore();

function buyOrder(params) {
    store.dispatch('market/buyFixedPayOrder', { orderId: parseInt(props.orderId), tokenPrice: props.tokenPrice });
}

const bnbPrice = ref(0);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    bnbPrice.value = res.price;
})

</script>

<template>
    <nftmx-modal big>
        <div class="text-center relative -top-2">
            <div class="font-press text-2xl">Buy</div>
            <div class="font-ibm-semi-bold text-sm items-center py-4 flex justify-center">
                Balance:&nbsp;
                <nftmx-price-common :price="roundTo(balance * bnbPrice)" />

                <span class="text-xxs font-ibm text-tertiary-400">
                    (
                    <span class="font-sans">Ξ</span>
                    {{ roundTo(balance) }})
                </span>
            </div>
        </div>
        <div class="px-4 md:px-16 pb-10 font-ibm-medium">
            <div class="w-full grid grid-cols-4 border-b border-black">
                <div class="text-tertiary-400 text-xxs">
                    <div class="py-6 text-left">Items</div>
                </div>
                <div class="text-tertiary-400 text-xxs">
                    <div class="py-6 text-left">Downside Protection</div>
                </div>
                <div class="text-tertiary-400 text-xxs">
                    <div class="py-6 text-left">Days of Protection</div>
                </div>
                <div class="text-tertiary-400 text-xxs text-right">
                    <div class="py-6">Total</div>
                </div>
            </div>
            <div class="w-full grid grid-cols-4 border-b border-black items-center pt-2.25 pb-2.5">
                <div class="text-left flex">
                    <div class="bg-[url('@/assets/test.jpg')] w-13 h-13"></div>
                    <div class="pt-0.5 px-4">
                        <div class="text-primary-900 font-ibm text-xs leading-6">Kyle White</div>
                        <div class="text-sm">{{ nft.name }}</div>
                    </div>
                </div>
                <div class="text-white text-sm">
                    <div class="py-6 text-left">{{ parseInt(order.protectionRate) / 100 }} %</div>
                </div>
                <div class="text-white text-sm">
                    <div class="py-6 text-left">{{ parseInt(order.protectionTime) / 3600 / 24 }}</div>
                </div>
                <div class="text-white text-sm text-right">
                    <div class="py-6">Items</div>
                </div>
            </div>
            <div class="w-full text-center pt-6 pb-5">
                <nftmx-button
                    color="primary"
                    label="BUY NOW"
                    class="font-press w-full text-lg my-3 max-w-xs h-13.5"
                    @click="buyOrder"
                />
                <div
                    v-if="fundError"
                    class="h-0 text-center font-ibm-medium text-xxs text-red-600"
                >Add fund to your wallet</div>
            </div>
        </div>
    </nftmx-modal>
</template>
