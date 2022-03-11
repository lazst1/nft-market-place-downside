<script setup>
import Ribbon from './Ribbon.vue';
import Icon from './Icon.vue'
import { mdiThumbUp, mdiHelpCircle } from '@mdi/js'
import SaleInfo from './SaleInfo.vue'
import NftmxButton from './NftmxButton.vue'
import { computed, ref, watchEffect } from 'vue';
import Timer from './Timer.vue'
import moralisService from '@/core/services/moralis.service';
import { exchangeRate } from '@/core/config';
import marketService from '../services/market.service';
import { TokenType } from '../config';
import { useStore } from 'vuex';

const props = defineProps({
    data: {
        type: Object,
        default: {
            syndication: true
        }
    },
})

const order = {
    ...props.data,
    protectionRate: props.data.protectionRate / 100,
    protectionTime: props.data.protectionTime / 86400,
    unique: props.data.unique || "1:20",
    transferred: props.data.transferred || "12/20",
    roi: props.data.roi || "+4,780.73%",
    tokenPrice: props.data.tokenPrice || "$0.4781",
    syndication: props.data.syndication,
    auction: props.data.auction,
    bought: props.data.bought,
    connect: props.data.connect,
    sold: props.data.sold,
    closed: props.data.closed,
    votes: props.data.votes,
}
const store = useStore();
const vote = ref(order.votes.find(item => item === store.getters['auth/getUserId'] ? true : false));
const voteCount = ref(order.votes.length);
const nft = ref({});
moralisService.getNft(order.tokenAddress, order.tokenId).then(res => {
    nft.value = res;
})
const syndicationCSS = computed(() => {
    const base = [
        'py-3.5', 'text-xxs', 'leading-4', order.syndication ? 'bg-gradient-to-r from-secondary-900 to-secondary-700 text-white' : 'bg-tertiary-600 text-tertiary-500'
    ]

    return base
})
const boughtCSS = computed(() => {
    const base = [
        'bg-tertiary-700', 'px-5', 'py-5', order.bought ? 'h-73' : 'h-56'
    ]

    return base
})

const nftPriceInUSD = ref(0);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    nftPriceInUSD.value = order.tokenPrice / exchangeRate * res.USD;
});

function handleVote() {
    vote.value = !vote.value;
    if (vote.value) {
        marketService.vote(order.tokenAddress, order.tokenId, store.state.user.id).then(res => {
            voteCount.value ++;
        });
    } else {
        marketService.cancelVote(order.tokenAddress, order.tokenId, store.state.user.id).then(res => {
            voteCount.value --;
        });
    }
}

</script>

<template>
    <div class="w-full">
        <div
            class="transition duration-300 hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
        >
            <div
                class="relative w-full pt-2/3 overflow-hidden p-6 bg-[url('@/assets/test.jpg')] bg-cover"
            >
                <ribbon :percent="order.protectionRate" :period="order.protectionTime" />
            </div>
            <div :class="boughtCSS">
                <div class="flex text-white">
                    <div class="flex-1 text-base font-ibm-bold leading-6 pr-2 h-16">{{ nft.name }}</div>
                    <div class="text-xs flex">
                        <span class="pr-1 text-tertiary-400">{{ voteCount }}</span>
                        <font-awesome-icon
                            :icon="['fas', 'thumbs-up']"
                            :class="[vote ? 'text-primary-900' : 'text-white', 'cursor-pointer hover:text-primary-900']"
                            @click="handleVote()"
                        />
                    </div>
                </div>
                <sale-info
                    :unique="order.unique"
                    :transferred="order.transferred"
                    :roi="order.roi"
                    :value="nftPriceInUSD"
                />
                <div
                    class="text-tertiary-400 text-xxs text-center relative mt-6.5"
                >Current auction ends in</div>
                <div v-if="order.bought" class="py-3">
                    <timer />
                </div>
            </div>
            <div
                v-if="!order.bought && !order.connect && !order.sold && !order.closed"
                class="grid grid-cols-2 relative font-press"
            >
                <button :class="syndicationCSS">
                    START
                    <br />SYNDICATION
                </button>
                <router-link
                    :to="{ name: 'detail', params: { orderId: order.id } }"
                    class="bg-primary-900 text-white text-sm flex justify-center items-center hover:bg-primary-700"
                >BUY NOW</router-link>
            </div>
            <div v-if="order.connect" class="grid grid-cols-1 relative font-press">
                <button class="bg-black py-6 text-xs">CONNECT WALLET</button>
            </div>
            <div v-if="order.sold" class="grid grid-cols-1 relative font-press">
                <button class="bg-black py-6 text-xs text-red-700">SOLD OUT</button>
            </div>
            <div v-if="order.closed" class="grid grid-cols-1 relative font-press">
                <button class="bg-black py-6 text-xs text-red-700">AUCTION CLOSED</button>
            </div>
        </div>
        <div v-if="order.auction" class="px-2 shadow-xl">
            <div
                class="w-full h-1 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700"
            />
            <div class="px-2">
                <div
                    class="w-full h-1 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700"
                />
            </div>
        </div>
    </div>
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