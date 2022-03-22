<script setup>
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import Accordion from '@/core/components/accordion/BasicAccordion.vue';
import NftmxSelect from '@/core/components/basic/NftmxSelect.vue';

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
                <div class="text-lg font-ibm-bold pt-4 pb-3.5 mr-24">
                    <slot name="caption"></slot>
                </div>
                <nftmx-select
                    v-if="store.state.app.windowWidth >= themeConfig.lg"
                    class="font-ibm font-thin w-full max-w-lg mr-16 text-sm"
                    :data="items"
                    small
                ></nftmx-select>
            </div>
        </template>
        <slot />
    </accordion>
</template>
