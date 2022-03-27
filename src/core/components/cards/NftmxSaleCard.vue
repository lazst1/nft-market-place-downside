<script setup>
import Ribbon from '@/core/components/basic/Ribbon.vue';
import Icon from '@/core/components/basic/Icon.vue'
import SaleInfo from '@/core/components/cards/SaleInfo.vue'
import NftmxButton from '@/core/components/basic/NftmxButton.vue'
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import Timer from '@/core/components/timer/Timer.vue'
import moralisService from '@/core/services/moralis.service';
import { TokenType } from '@/core/config';
import { useStore } from 'vuex';
import marketService from '@/core/services/market.service';

const props = defineProps({
    order: Object
})

const store = useStore();
const vote = ref(props.order.votes.find(item => item === store.getters['auth/userId'] ? true : false));
const voteCount = ref(props.order.votes.length);
const card = ref(null);
const transferred = ref('not');
const price = ref(0);
const open = ref(false);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    price.value = store.getters['market/etherFromWei'](props.order.tokenPrice) * res.data.USD;
});

const handleVote = () => {
    vote.value = !vote.value;
    if (vote.value) {
        marketService.vote(props.order.tokenAddress, props.order.tokenId, store.state.user.id).then(res => {
            voteCount.value++;
        });
    } else {
        marketService.cancelVote(props.order.tokenAddress, props.order.tokenId, store.state.user.id).then(res => {
            voteCount.value--;
        });
    }
}

</script>

<template>
    <div ref="card" class="w-full">
        <div
            class="transition hover:shadow-[0_0px_12px_0px_rgb(0_0_0_/_0.1),_0_0px_0px_0px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
            @mouseover="open = true"
            @mouseleave="open = false"
        >
            <div
                class="relative w-full overflow-hidden pt-73per"
                :style="{ background: `url(${order.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: 'black' }"
            >
                <ribbon
                    :percent="order.protectionRate / 100"
                    :period="order.protectionTime / 86400"
                />
            </div>
            <div class="relative px-4.5 pt-5.5 pb-6 bg-tertiary-700">
                <div class="flex text-white">
                    <div class="flex-1 text-base font-ibm-bold leading-6 pr-2 h-16">{{ order.name }}</div>
                    <div class="text-xs flex mt-1.5">
                        <span class="pr-1 text-tertiary-400">{{ voteCount }}</span>
                        <font-awesome-icon
                            :icon="['fas', 'thumbs-up']"
                            :class="[vote ? 'text-primary-900' : 'text-white', 'cursor-pointer hover:text-primary-900']"
                            @click="handleVote()"
                        />
                    </div>
                </div>
                <sale-info :transferred="transferred" :value="price" />
                <div
                    class="text-tertiary-400 text-11 text-center relative mt-6"
                >Current auction ends in</div>
                <div class="pt-3 w-fit mx-auto max-w-full">
                    <timer />
                </div>
                <div
                    :class="[open ? 'h-15' : 'h-0', 'absolute overflow-hidden bottom-0 left-0 w-full transition-all']"
                >
                    <nftmx-button
                        :to="{ name: 'buy_order', params: { orderId: order.id } }"
                        color="primary"
                        label="BUY NOW"
                        class="transition-all w-full font-press text-sm h-15"
                    />
                </div>
            </div>
        </div>
        <div class="px-2 shadow-xl">
            <div class="w-full h-1 bg-primary-200" />
            <div class="px-2">
                <div class="w-full h-1 bg-primary-100" />
            </div>
        </div>
    </div>
</template>
