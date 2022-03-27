<script setup>
import { ref } from 'vue';
import Accordion from '@/core/components/accordion/BasicAccordion.vue';
import NftmxSaleCard from '@/core/components/cards/NftmxSaleCard.vue';

defineProps({
    title: String,
    more: Boolean
})

</script>

<template>
    <accordion
        :border="false"
        :sidebar="true"
        :bIcon="true"
    >
        <template v-slot:caption>
            <div class="flex items-center w-full">
                <div class="flex-1 text-sm font-press pt-3 pb-5 mr-4">{{ title }}</div>
            </div>
        </template>
        <div class="pt-2">
            <slot name="content" />
        </div>
        <div v-if="more" class="text-sm text-right px-6 text-primary-900 font-ibm-bold mt-3">
            <span class="cursor-pointer">See More</span>
        </div>
    </accordion>
</template>
