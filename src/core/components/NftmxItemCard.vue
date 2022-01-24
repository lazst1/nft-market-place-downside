<script setup>
import NftmxButton from './NftmxButton.vue'
import { computed } from 'vue';
import NftmxCardContainer from '@/core/container/NftmxCardContainer.vue';
import CheckboxCell from './CheckboxCell.vue';
import TextCompression from './textCompression.vue';

const props = defineProps({
    item: {
        type: Object,
        default: {
            amount: "0",
            block_number: "",
            block_number_minted: "",
            contract_type: "",
            frozen: 0,
            is_valid: 0,
            metadata: null,
            name: "",
            owner_of: "",
            symbol: "",
            synced_at: "",
            syncing: 2,
            token_address: "",
            token_id: "",
            token_uri: ""
        }
    },
    percent: {
        type: Number,
        default: 100
    },
    period: {
        type: Number,
        default: 365
    },
    unique: {
        type: String,
        default: "1:20"
    },
    transferred: {
        type: String,
        default: "12/20"
    },
    roi: {
        type: String,
        default: "+4,780.73%"
    },
    value: {
        type: String,
        default: "$0.4781"
    },
    vote: {
        type: String,
        default: "55"
    },
    syndication: {
        type: Boolean,
        default: true
    },
    auction: {
        type: Boolean,
        default: false
    },
    bought: {
        type: Boolean,
        default: false
    },
    connect: {
        type: Boolean,
        default: false
    },
    sold: {
        type: Boolean,
        default: false
    },
    closed: {
        type: Boolean,
        default: false
    },
    forMore: Boolean
})

const metadata = props.item.metadata ? JSON.parse(props.item.metadata) : {};

const syndicationCSS = computed(() => {
    const base = [
        'py-3.5', 'text-xxs', 'leading-4', props.syndication ? 'bg-gradient-to-r from-secondary-900 to-secondary-700 text-white' : 'bg-tertiary-600 text-tertiary-500'
    ]

    return base
})
const boughtCSS = computed(() => {
    const base = [
        'bg-tertiary-700', 'px-5', 'py-5', props.bought ? 'h-73' : 'h-56'
    ]

    return base
})

</script>

<template>
    <nftmx-card-container :forMore="forMore" :image="metadata?metadata.image:''" :assetContractAddress="item.token_address" :tokenId="item.token_id">
        <div class="h-">
            <div :class="[forMore?'h-17':'h-24', 'mb-0.5']">
                <div class="text-tertiary-400 text-xxs">
                    {{item.name?item.name:''}}
                </div>
                <div class="text-white font-ibm-medium text-sm leading-5.25 my-0.75">
                    {{metadata.name?metadata.name:''}}
                </div>
                <div v-if="!forMore" class="text-tertiary-400 font-ibm-light text-xxs leading-5.25">
                    <text-compression :text="metadata.description?metadata.description:''" :length="40" />
                </div>
            </div>
            <div class="flex items-center font-ibm-semi-bold mt-1">
                <div class="text-sm flex flex-1 items-center">
                    <font-awesome-icon @click.prevent :icon="['fas', 'ellipsis-v']" class="text-white hover:text-primary-900 text-lg mr-2" />
                    <checkbox-cell @click.stop v-if="!forMore" border="border-tertiary-500" small><span class="text-xs relative text-tertiary-500 -ml-2">Sell</span></checkbox-cell>
                </div>
                <div class="text-xs text-tertiary-500 flex items-end font-ibm-medium">
                    <span style="line-height: 0.75" class="pr-2">124</span>
                    <font-awesome-icon :icon="['fas', 'thumbs-up']" class="text-primary-900" />
                </div>
            </div>
        </div>
    </nftmx-card-container>
</template>

<style scoped>
.h-17 {
    height: 68px;
}
</style>
