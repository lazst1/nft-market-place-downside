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
import Accordion from '@/core/container/Accordion.vue';
import NftmxLineChart from '@/core/components/NftmxLineChart.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import NftmxModal from '@/core/components/NftmxModal.vue';
import { mdiClose } from '@mdi/js'
import NftmxTable from '@/core/components/NftmxTable.vue';
import NftmxThead from '@/core/components/NftmxThead.vue';
import NftmxTh from '@/core/components/NftmxTh.vue';
import NftmxTbody from '@/core/components/NftmxTbody.vue';
import NftmxTd from '@/core/components/NftmxTd.vue';
import NftmxTr from '@/core/components/NftmxTr.vue';
import NftmxWalletAddress from '@/core/components/NftmxWalletAddress.vue';

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    image:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    image:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    image:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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

const buyModalActive = ref(false);
const syndicationModalActive = ref(false);
const fundError = ref(false);

</script>

<template>
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8 mt-9">
            <div class="col-span-7 lg:col-span-3">
                <div class="relative h-520 overflow-hidden p-6 bg-[url('@/assets/test.jpg')] bg-cover">
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
                        @click="syndicationModalActive = true"
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
                                            @click="syndicationModalActive = true"
                                        />
                                        <nftmx-button
                                            color="secondary"
                                            label="JOIN SYNDICATION"
                                            class="font-press w-37 text-smallest py-1.5"
                                            @click="syndicationModalActive = true"
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
                                @click="syndicationModalActive = true"
                            />
                        </div>
                    </accordion>
                </div>
            </div>
        </div>
    </body-container>
    <nftmx-footer />
    <nftmx-modal v-model="buyModalActive" width="md:w-3/5 lg:w-5/12">
        <div class="text-center relative -top-2">
            <div class="font-press text-2xl">
                Buy
            </div>
            <div class="font-ibm-semi-bold text-sm items-center py-4">
                Balance: $1,548.85 <span class="text-xxs font-ibm text-tertiary-400">(322.4445)</span>
            </div>
        </div>
        <div class="px-4 md:px-16 pb-10">
            <table class="w-full">
                <thead class="text-tertiary-400 font-ibm-light text-xs border-b border-black">
                    <th class="py-6 px-5 text-left">Items</th>
                    <th class="text-right">Subtotal</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="index in 2" :key="index" class="border-b border-black">
                        <td class="p-4 text-left flex">
                            <div class="bg-[url('@/assets/test.jpg')] w-13 h-13">
                            </div>
                            <div class="pt-0.5 px-4">
                                <div class="text-primary-900 font-ibm text-xs leading-6">Kyle White</div>
                                <div class="font-ibm-medium text-sm">Play Quiet #10/10</div>
                            </div>
                        </td>
                        <td class="text-right">
                            <div class="font-ibm text-xs leading-6">$458,658.92</div>
                            <div class="font-ibm text-xxs text-tertiary-400 leading-6">( 322.4445)</div>
                        </td>
                        <td class="text-center items-start">
                            <icon
                                :path="mdiClose"
                                :size="16"
                                class="cursor-pointer relative -top-3"
                            />
                        </td>
                    </tr>
                </tbody>
                <tfoot class="text-tertiary-400 font-ibm-light text-xs">
                    <th class="py-6 px-5 text-left">Total</th>
                    <th class="text-right">
                        <div class="font-ibm text-sm text-primary-900 leading-10">$917,658.92</div>
                        <div class="font-ibm text-xxs text-tertiary-400">( 644.889)</div>
                    </th>
                    <th></th>
                </tfoot>
            </table>
            <div class="w-full text-center pt-6 pb-5">
                <nftmx-button
                    color="primary"
                    label="BUY NOW"
                    class="font-press w-full text-sm my-3 max-w-xs"
                    @click="fundError = true"
                />
                <div v-if="fundError" class="h-0 text-center font-ibm-medium text-xxs text-red-600">Add fund to your wallet</div>
            </div>
        </div>
    </nftmx-modal>
    <nftmx-modal v-model="syndicationModalActive" width="md:w-3/5">
        <div class="text-center">
            <div class="font-press text-2xl leading-5">
                Total Locked Value
            </div>
            <div class="font-ibm-semi-bold text-3xl text-primary-900 items-center py-4">
                $1,548,548.65
            </div>
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
                        <td class="py-4 border-r border-black w-1/5 pl-4 text-primary-900">
                            0x495f...7b5e
                        </td>
                        <td class="py-4 border-r border-black w-1/5 pl-4">512</td>
                        <td class="py-4 border-r border-black w-1/5 pl-4">50%</td>
                        <td class="py-4 border-r border-black w-1/5 pl-4 text-secondary-600 font-ibm-medium">0x495f...7b5e</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex mt-14 mb-6">
                <input class="focus:outline-none border-2 h-14 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full pl-20 font-ibm text-sm" placeholder="Type of amount" />
                <div class="w-14 h-14 bg-black absolute bg-[url('/images/curr-1.png')] bg-no-repeat bg-center" />
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
</style>
