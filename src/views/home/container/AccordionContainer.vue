<script setup>
import { ref } from 'vue';
import Accordion from '@/core/container/Accordion.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';

defineProps({
    title: String,
    more: Boolean
})

const open = ref(true);
const handleClick = (value) => {
    open.value = value
}

</script>

<template>
    <accordion
        :border="false"
        :sidebar="true"
        :bIcon="true"
        v-model="open"
        @handle-click="handleClick"
    >
        <template v-slot:caption>
            <div class="flex items-center w-full">
                <div class="flex-1 text-sm font-press pt-3 pb-5 mr-4">{{ title }}</div>
            </div>
        </template>
        <div class="pt-2">
            <div
                class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
            >
                <slot name="content" />
            </div>
        </div>
        <div v-if="more" class="text-sm text-right px-6 text-primary-900 font-ibm-bold mt-3">
            <span class="cursor-pointer">See More</span>
        </div>
    </accordion>
</template>
