<script setup>
import { ref } from 'vue'
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
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import StatisticAccordion from './StatisticAccordion.vue'
import AssetHistory from './AssetHistory.vue';

const props = defineProps({
    // modalValue: {
    //     type: Boolean,
    //     default: false
    // }
})

const items = [
    {
        name: 'All time'
    },
]
const store = useStore();

const emit = defineEmits(['handle-modal'])

const handleModal = () => {
    emit('handle-modal', !props.modelValue)
}
</script>


<template>
    <div class="bg-tertiary-800 border border-black px-6 pt-5.5 pb-6.25">
        <nftmx-button
            color="primary"
            label="SELL"
            class="font-press w-full text-lg py-4"
            @click="handleModal"
        />
    </div>
    <div class="mt-5">
        <asset-history />
    </div>
    <div class="mt-5">
        <accordion>
            <template v-slot:caption>
                <div class="flex items-center">
                    <div class="text-lg font-ibm-bold py-4 mr-24">Listings</div>
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
                    <nftmx-tr v-for="index in 1" :key="index" :border="index === 1 ? false : true">
                        <nftmx-td>
                            <nftmx-wallet-address
                                class="text-primary-900"
                                address="0xB29265736dcc20867F6b3c0f5aa8E5A64942b816"
                            ></nftmx-wallet-address>
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
                                class="font-press text-smallest py-1.5 px-0.5"
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
                    <div class="text-lg font-ibm-bold pt-4 pb-3.5 mr-24">Offers</div>
                </div>
            </template>
            <div class="min-h-[50px] text-center border-b border-black text-2xl py-10">No offers yet</div>
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
</template>
