<script setup>
import Accordion from '@/core/container/Accordion.vue';
import { ref } from '@vue/reactivity';

defineProps({
    name: String,
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
        class="mt-4.25"
        v-model="open"
        @handle-click="handleClick"
    >
        <template v-slot:caption>
            <div class="text-white font-ibm text-sm mt-1.5">{{ name }}</div>
        </template>
        <div class="font-ibm-light text-tertiary-400">
            <slot />
        </div>
    </accordion>
</template>
