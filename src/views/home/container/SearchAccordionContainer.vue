<script setup>
import { ref } from 'vue';
import Accordion from '@/core/container/Accordion.vue';

defineProps({
    title: String
})

</script>

<template>
    <accordion
        :border="false"
        :sidebar="true"
        class="w-full"
    >
        <template v-slot:caption>
            <div class="flex items-center w-full">
                <div class="flex-1 text-xs font-ibm py-4 mr-24">{{ title }}</div>
            </div>
        </template>
        <div class="grid grid-cols-2 pt-2 gap-2 justify-between text-xs">
            <slot name="content" />
        </div>
    </accordion>
</template>
