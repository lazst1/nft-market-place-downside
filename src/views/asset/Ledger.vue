<script setup>
import Accordion from '@/core/container/Accordion.vue';
import NftmxTable from '@/core/components/NftmxTable.vue';
import NftmxThead from '@/core/components/NftmxThead.vue';
import NftmxTh from '@/core/components/NftmxTh.vue';
import NftmxTbody from '@/core/components/NftmxTbody.vue';
import NftmxTd from '@/core/components/NftmxTd.vue';
import NftmxTr from '@/core/components/NftmxTr.vue';
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';


</script>

<template>
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
                    <nftmx-tr v-for="index in 1" :key="index" :border="index === 1 ? false : true">
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
</template>