<script setup>
import NftmxModal from '@/core/components/modal/NftmxModal.vue';
import NftmxTable from '@/core/components/table/NftmxTable.vue';
import NftmxThead from '@/core/components/table/NftmxThead.vue';
import NftmxTh from '@/core/components/table/NftmxTh.vue';
import NftmxTbody from '@/core/components/table/NftmxTbody.vue';
import NftmxTd from '@/core/components/table/NftmxTd.vue';
import NftmxTr from '@/core/components/table/NftmxTr.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import { useStore } from 'vuex';
import NftmxPriceCommon from '@/core/components/price/NftmxPriceCommon.vue';
import { TokenType } from '@/core/config';
import { roundTo } from '@/core/utils';
import marketService from '@/core/services/market.service';
import { computed, ref } from 'vue';

const props = defineProps({
    order: Object,
    nft: Object,
    balance: Number,
    modalValue: {
        type: Boolean,
        default: true
    },
})
const store = useStore();
const fundError = ref(false);
const tokenPrice = computed(() => roundTo(store.getters['market/etherFromWei'](props.order.tokenPrice)))

async function buyOrder() {
    if (tokenPrice.value > props.balance) {
        fundError.value = true;
        return;
    }

    const gas = await store.state.marketContract.methods.buyFixedPayOrder(
        parseInt(props.order.orderId)
    ).estimateGas('', { from: store.getters['auth/walletAddress'] });

    store.state.marketContract.methods.buyFixedPayOrder(
        parseInt(props.order.orderId)
    ).send({ from: store.getters['auth/walletAddress'], gas: gas, value: props.order.tokenPrice })
        .then(res => {
            router.push('/profile');
        })
        .catch(err => {
            console.log('err: ', err);
        });
}

const bnbPrice = ref(0);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    bnbPrice.value = res.data.USD;
})

</script>

<template>
    <nftmx-modal big>
        <div class="text-center relative -top-2">
            <div class="font-press text-xl md:text-2xl">Buy</div>
            <div class="font-ibm-semi-bold text-sm items-center py-4 flex justify-center">
                Balance:&nbsp;
                <nftmx-price-common :price="roundTo(balance * bnbPrice)" />

                <span class="text-11 font-ibm text-tertiary-400">
                    (
                    <span class="font-sans">Ξ</span>
                    {{ roundTo(balance) }})
                </span>
            </div>
        </div>
        <div class="px-4 md:px-16 pb-10 font-ibm-medium">
            <div
                class="w-full md:grid md:grid-cols-8 border-b border-black text-tertiary-400 text-11"
            >
                <div class="col-span-3 flex md:block mt-6.5 mb-5.75 md:mt-0 md:mb-0">
                    <div
                        class="md:border-b border-black h-17 flex md:items-center w-25 md:w-auto"
                    >Items</div>
                    <div class="text-left flex md:h-21.75 md:items-center">
                        <div class="bg-[url('@/assets/test.jpg')] w-13 h-13"></div>
                        <div class="pt-0.5 px-4">
                            <div class="text-primary-900 font-ibm text-xs leading-6">Kyle White</div>
                            <div class="text-sm">{{ nft.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="h-14 md:h-auto col-span-2 flex md:block">
                    <div
                        class="md:h-17 flex md:items-center md:border-b border-black w-25 md:w-auto leading-4.5"
                    >Downside Protection</div>
                    <div class="text-white text-sm">
                        <div
                            class="flex md:h-21.75 items-center"
                        >{{ parseInt(order.protectionRate) / 100 }} %</div>
                    </div>
                </div>
                <div class="h-14 md:h-auto col-span-2 flex md:block">
                    <div
                        class="md:h-17 flex md:items-center md:border-b border-black w-25 md:w-auto leading-4.5 mt-0.5 md:mt-0 mb-1"
                    >Days of Protection</div>
                    <div class="text-white text-sm">
                        <div
                            class="flex md:h-21.75 items-center"
                        >{{ parseInt(order.protectionTime) / 3600 / 24 }}</div>
                    </div>
                </div>
                <div
                    class="h-14 md:h-auto col-span-1 md:text-right flex md:block mt-1.25 md:mt-0 mb-4.25 md:mb-0"
                >
                    <div
                        class="md:h-17 flex md:items-center md:justify-end md:border-b border-black w-25 md:w-auto"
                    >Total</div>
                    <div class="text-white text-11 md:text-right font-ibm md:flex flex-col justify-center items-end md:h-21.75">
                        <nftmx-price-common :price="roundTo(tokenPrice * bnbPrice)" />
                        <span class="text-tertiary-400">
                            <span>(</span>
                            <span class="font-sans">Ξ</span>
                            {{ tokenPrice }})
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-full text-center pt-6 pb-5">
                <nftmx-button
                    color="primary"
                    label="BUY NOW"
                    class="font-press w-full text-sm md:text-lg my-1.5 md:my-3 h-13.5"
                    @click="buyOrder"
                />
                <div
                    v-if="fundError"
                    class="h-0 text-center font-ibm-medium text-11 text-red-600"
                >Add fund to your wallet</div>
            </div>
        </div>
    </nftmx-modal>
</template>
