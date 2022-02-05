<script setup>
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import StatisticAccordion from './StatisticAccordion.vue';
import NftmxLineChart from '@/core/components/NftmxLineChart.vue';

const store = useStore();
const items = [
    {
        name: 'All time'
    },
]

</script>

<template>
    <statistic-accordion>
        <template v-slot:caption>
            History
        </template>
        <div class="p-4 lg:p-6">
            <nftmx-select
                v-if="store.state.app.windowWidth < themeConfig.lg"
                class="font-ibm font-thin w-full max-w-lg mr-16 text-sm"
                :data="items"
                small
            ></nftmx-select>
            <nftmx-line-chart></nftmx-line-chart>
        </div>
    </statistic-accordion>
</template>
