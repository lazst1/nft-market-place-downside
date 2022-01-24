<script>
import { ref, onMounted } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import Ribbon from '@/core/components/Ribbon.vue';
import DetailButton from '@/core/components/DetailButton.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxLineChart from '@/core/components/NftmxLineChart.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxModal from '@/core/components/NftmxModal.vue';
import NftmxTable from '@/core/components/NftmxTable.vue';
import NftmxThead from '@/core/components/NftmxThead.vue';
import NftmxTh from '@/core/components/NftmxTh.vue';
import NftmxTbody from '@/core/components/NftmxTbody.vue';
import NftmxTd from '@/core/components/NftmxTd.vue';
import NftmxTr from '@/core/components/NftmxTr.vue';
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';
import CardsContainer from '@/core/container/CardsContainer.vue';
import NftmxItemCard from '@/core/components/NftmxItemCard.vue';
import { saleType } from '@/core/config'
import NftmxSelectNetwork from '@/core/components/NftmxSelectNetwork.vue';
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import { useRoute } from 'vue-router';
import { currencies } from '@/core/config';
import { useStore } from 'vuex';

export default {
    props: {
        percent: {
            type: Number,
            default: 100
        },
        period: {
            type: Number,
            default: 365
        },
    },
    components: {
        BodyContainer, Ribbon, DetailButton, NftmxButton, NftmxSelect, Accordion, NftmxLineChart, NftmxFooter, NftmxModal, NftmxTable, NftmxThead, NftmxTh, NftmxTbody, NftmxTd, NftmxTr,
        NftmxWalletAddress, CardsContainer, NftmxItemCard, NftmxSelectNetwork, NftmxDivider,
    },
    data() {
        return {
            asset: {},
            items: [
                {
                    name: 'All time'
                },
            ],
            currencies: currencies,
            saleType: saleType
        }
    },
    setup() {
        const route = useRoute();
        const sellyModalActive = ref(false);
        const fundError = ref(false);
        const sale = ref(saleType.FIX_SALE);
        const assetContractAddress = route.params.assetContractAddress;
        const tokenId = route.params.tokenId;
        const open = ref(false);
        const store = useStore();

        return {
            assetContractAddress, tokenId, sellyModalActive, fundError, sale, open, store
        }
    },
    mounted() {},
    methods: {
        createOrder() {
            console.log('===============', this.assetContractAddress, this.tokenId)
            this.store.dispatch('market/createOrder', {assetContractAddress: this.assetContractAddress, tokenId: this.tokenId})
        }
    }
}
</script>

