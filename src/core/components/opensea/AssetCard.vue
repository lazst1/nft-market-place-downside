<script setup>
import Ribbon from '@/core/components/Ribbon.vue';
import Icon from '@/core/components/Icon.vue'
import SaleInfo from '@/core/components/SaleInfo.vue'
import NftmxButton from '@/core/components/NftmxButton.vue'
import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import Timer from '@/core/components/Timer.vue'
import moralisService from '@/core/services/moralis.service';
import { exchangeRate } from '@/core/config';
import { TokenType } from '@/core/config';
import { useStore } from 'vuex';

const props = defineProps({
    asset: Object
})

const store = useStore();
const windowWidth = computed(() => store.state.app.windowWidth);
const card = ref(null);
const transferred = ref('not');
const price = ref(0);

onMounted(() => {
    if (props.asset.last_sale && props.asset.last_sale.created_date) {
        const lastSaleDate = new Date(props.asset.last_sale.created_date);
        transferred.value = lastSaleDate.getMonth() + '/' + lastSaleDate.getFullYear().toString().slice(2, 4);
        price.value = props.asset.last_sale.payment_token.usd_price * store.state.web3.utils.fromWei(props.asset.last_sale.total_price);
    }
})

const handleVote = () => {
    
}
</script>

<template>
    <div ref="card" class="w-full">
        <div
            class="transition hover:shadow-[0_0px_12px_0px_rgb(0_0_0_/_0.1),_0_0px_0px_0px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
        >
            <div
                class="relative w-full overflow-hidden pt-73per"
                :style="{ background: `url(${asset.image_url})`, backgroundSize: !asset.collection.display_data.card_display_style || asset.collection.display_data.card_display_style === 'padded' ? 'contain' : asset.collection.display_data.card_display_style, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: 'black' }"
            >
                <ribbon
                    :percent="(Math.random() * 100).toFixed()"
                    :period="(Math.random() * 365).toFixed()"
                />
            </div>
            <div class="px-4.5 pt-5.5 pb-6 bg-tertiary-700">
                <div class="flex text-white">
                    <div class="flex-1 text-base font-ibm-bold leading-6 pr-2 h-16">{{ asset.name }}</div>
                    <div class="text-xs flex mt-1.5">
                        <span class="pr-1 text-tertiary-400">{{ 0 }}</span>
                        <font-awesome-icon
                            :icon="['fas', 'thumbs-up']"
                            :class="[false ? 'text-primary-900' : 'text-white', 'cursor-pointer hover:text-primary-900']"
                            @click="handleVote()"
                        />
                    </div>
                </div>
                <sale-info :transferred="transferred" :value="price" />
                <div
                    class="text-tertiary-400 text-xxs text-center relative mt-6"
                >Current auction ends in</div>
                <div class="pt-3 w-fit mx-auto max-w-full">
                    <timer />
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
