<script setup>
import { ref } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import MoreInfo from './MoreInfo.vue';
import ItemAction from './ItemAction.vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import DetailHistory from './DetailHistory.vue';
import marketService from '@/core/services/market.service';
import moralisService from '@/core/services/moralis.service';

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const items = [
    {
        name: 'All time'
    },
]

const props = defineProps({
    percent: {
        type: Number,
        default: 100
    },
    period: {
        type: Number,
        default: 365
    },
})
const store = useStore();
const route = useRoute();
const router = useRouter();
const orderId = route.params.orderId;
const order = ref({});
const nft = ref({});

marketService.getOrder(orderId).then(data => {
    order.value = data;
    if (!data.id) {
        router.push('/browse');
        return;
    }
    moralisService.getNft(data.tokenAddress, data.nftTokenId).then(res => {
        nft.value = res;
    })
});
const buyModalActive = ref(false);
const syndicationModalActive = ref(false);
const fundError = ref(false);

</script>

<template>
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8 mt-10">
            <div class="col-span-7 lg:col-span-3">
                <more-info :percent="order.protectionRate / 100" :period="order.protectionTime / 86400" />
            </div>
            <div class="col-span-7 mb-4 lg:col-span-4 relative">
                <item-action :order="order" :orderID="order.orderID" :tokenPrice="order.tokenPrice" :nft="nft" />
            </div>
        </div>
        <div class="mb-10">
            <detail-history />
        </div>
    </body-container>
    <nftmx-footer />
</template>
