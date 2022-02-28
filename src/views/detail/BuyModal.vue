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
        <div class="text-center relative -top-2 md:w-asset-img">
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
        <div class="px-4 md:px-16 pb-10">
            <table class="w-full">
                <thead class="text-tertiary-400 font-ibm-light text-xs border-b border-black">
                    <th class="py-6 px-5 text-left">Items</th>
                    <th class="text-right">Subtotal</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr :key="index" class="border-b border-black">
                        <td class="p-4 text-left flex">
                            <div class="bg-[url('@/assets/test.jpg')] w-13 h-13"></div>
                            <div class="pt-0.5 px-4">
                                <div class="text-primary-900 font-ibm text-xs leading-6">Kyle White</div>
                                <div class="font-ibm-medium text-sm">{{ nft.name }}</div>
                            </div>
                        </td>
                        <td class="text-right">
                            <div class="font-ibm text-xs leading-6 flex justify-end">
                                <nftmx-price-common
                                    :price="roundTo(parseInt(order.tokenPrice) / exchangeRate * bnbPrice)"
                                />
                            </div>
                            <div class="font-ibm text-xxs text-tertiary-400 leading-6">
                                (
                                <span class="font-sans">Ξ</span>
                                {{ roundTo(parseInt(order.tokenPrice) / exchangeRate) }})
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="text-tertiary-400 font-ibm-light text-xs">
                    <th class="py-6 px-5 text-left">Total</th>
                    <th class="text-right">
                        <div class="font-ibm text-sm text-primary-900 leading-10 flex justify-end">
                            <nftmx-price-common
                                :price="roundTo(parseInt(order.tokenPrice) / exchangeRate * bnbPrice)"
                            />
                        </div>
                        <div class="font-ibm text-xxs text-tertiary-400">
                            (
                            <span class="font-sans">Ξ</span>
                            {{ roundTo(parseInt(order.tokenPrice) / exchangeRate) }})
                        </div>
                    </th>
                    <th></th>
                </tfoot>
            </table>
            <div class="w-full text-center pt-6 pb-5">
                <nftmx-button
                    color="primary"
                    label="BUY NOW"
                    class="font-press w-full text-sm my-3 max-w-xs"
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
