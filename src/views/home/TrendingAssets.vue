<script setup>
import { computed, onMounted, ref } from 'vue';
import NftmxCardsAccordion from '@/core/components/NftmxCardsAccordion.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import AccordionContainer from './container/AccordionContainer.vue';
import Assets1 from './components/Assets1.vue';
import Assets2 from './components/Assets2.vue';
import marketService from '@/core/services/market.service';
import { exchangeRate } from '@/core/config';
import { roundTo } from '@/core/utils';
import { useStore } from 'vuex';
import { TokenType, openseaTrendingCollections } from '@/core/config';
import openseaService from '../../core/services/opensea.service';
import Collection from './components/Collection.vue';

const soldItems = ref([]);
const canceledItems = ref([]);
const listedItems = ref([]);
const selected = ref('SOLD');
const selectedItems = ref([]);
const allCollections = ref([]);
const collections = ref([]);
const retrieveOffset = ref(0);
const retrieveLimit = ref(100);
const displayOffset = ref(0);
const displayLimit = ref(3);
const more = computed(() => allCollections.value.length > collections.value.length);

const store = useStore();
const bnbPrice = ref(0);
marketService.getUSDFromToken(TokenType.BNB).then(res => {
    bnbPrice.value = res.USD;
})
marketService.soldItems().then(res => {
    soldItems.value = res;
    selectedItems.value = res;
});
marketService.canceledItems().then(res => {
    canceledItems.value = res;
});
marketService.listedItems().then(res => {
    listedItems.value = res;
});
const retrieveCollections = () => {
    openseaService.retrieveCollections({ offset: retrieveOffset.value, limit: retrieveLimit.value }).then(res => {
        // const validCollections = res.data.collections.filter(item => item.safelist_request_status === 'verified');
        const validCollections = openseaTrendingCollections.sort(() => 0.5 - Math.random());
        // console.log(res.data, validCollections)
        retrieveOffset.value += retrieveLimit.value;
        // if (validCollections.length === 0) {
        //     retrieveCollections();
        //     return;
        // }
        // console.log('success===', validCollections);
        allCollections.value = validCollections;
        loadMoreCollection();
    })
}

onMounted(() => {
    retrieveCollections();
})

function selectLedger(value) {
    selected.value = value;
    switch (selected.value) {
        case 'SOLD':
            selectedItems.value = soldItems.value;
            break;
        case 'CANCELED':
            selectedItems.value = canceledItems.value;
            break;
        case 'LISTED':
            selectedItems.value = listedItems.value;
            break;

        default:
            break;
    }
}
const loadMoreCollection = () => {
    collections.value = collections.value.concat(allCollections.value.slice(displayOffset.value, displayOffset.value + displayLimit.value));
    displayOffset.value += displayLimit.value;
}

</script>

<template>
    <div class="sm:flex justify-center px-10 py-6.5 lg:px-22">
        <div class="w-full sm:w-68 pt-2 cursor-default">
            <div class="flex font-press text-white">
                <span>Ledger</span>
                <font-awesome-icon
                    :icon="['fas', 'external-link-alt']"
                    class="text-primary-900 cursor-pointer ml-4 mt-1"
                />
            </div>
            <div class="border border-black my-6.75 bg-tertiary-800">
                <div
                    class="grid grid-cols-4 border-b border-black font-ibm-semi-bold text-11 text-center"
                >
                    <div
                        @click="selectLedger('SOLD')"
                        :class="[selected === 'SOLD' ? 'bg-tertiary-900' : '', 'text-primary-900 border-r border-black pt-4.75 pb-4.5 hover:bg-tertiary-900 cursor-pointer transition']"
                    >SOLD</div>
                    <div
                        @click="selectLedger('CANCELED')"
                        :class="[selected === 'CANCELED' ? 'bg-tertiary-900' : '', 'text-red-900 border-r border-black pt-4.75 pb-4.5 hover:bg-tertiary-900 cursor-pointer transition']"
                    >CANCELED</div>
                    <div
                        @click="selectLedger('LISTED')"
                        :class="[selected === 'LISTED' ? 'bg-tertiary-900' : '', 'text-white border-r border-black pt-4.75 pb-4.5 hover:bg-tertiary-900 cursor-pointer transition']"
                    >LISTED</div>
                    <div
                        @click="selectLedger('CREATED')"
                        :class="[selected === 'CREATED' ? 'bg-tertiary-900' : '', 'text-tertiary-500 pt-4.75 pb-4.5 hover:bg-tertiary-900 cursor-pointer transition']"
                    >CREATED</div>
                </div>
                <div
                    class="grid grid-cols-2 border-b border-black font-ibm-medium text-11 text-tertiary-500"
                >
                    <div class="border-r border-black pt-3.5 pb-2.75 pl-3">Items</div>
                    <div class="pt-3.5 pb-2.75 pl-3">Price (USD)</div>
                </div>
                <div class="grid grid-cols-2 border-black text-xs">
                    <template v-for="(item, index) in selectedItems.items" :key="index">
                        <div
                            :class="[index === selectedItems.items.length - 1 ? 'pb-6.25' : 'pb-1', 'text-white border-r border-black pt-5 pl-3']"
                        >{{ item.tokenName }}</div>
                        <div
                            :class="[item.tokenPrice / exchangeRate * bnbPrice > 300 ? 'text-red-900' : item.tokenPrice / exchangeRate * bnbPrice < 1 ? 'text-white' : 'text-primary-900', index === selectedItems.items.length - 1 ? 'pb-6.25' : 'pb-1', 'pt-5 pl-3']"
                        >{{ roundTo(item.tokenPrice / exchangeRate * bnbPrice) }}</div>
                    </template>
                </div>
            </div>
        </div>
        <div class="flex-1 sm:pl-5">
            <collection
                v-for="(collection, index) in collections"
                :key="index"
                :collection="collection"
            />
            <div
                v-if="more"
                class="w-fit text-white hover:text-primary-900 transition cursor-pointer my-4 font-ibm-bold text-lg"
                @click="loadMoreCollection"
            >More collections</div>
        </div>
    </div>
</template>

<style scoped>
.text-center {
    text-align: -webkit-center;
}
</style>