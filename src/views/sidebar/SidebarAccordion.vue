<script setup>
import Accordion from '@/core/container/Accordion.vue';

defineProps({
    name: String,
})
</script>

<template>
    <accordion :border="false" :sidebar="true" class="mt-4.25">
        <template v-slot:caption>
            <div class="text-white font-ibm text-sm mt-1.5">{{name}}</div>
        </template>
        <div class="font-ibm-light text-tertiary-400">
            <slot />
        </div>
    </accordion>
</template>