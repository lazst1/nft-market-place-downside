<script setup>
import NumberBlock from './NumberBlock.vue';

defineProps({
    size: {
        type: String,
        default: "small"
    },
    color: {
        type: String,
        default: "tertiary-800"
    }
})

</script>

<template>
    <div class="flex w-full gap-x-0.5 justify-center" :class="{'text-2xl':size==='big'}">
        <number-block :color="color" :size="size">1</number-block>
        <number-block :color="color" :size="size">1</number-block>:
        <number-block :color="color" :size="size">1</number-block>
        <number-block :color="color" :size="size">1</number-block>:
        <number-block :color="color" :size="size">1</number-block>
        <number-block :color="color" :size="size">1</number-block>:
        <number-block :color="color" :size="size">1</number-block>
        <number-block :color="color" :size="size">1</number-block>
    </div>
</template>