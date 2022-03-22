<script setup>
import { computed } from 'vue';

const props = defineProps({
    value: Number
});

const badgeW = computed(() => (10 + props.value.toFixed().length * 5) + 'px');

</script>

<template>
    <span
        class="relative inline-block py-1 px-1 leading-none text-center whitespace-nowrap align-top font-ibm text-11 bg-primary-900 text-white rounded-full -mt-1.5 -ml-2"
    >
        {{ value }}
        <span
            class="animate-ping absolute h-4 rounded-full bg-primary-400 top-0 left-0 -z-10"
            :style="{ width: badgeW }"
        />
    </span>
</template>
