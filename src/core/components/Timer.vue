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
    <div class="flex gap-x-0.5 max-w-fit items-center text-white" :class="{'text-lg 2xl:text-2xl':size==='big'}" style="width: -webkit-fill-available">
        <number-block :color="color" :size="size">1</number-block>
        <number-block :color="color" :size="size">1</number-block><span class="-mx-px font-ibm-bold text-base">:</span>
        <number-block :color="color" :size="size">2</number-block>
        <number-block :color="color" :size="size">4</number-block><span class="-mx-px font-ibm-bold text-base">:</span>
        <number-block :color="color" :size="size">5</number-block>
        <number-block :color="color" :size="size">6</number-block><span class="-mx-px font-ibm-bold text-base">:</span>
        <number-block :color="color" :size="size">3</number-block>
        <number-block :color="color" :size="size">4</number-block>
    </div>
</template>