<template>
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8 mt-9">
            <div class="col-span-7 lg:col-span-3">
                <div class="relative h-520 overflow-hidden p-6" :style="{background:'url('+asset.image_url+')', backgroundRepeat:'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', backgroundColor: '#222222'}">
                    <ribbon :percent="percent" :period="period" />
                </div>
                <div class="overflow-hidden overflow-x-auto mt-4 mb-8 items-center">
                    <div class="flex w-full items-center text-sm font-ibm-bold">
                        <detail-button>Details</detail-button>
                        <detail-button class="min-w-fit">About the creator</detail-button>
                        <detail-button class="min-w-fit">Chain info</detail-button>
                        <detail-button class="min-w-fit">Downside Protection</detail-button>
                        <div class="grow"></div>
                        <div class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                            <font-awesome-icon :icon="['fas', 'undo']" />
                        </div>
                        <div class="border-y border-r border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                        </div>
                        <div class="border-y border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                            <font-awesome-icon :icon="['fas', 'share-alt']" />
                        </div>
                        <div class="border border-black w-8 h-8 px-2 pt-0.75 hover:bg-primary-900 bg-tertiary-800">
                            <font-awesome-icon :icon="['fas', 'bars']" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-7 lg:col-span-4 relative">
                <div class="pt-6 font-ibm-bold text-primary-900 text-lg">
                    Kyle White
                </div>
                <div class="flex pb-6 text-5/2xl">
                    <div class="flex-1 font-ibm-bold mt-1.5 pb-2">
                        Play Quiet #10/10
                    </div>
                    <div class="text-base text-tertiary-400 flex items-end font-ibm-semi-bold py-2">
                        <span class="pr-2 leading-4">124</span>
                        <font-awesome-icon :icon="['fas', 'thumbs-up']" class="text-2xl text-primary-900" />
                    </div>
                </div>
                <div class="flex text-xs pb-12">
                    <div class="flex-1">
                        Created by <span class="text-primary-900">234...293</span> | Owned by <span class="text-primary-900">234...293</span>
                    </div>
                </div>

                <div class="bg-tertiary-800 border border-black p-6">
                    <nftmx-button
                        color="primary"
                        label="SELL"
                        class="font-press w-full text-lg py-4"
                        @click="sellyModalActive = true"
                    />
                </div>
                <div class="mt-5">
                    <accordion>
                        <template v-slot:caption>
                            <div class="flex items-center">
                                <div class="text-lg font-ibm-bold py-4 mr-24">
                                    History
                                </div>
                                <nftmx-select class="font-ibm font-thin w-full max-w-lg text-sm" :data="items" small>
                                </nftmx-select>
                            </div>
                        </template>
                        <div class="p-6">
                            <nftmx-line-chart></nftmx-line-chart>
                        </div>
                    </accordion>
                </div>
                <div class="mt-5">
                    <accordion>
                        <template v-slot:caption>
                            <div class="flex items-center">
                                <div class="text-lg font-ibm-bold py-4 mr-24">
                                    Listings
                                </div>
                            </div>
                        </template>
                        <nftmx-table height="80%">
                            <nftmx-thead>
                                <nftmx-tr>
                                    <nftmx-th>From</nftmx-th>
                                    <nftmx-th ps>Price</nftmx-th>
                                    <nftmx-th ps>Downside Protection</nftmx-th>
                                    <nftmx-th ps>Expiration</nftmx-th>
                                    <nftmx-th :border="false"></nftmx-th>
                                </nftmx-tr>
                            </nftmx-thead>
                            <nftmx-tbody>
                                <nftmx-tr v-for="index in 1" :key="index" :border="index===1 ? false : true">
                                    <nftmx-td>
                                        <nftmx-wallet-address class="text-primary-900" address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"></nftmx-wallet-address>
                                    </nftmx-td>
                                    <nftmx-td ps>$0.4781</nftmx-td>
                                    <nftmx-td ps>100%</nftmx-td>
                                    <nftmx-td ps></nftmx-td>
                                    <nftmx-td :border="false">
                                        <nftmx-button
                                            color="primary"
                                            label="BUY NOW"
                                            class="font-press w-37 text-smallest py-1.5 mr-5"
                                        />
                                        <nftmx-button
                                            color="secondary"
                                            label="JOIN SYNDICATION"
                                            class="font-press w-37 text-smallest py-1.5"
                                        />
                                    </nftmx-td>
                                </nftmx-tr>
                            </nftmx-tbody>
                        </nftmx-table>
                    </accordion>
                </div>
                <div class="mt-5">
                    <accordion>
                        <template v-slot:caption>
                            <div class="flex items-center">
                                <div class="text-lg font-ibm-bold pt-4 pb-3.5 mr-24">
                                    Offers
                                </div>
                            </div>
                        </template>
                        <div class="min-h-[50px] text-center border-b border-black text-2xl py-10">
                            No offers yet
                        </div>
                        <div class="px-4 py-3">
                            <nftmx-button
                                outline
                                color="primary"
                                label="MAKE OFFER"
                                class="font-press w-37 text-small py-1.5 text-primary-900 mt-px mb-0.5"
                            />
                        </div>
                    </accordion>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <accordion>
                <template v-slot:caption>
                    <div class="flex items-center">
                        <div class="text-lg font-ibm-bold py-4 mr-24">
                            Ledger
                        </div>
                    </div>
                </template>
                <nftmx-table height="80%">
                    <nftmx-thead>
                        <nftmx-tr>
                            <nftmx-th>Event</nftmx-th>
                            <nftmx-th ps>Price</nftmx-th>
                            <nftmx-th ps>From</nftmx-th>
                            <nftmx-th ps>To</nftmx-th>
                            <nftmx-th ps>Date</nftmx-th>
                            <nftmx-th :border="false">Txn Hash</nftmx-th>
                        </nftmx-tr>
                    </nftmx-thead>
                    <nftmx-tbody>
                        <nftmx-tr v-for="index in 1" :key="index" :border="index===1 ? false : true">
                            <nftmx-td>Sale</nftmx-td>
                            <nftmx-td ps>$0.4781</nftmx-td>
                            <nftmx-td ps>
                                <nftmx-wallet-address class="text-primary-900" address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"></nftmx-wallet-address>
                            </nftmx-td>
                            <nftmx-td ps>
                                <nftmx-wallet-address class="text-primary-900" address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"></nftmx-wallet-address>
                            </nftmx-td>
                            <nftmx-td ps>17 hours ago</nftmx-td>
                            <nftmx-td ps :border="false">
                                <nftmx-wallet-address class="text-secondary-600" address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"></nftmx-wallet-address>
                            </nftmx-td>
                        </nftmx-tr>
                    </nftmx-tbody>
                </nftmx-table>
            </accordion>
        </div>
        <div class="mt-7 mb-10">
            <accordion :accordion="false" :border="false" :sidebar="true">
                <template v-slot:caption>
                    <div class="flex items-center">
                        <div class="text-2xl font-ibm-bold py-4 mr-24">
                            More From This Collections
                        </div>
                    </div>
                </template>
                
                <!-- <cards-container class="mt-2 mb-2 place-items-center">
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                </cards-container> -->
            </accordion>
        </div>
        <div class="text-center pt-px mb-12">
            <nftmx-button
                outline
                color="primary"
                label="VIEW COLLECTIONS"
                class="font-ibm-bold text-lg pt-2.5 pb-3 text-primary-900"
            />
        </div>
    </body-container>
    <nftmx-footer />
    <nftmx-modal v-model="sellyModalActive" big>
        <div class="text-center relative mt-1.75 pb-2.5">
            <div class="font-press text-2xl">
                List Item for Sale
            </div>
        </div>
        <div class="grid grid-cols-24 text-white my-9 pl-17.5 pr-17">
            <div class="col-span-3 lg:col-span-9 pr-2.25">
                <div class="relative h-90.75 overflow-hidden p-6 bg-[url('/images/img10.png')] bg-cover border border-black">
                    <ribbon :percent="percent" :period="period" />
                </div>
                <div class="flex w-full text-sm font-ibm-bold mt-7">
                    <div class="pt-0.75">
                        <detail-button class="text-primary-900">Kyle White</detail-button>
                        <detail-button class="text-2xl mt-1.5">Play Quiet #10/10</detail-button>
                    </div>
                    <div class="grow"></div>
                    <div class="py-0.5">
                        <div>
                            Price
                        </div>
                        <div class="text-sm font-ibm-light flex items-center mt-3">
                            <img src="/images/curr-1.png" class="w-4 h-4 mr-2.5" />
                            0
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3 lg:col-span-15 relative text-lg font-ibm-medium mr-px pl-9">
                <div class="flex">
                    Type
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex my-3">
                    <nftmx-button
                        outline
                        color="primary-900"
                        label="FIX SALE"
                        :class="[sale===saleType.FIX_SALE?'bg-tertiary-700':'', 'font-ibm-bold text-sm pt-3.5 pb-4 border-2 border-black w-1/2 hover:bg-tertiary-700 text-primary-900 tracking-wide']"
                        @click="sale = saleType.FIX_SALE"
                    />
                    <nftmx-button
                        outline
                        color="primary-900"
                        label="AUCTION"
                        :class="[sale===saleType.AUCTION?'bg-tertiary-700':'', 'font-ibm-bold text-sm pt-3.5 pb-4 border-2 border-black border-l-0 w-1/2 text-primary-900 hover:bg-tertiary-700 tracking-wide']"
                        @click="sale = saleType.AUCTION"
                    />
                </div>
                <div class="flex mt-7">
                    Price
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex mt-3.5 mb-6 font-ibm text-sm">
                    <nftmx-select-network color="black" :data="currencies" class="w-1/3" />
                    <input class="focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full pl-4.75 font-ibm text-sm" placeholder="Type of amount" />
                </div>
                <div class="flex pt-0.75">
                    Duration
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex mt-3.5 mb-7 font-ibm text-sm">
                    <div class="flex items-center gap-5 border-2 h-13.5 border-black text-white bg-tertiary-700 w-full pl-5 font-ibm-light text-sm">
                        <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-lg ml-0.75 mr-0.5" />
                        6 Months
                    </div>
                </div>
                <div class="flex pt-0.5">
                    Amount of Downside Protection to Offer
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="text-small ml-1" />
                </div>
                <div class="flex mt-3.5 mb-4 font-ibm text-sm">
                    <input class="text-right focus:outline-none border-2 h-13.5 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full pr-6 font-ibm text-sm" placeholder="100" />
                    <div class="w-14 h-13.5 px-4 bg-black flex items-center justify-center">
                        %
                    </div>
                </div>
                <div class="flex text-xs font-ibm-semi-bold text-primary-900 pt-0.75 pb-0.5">
                    More options
                    <div class="self-center cursor-pointer ml-5.25">
                        <font-awesome-icon v-if="!open" :icon="['fas', 'sort-down']" class="" />
                        <font-awesome-icon v-if="open" :icon="['fas', 'sort-up']" class="" />
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
                        class="w-full font-press text-sm pt-4.5 pb-5 text-lg"
                        @click="createOrder()"
                    />
                </div>
            </div>
        </div>
    </nftmx-modal>
</template>

<style scoped>
.h-520 {
    height: 520px;
}
.text-5\/2xl {
    font-size: 1.75rem/* 20px */;
    line-height: 2.15rem/* 28px */;
}
.w-13 {
    width: 3.25em
}
.h-13 {
    height: 3.25em
}
.text-smallest {
    font-size: 8px;
}
.text-small {
    font-size: 10px;
}
.grid-cols-24 {
    grid-template-columns: repeat(24, minmax(0, 1fr));
}
@media (min-width: 1024px) {
    .lg\:col-span-15 {
        grid-column: span 15 / span 15;
    }
}

</style>
