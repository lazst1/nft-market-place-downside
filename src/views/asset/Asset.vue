<script>
import { ref, onMounted } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
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
import AssetDetail from './AssetDetail.vue';
import AssetStatistics from './AssetStatistics.vue';

export default {
    components: {
    BodyContainer,
    NftmxButton,
    NftmxSelect,
    Accordion,
    NftmxLineChart,
    NftmxFooter,
    NftmxModal,
    NftmxTable,
    NftmxThead,
    NftmxTh,
    NftmxTbody,
    NftmxTd,
    NftmxTr,
    NftmxWalletAddress,
    CardsContainer,
    NftmxItemCard,
    NftmxSelectNetwork,
    NftmxDivider,
    AssetDetail,
    AssetStatistics
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
        const nftPrice = ref();
        const downsidePeriod = ref();
        const downsideRate = ref();

        return {
            assetContractAddress, tokenId, sellyModalActive, fundError, sale, open, store, nftPrice, downsidePeriod, downsideRate
        }
    },
    mounted() { },
    methods: {
        createOrder() {
            console.log('===============', this.assetContractAddress, this.tokenId, this.nftPrice, this.downsidePeriod, this.downsideRate)
            this.store.dispatch('market/createOrder', { assetContractAddress: this.assetContractAddress, tokenId: this.tokenId, nftPrice: this.nftPrice, downsidePeriod: this.downsidePeriod, downsideRate: this.downsideRate })
        }
    }
}
</script>

<template>
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8 mt-9">
            <div class="col-span-7 lg:col-span-3">
                <asset-detail :img_url="asset.image_url" />
            </div>
            <div class="col-span-7 lg:col-span-4 relative">
                <asset-statistics />
            </div>
        </div>
        <div class="mt-5">
            <accordion>
                <template v-slot:caption>
                    <div class="flex items-center">
                        <div class="text-lg font-ibm-bold py-4 mr-24">Ledger</div>
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
                        <nftmx-tr
                            v-for="index in 1"
                            :key="index"
                            :border="index === 1 ? false : true"
                        >
                            <nftmx-td>Sale</nftmx-td>
                            <nftmx-td ps>$0.4781</nftmx-td>
                            <nftmx-td ps>
                                <nftmx-wallet-address
                                    class="text-primary-900"
                                    address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"
                                ></nftmx-wallet-address>
                            </nftmx-td>
                            <nftmx-td ps>
                                <nftmx-wallet-address
                                    class="text-primary-900"
                                    address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"
                                ></nftmx-wallet-address>
                            </nftmx-td>
                            <nftmx-td ps>17 hours ago</nftmx-td>
                            <nftmx-td ps :border="false">
                                <nftmx-wallet-address
                                    class="text-secondary-600"
                                    address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"
                                ></nftmx-wallet-address>
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
                        <div class="text-2xl font-ibm-bold py-4 mr-24">More From This Collections</div>
                    </div>
                </template>

                <!-- <cards-container class="mt-2 mb-2 place-items-center">
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                    <nftmx-item-card forMore class="bg-tertiary-700"></nftmx-item-card>
                </cards-container>-->
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
                        class="w-full font-press text-sm pt-4.5 pb-5 text-lg"
                        @click="createOrder()"
                    />
                </div>
            </div>
        </div>
    </nftmx-modal>
</template>

<style scoped>
.text-5\/2xl {
    font-size: 1.75rem /* 20px */;
    line-height: 2.15rem /* 28px */;
}
.text-smallest {
    font-size: 8px;
}
.text-small {
    font-size: 10px;
}
</style>
