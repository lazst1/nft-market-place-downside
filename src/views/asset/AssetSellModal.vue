<script setup>
import { ref, onMounted } from 'vue'
import { saleType } from '@/core/config'
import NftmxModal from '@/core/components/NftmxModal.vue';
import { useRoute } from 'vue-router';
import DetailButton from '@/core/components/DetailButton.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import NftmxSelectNetwork from '@/core/components/NftmxSelectNetwork.vue';
import { useStore } from 'vuex';

const props = defineProps({
    // modalValue: {
    //     type: Boolean,
    //     default: false
    // }
})

const store = useStore();
const route = useRoute();
const assetContractAddress = route.params.assetContractAddress;
const tokenId = route.params.tokenId;
const nftPrice = ref();
const downsidePeriod = ref();
const downsideRate = ref();
const sale = ref(saleType.FIX_SALE);

function createOrder() {
    console.log('===============', assetContractAddress, tokenId, nftPrice, downsidePeriod, downsideRate)
    this.store.dispatch('market/createOrder', { assetContractAddress: assetContractAddress, tokenId, nftPrice, downsidePeriod, downsideRate })
}

</script>

<template>
    <nftmx-modal big>
        <div class="text-center relative mt-1.75 pb-2.5">
            <div class="font-press text-2xl">List Item for Sale</div>
        </div>
        <div class="grid grid-cols-8 text-white my-9 pl-17.5 pr-17">
            <div class="col-span-full lg:col-span-3 pr-2.25">
                <div
                    class="relative h-90.75 overflow-hidden p-6 bg-[url('/images/img10.png')] bg-cover border border-black"
                >
                    <ribbon :percent="percent" :period="period" />
                </div>
                <div class="flex w-full text-sm font-ibm-bold mt-7">
                    <div class="pt-0.75">
                        <detail-button class="text-primary-900">Kyle White</detail-button>
                        <detail-button class="text-2xl mt-1.5">Play Quiet #10/10</detail-button>
                    </div>
                    <div class="grow"></div>
                    <div class="py-0.5">
                        <div>Price</div>
                        <div class="text-sm font-ibm-light flex items-center mt-3">
                            <img src="/images/curr-1.png" class="w-4 h-4 mr-2.5" />
                            0
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="col-span-full lg:col-span-5 relative text-lg font-ibm-medium mr-0.5 pl-9 ml-px"
            >
                <div class="flex">
                    Choose a collection
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="grid grid-cols-2 mt-3 pb-0.75 gap-4.5">
                    <nftmx-select-network />
                    <nftmx-button
                        color="primary-900"
                        label="CREATE NEW COLLECTION"
                        :class="['font-press text-sm bg-primary-900 hover:bg-primary-700 focus:bg-primary-800']"
                    />
                </div>
                <div class="flex mt-6">
                    Type of sale
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex my-3">
                    <nftmx-button
                        outline
                        color="primary-900"
                        label="FIX SALE"
                        :class="[sale === saleType.FIX_SALE ? 'bg-tertiary-700' : '', 'font-ibm-bold text-sm pt-3.5 pb-4 border-2 border-black w-1/2 hover:bg-tertiary-700 text-primary-900 tracking-wide']"
                        @click="sale = saleType.FIX_SALE"
                    />
                    <nftmx-button
                        outline
                        color="primary-900"
                        label="AUCTION"
                        :class="[sale === saleType.AUCTION ? 'bg-tertiary-700' : '', 'font-ibm-bold text-sm pt-3.5 pb-4 border-2 border-black border-l-0 w-1/2 text-primary-900 hover:bg-tertiary-700 tracking-wide']"
                        @click="sale = saleType.AUCTION"
                    />
                </div>
                <div class="flex mt-8">
                    Price
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex mt-3.5 mb-6 font-ibm text-sm">
                    <nftmx-select-network color="black" :data="currencies" class="w-1/3" />
                    <input
                        v-model="nftPrice"
                        class="focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full pl-4.75 font-ibm text-sm"
                        placeholder="Type of amount"
                    />
                </div>
                <div class="flex pt-0.75">
                    Days of protection to offer
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex mt-3.5 mb-7 font-ibm text-sm">
                    <div
                        class="flex items-center gap-5 border-2 h-13.5 border-black text-white bg-tertiary-700 w-full pl-5 font-ibm-light text-sm"
                    >
                        <font-awesome-icon
                            :icon="['fas', 'calendar-alt']"
                            class="text-lg ml-0.75 mr-0.5"
                        />6 Months
                    </div>
                </div>
                <v-date-picker
                    v-model="downsidePeriod"
                    color="red"
                    is-dark
                    is-range
                    is-expanded
                    :columns="$screens({ default: 1, lg: 2 })"
                />
                <div class="flex pt-0.5">
                    Downside Protection to Offer
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex mt-3.5 mb-4 font-ibm text-sm">
                    <input
                        v-model="downsideRate"
                        type="number"
                        class="focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full px-6 font-ibm text-sm"
                        placeholder
                    />
                    <div class="w-14 h-13.5 px-4 bg-black flex items-center justify-center">%</div>
                </div>
                <div
                    class="flex text-xs font-ibm-semi-bold text-primary-900 pt-0.75 pb-0.5 cursor-pointer w-fit"
                >
                    More options
                    <div class="self-center cursor-pointer ml-5.25">
                        <font-awesome-icon v-if="!open" :icon="['fas', 'sort-down']" class />
                        <font-awesome-icon v-if="open" :icon="['fas', 'sort-up']" class />
                    </div>
                </div>
                <nftmx-divider class="mt-9 mb-6" />
                <div class="flex pt-0.75">
                    Fees
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="mt-4">
                    <div class="flex py-1 text-xs font-ibm-medium text-tertiary-500">
                        <div>Service Fee</div>
                        <div class="grow"></div>
                        <div>2.5%</div>
                    </div>
                    <div class="flex py-2.5 text-xs font-ibm-medium text-tertiary-500">
                        <div>Creator Company</div>
                        <div class="grow"></div>
                        <div>2.5%</div>
                    </div>
                </div>
                <div class="w-full mt-9 pt-0.5 pb-2.5 mb-17">
                    <nftmx-button
                        color="primary"
                        label="COMPLETE LISTING"
                        class="w-full font-press text-sm pt-4.5 pb-5 lg:text-lg"
                        @click="createOrder()"
                    />
                </div>
            </div>
        </div>
    </nftmx-modal>
</template>