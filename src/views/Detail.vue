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

const modalActive = ref(false);

</script>

<template>
    <body-container>
        <div class="grid grid-cols-7 text-white gap-8">
            <div class="col-span-7 lg:col-span-3">
                <div class="relative h-520 overflow-hidden p-6 bg-[url('@/assets/test.jpg')] bg-cover">
                    <ribbon :percent="percent" :period="period" />
                </div>
                <div class="h-20 overflow-hidden overflow-x-auto py-4 items-center">
                    <div class="flex w-full items-center text-sm font-ibm-bold">
                        <detail-button>Details</detail-button>
                        <detail-button class="min-w-fit">About the creator</detail-button>
                        <detail-button class="min-w-fit">Chain info</detail-button>
                        <detail-button class="min-w-fit">Downside Protection</detail-button>
                        <div class="grow"></div>
                        <div class="border border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                            <svg class="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="1 4 1 10 7 10" />  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                        </div>
                        <div class="border-y border-r border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                            <svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />  <line x1="10" y1="14" x2="20" y2="4" />  <polyline points="15 4 20 4 20 9" /></svg>
                        </div>
                        <div class="border-y border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                            <svg class="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="18" cy="5" r="3" />  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="19" r="3" />  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                        </div>
                        <div class="border border-black w-8 h-8 p-1.5 hover:bg-primary-900 bg-tertiary-800">
                            <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-7 lg:col-span-4 relative h-520">
                <div class="flex py-6 text-5/2xl">
                    <div class="flex-1 font-ibm-bold">
                        Play Quiet #10/10
                    </div>
                    <div class="">
                        <icon
                            :path="mdiThumbUp"
                            w="w-6"
                            h="h-6"
                            size="24"
                            color="tertiary-400"
                        />
                    </div>
                </div>
                <div class="flex text-xs pb-12">
                    <div class="flex-1">
                        Created by <span class="text-primary-900">234...293</span> | Owned by <span class="text-primary-900">234...293</span>
                    </div>
                    <div class="text-primary-900 font-ibm-bold">
                        AUCTION
                    </div>
                </div>

                <div class="grid grid-cols-2 bg-tertiary-800 border border-black font-ibm-bold">
                    <div class="h-44 items-center p-4">
                        <div class="py-4">
                            <div class="pt-3 pb-4 text-base">
                                Current auction ends in
                            </div>
                            <timer size="big" color="tertiary-800" />
                        </div>
                    </div>
                    
                    <div class="h-44 items-center pr-7 py-4">
                        <nftmx-select class="font-ibm-bold w-full text-sm mb-3" :data="people">
                        </nftmx-select>
                        <nftmx-button
                            color="primary"
                            label="BUY NOW"
                            class="font-press w-full text-lg"
                            @click="modalActive = true"
                        />
                    </div>
                </div>
                
                <div class="bg-tertiary-800 border border-black mt-4">
                    <div class="h-56 items-center p-4 text-center">
                        <div class="pt-2 text-lg font-ibm-bold">
                            Total locked value
                            <icon
                                class="-ml-2"
                                :path="mdiHelpCircle"
                                w="w-4"
                                h="h-4"
                                size="36"
                                color="white"
                            />
                        </div>
                        <div class="pt-2 pb-6 text-3xl">
                            <span class="text-primary-900 font-ibm-bold">$1.548,548.65 </span>
                            <span class="text-tertiary-400">( 458,6645)
                            </span>
                        </div>
                        <nftmx-button
                            color="secondary"
                            label="JOIN SYNDICATION"
                            class="font-press w-full text-lg py-5"
                        />
                    </div>
                </div>
            </div>
        </div>
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
    </body-container>
    <nftmx-footer />
    <nftmx-modal v-model="modalActive" hasCancel>
        <div class="text-center">
            <div class="font-press text-2xl">
                Buy
            </div>
            <div class="font-ibm-semi-bold text-sm items-center py-4">
                Balance: $1,548.85 <span class="text-xxs font-ibm text-tertiary-400">(322.4445)</span>
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
</style>
