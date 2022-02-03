<script setup>
import { ref } from 'vue'
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
import NftmxSelectNetwork from '../../core/components/NftmxSelectNetwork.vue';

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const props = defineProps({
    orderID: String
})

const buyModalActive = ref(false);
const syndicationModalActive = ref(false);
const fundError = ref(false);

const handleBuyModal = (value) => {
    buyModalActive.value = value;
}

</script>

<template>
    <div class="flex py-6 text-5/2xl">
        <div class="flex-1 font-ibm-bold">Play Quiet #10/10</div>
        <div class>
            <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                class="cursor-pointer hover:text-primary-900"
            />
        </div>
    </div>
    <div class="flex text-xs pb-12">
        <div class="flex-1">
            Created by
            <span class="text-primary-900">234...293</span> | Owned by
            <span class="text-primary-900">234...293</span>
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

        <div class="h-44 items-center pl-7 sm:pl-0 pr-7 py-4">
            <nftmx-select-network class="font-ibm-bold w-full text-sm mb-3"></nftmx-select-network>
            <nftmx-button
                color="primary"
                label="BUY NOW"
                class="font-press w-full text-lg"
                @click="handleBuyModal(true)"
            />
        </div>
    </div>

    <div class="bg-tertiary-800 border border-black mt-4">
        <div class="items-center p-4 text-center">
            <div class="pt-2 text-lg font-ibm-bold">
                Total locked value
                <icon class="-ml-2" :path="mdiHelpCircle" w="w-4" h="h-4" size="36" color="white" />
            </div>
            <div class="pt-2 pb-6 text-3xl">
                <span class="text-primary-900 font-ibm-bold">$1.548,548.65</span>
                <span class="text-tertiary-400">( 458,6645)</span>
            </div>
            <nftmx-button
                color="secondary"
                label="JOIN SYNDICATION"
                class="font-press w-full text-lg py-5"
                @click="syndicationModalActive = true"
            />
        </div>
    </div>
    <buy-modal v-model="buyModalActive" :orderID="orderID" />
    <syndication-modal v-model="syndicationModalActive" />
</template>

<style scoped>
.text-5\/2xl {
    font-size: 1.75rem /* 20px */;
    line-height: 2.15rem /* 28px */;
}
</style>
