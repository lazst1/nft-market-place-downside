<script setup>
import Ribbon from './Ribbon.vue';
import Icon from './Icon.vue'
import { mdiThumbUp, mdiHelpCircle } from '@mdi/js'
import SaleInfo from './SaleInfo.vue'
import NftmxButton from './NftmxButton.vue'
import { computed } from 'vue';
import Timer from './Timer.vue'

const props = defineProps({
    data: {
        type: Object,
        default: {}
    },
})

const nftItem = {
    ...props.data,
    percent: props.data.percent || 10,
    period: props.data.period || 10,
    unique: props.data.unique || "1:20",
    transferred: props.data.transferred || "12/20",
    roi: props.data.roi || "+4,780.73%",
    value: props.data.value || "$0.4781",
    vote: props.data.vote || "55",
    syndication: props.data.syndication || true,
    auction: props.data.auction || false,
    bought: props.data.bought || false,
    connect: props.data.connect || false,
    sold: props.data.sold || false,
    closed: props.data.closed || false,
    tokenAddress: props.data.token_address || 'tokenAddress',
    tokenId: props.data.token_id || 'tokenId',
}
console.log(nftItem)

const syndicationCSS = computed(() => {
    const base = [
        'py-3.5', 'text-xxs', 'leading-4', nftItem.syndication ? 'bg-gradient-to-r from-secondary-900 to-secondary-700 text-white' : 'bg-tertiary-600 text-tertiary-500'
    ]

    return base
})
const boughtCSS = computed(() => {
    const base = [
        'bg-tertiary-700', 'px-5', 'py-5', nftItem.bought ? 'h-73' : 'h-56'
    ]

    return base
})

</script>

<template>
    <router-link :to="{name: 'detail', params: {tokenAddress: nftItem.tokenAddress, tokenId: nftItem.tokenId}}" class="w-full max-w-max mx-auto">
        <div class="hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700">
            <div class="relative h-50 overflow-hidden p-6 bg-[url('@/assets/test.jpg')] bg-cover">
                <ribbon :percent="nftItem.percent" :period="nftItem.period" />
            </div>
            <div :class="boughtCSS">
                <div class="flex text-white">
                    <div class="flex-1 text-base font-ibm-bold leading-6 pr-2 h-16">
                        Love in the city new nork
                    </div>
                    <div class="text-xs flex">
                        <span class="pr-1 text-tertiary-400">{{nftItem.vote}}</span>
                        <icon
                            :path="mdiThumbUp"
                            w="w-3.5"
                            h="h-3.5"
                            color="primary-900"
                        />
                    </div>
                </div>
                <sale-info
                    :unique="nftItem.unique"
                    :transferred="nftItem.transferred"
                    :roi="nftItem.roi"
                    :value="nftItem.value"
                />
                <div class="text-tertiary-400 text-xxs text-center relative mt-6.5">
                    Current auction ends in
                </div>
                <div v-if="nftItem.bought" class="py-3">
                    <timer />
                </div>
            </div>
            <div v-if="!nftItem.bought&&!nftItem.connect&&!nftItem.sold&&!nftItem.closed" class="grid grid-cols-2 relative font-press">
                <button :class="syndicationCSS">
                    START<br />SYNDICATION
                </button>
                <button class="bg-gradient-to-r from-primary-900 to-primary-700 text-white text-sm">
                    BUY NOW
                </button>
            </div>
            <div v-if="connect" class="grid grid-cols-1 relative font-press">
                <button class="bg-black py-6 text-xs">
                    CONNECT WALLET
                </button>
            </div>
            <div v-if="nftItem.sold" class="grid grid-cols-1 relative font-press">
                <button class="bg-black py-6 text-xs text-red-700">
                    SOLD OUT
                </button>
            </div>
            <div v-if="nftItem.closed" class="grid grid-cols-1 relative font-press">
                <button class="bg-black py-6 text-xs text-red-700">
                    AUCTION CLOSED
                </button>
            </div>
        </div>
        <div v-if="nftItem.auction" class="px-2 shadow-xl">
            <div class="w-full h-1 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700" />
            <div class="px-2">
                <div class="w-full h-1 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700" />
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.h-50 {
    height: 202px;
}
.h-56 {
    height: 232px;
}
.h-73 {
    height: 292px;
}
.mt-6\.5 {
    margin-top: 26px;
}
</style>