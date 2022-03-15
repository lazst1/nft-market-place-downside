<script setup>
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import NftmxSelect from '@/core/components/NftmxSelect.vue';
import NftmxLineChart from '@/core/components/NftmxLineChart.vue';
import Accordion from '@/core/container/Accordion.vue';
import { ref } from 'vue';

const store = useStore();
const items = [
    {
        name: 'All time'
    },
]

</script>

<template>
    <accordion>
        <template v-slot:caption>
            <div class="flex items-center">
                <div class="text-lg font-ibm-bold pt-4 pb-3.5 mr-24">History</div>
                <nftmx-select
                    @click.stop
                    v-if="store.state.app.windowWidth >= themeConfig.sm"
                    class="font-ibm font-thin w-full max-w-lg mr-16 text-sm"
                    :data="items"
                    small
                ></nftmx-select>
            </div>
        </template>
        <div class="p-4 lg:p-6">
            <div class="px-5">
                <nftmx-select
                    @click.stop
                    v-if="store.state.app.windowWidth < themeConfig.sm"
                    class="font-ibm font-thin w-full text-sm text-white"
                    :data="items"
                    small
                ></nftmx-select>
            </div>
            <nftmx-line-chart></nftmx-line-chart>
        </div>
    </accordion>
</template>
