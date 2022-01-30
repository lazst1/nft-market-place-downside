<script setup>
import { ref } from 'vue'
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxLineChart from '@/core/components/NftmxLineChart.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import MoreInfo from './MoreInfo.vue';
import ItemAction from './ItemAction.vue';

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
                <more-info />
            </div>
            <div class="col-span-7 lg:col-span-4 relative h-asset-img">
                <item-action />
            </div>
        </div>
        <div class="mb-10">
            <accordion>
                <template v-slot:caption>
                    <div class="flex items-center">
                        <div class="text-lg font-ibm-bold py-4 mr-24">History</div>
                        <nftmx-select
                            class="font-ibm font-thin w-full max-w-lg text-sm"
                            :data="items"
                            small
                        ></nftmx-select>
                    </div>
                </template>
                <div class="p-6">
                    <nftmx-line-chart></nftmx-line-chart>
                </div>
            </accordion>
        </div>
    </body-container>
    <nftmx-footer />
</template>
