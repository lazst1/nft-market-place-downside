<script setup>
import NftmxModal from '@/core/components/NftmxModal.vue';
import NftmxTable from '@/core/components/NftmxTable.vue';
import NftmxThead from '@/core/components/NftmxThead.vue';
import NftmxTh from '@/core/components/NftmxTh.vue';
import NftmxTbody from '@/core/components/NftmxTbody.vue';
import NftmxTd from '@/core/components/NftmxTd.vue';
import NftmxTr from '@/core/components/NftmxTr.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';

</script>

<template>
    <nftmx-modal width="md:w-3/5">
        <div class="text-center">
            <div class="font-press text-2xl leading-5">Total Locked Value</div>
            <div
                class="font-ibm-semi-bold text-3xl text-primary-900 items-center py-4"
            >$1,548,548.65</div>
        </div>
        <div class="px-4 md:px-16 pb-14 mt-14">
            <table class="border border-black bg-tertiary-800 w-full text-left">
                <thead class="text-xs font-ibm-light text-tertiary-400">
                    <tr class="border-b border-black">
                        <th class="py-4 border-r border-black w-1/5 pl-4">Date</th>
                        <th class="border-r border-black w-1/5 pl-4">Wallet Address</th>
                        <th class="border-r border-black w-1/5 pl-4">ETH amount</th>
                        <th class="border-r border-black w-1/5 pl-4">Ownership %</th>
                        <th class="pl-4">Proof</th>
                    </tr>
                </thead>
                <tbody class="font-ibm-light text-xs">
                    <tr v-for="index in 2" :key="index" class="border-b border-black">
                        <td class="py-4 border-r border-black w-1/5 pl-4">19 hours ago</td>
                        <td
                            class="py-4 border-r border-black w-1/5 pl-4 text-primary-900"
                        >0x495f...7b5e</td>
                        <td class="py-4 border-r border-black w-1/5 pl-4">512</td>
                        <td class="py-4 border-r border-black w-1/5 pl-4">50%</td>
                        <td
                            class="py-4 border-r border-black w-1/5 pl-4 text-secondary-600 font-ibm-medium"
                        >0x495f...7b5e</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex mt-14 mb-6">
                <input
                    class="focus:outline-none border-2 h-14 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full pl-20 font-ibm text-sm"
                    placeholder="Type of amount"
                />
                <div
                    class="w-14 h-14 bg-black absolute bg-[url('/images/curr-1.png')] bg-no-repeat bg-center"
                />
            </div>
            <div class="w-full text-center">
                <nftmx-button
                    color="secondary"
                    label="JOIN SYNDICATION"
                    class="font-press w-full text-sm py-5 leading-6"
                />
            </div>
        </div>
    </nftmx-modal>
</template>
