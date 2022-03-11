<script setup>
import { roundTo } from '../utils'

defineProps({
    unique: {
        type: String,
        default: "1:20"
    },
    transferred: {
        type: String,
        default: "12/20"
    },
    roi: {
        type: String,
        default: "+4,780.73%"
    },
    roii: {
        type: String,
        default: "(47.81x)"
    },
    value: Number
})

</script>

<template>
    <div
        class="grid grid-cols-2 gap-x-4 text-xxs items-baseline font-ibm-semi-bold leading-4.5 text-white"
    >
        <div>Unique</div>
        <div class="w-max flex">
            Transferred
            <font-awesome-icon :icon="['fas', 'question-circle']" class="text-st ml-1" />
        </div>
        <div class="text-primary-900 font-ibm-light">{{ unique }}</div>
        <div class="text-primary-900 font-ibm-light">{{ transferred }}</div>
        <div class="flex mt-3">
            ROI
            <font-awesome-icon :icon="['fas', 'question-circle']" class="text-st ml-1" />
        </div>
        <div class="flex">
            Value
            <font-awesome-icon :icon="['fas', 'question-circle']" class="text-st ml-1" />
        </div>
        <div class="text-primary-900 font-ibm-light">
            {{ roi }}
            <div class="text-tertiary-400 font-ibm-light leading-3.5">{{ roii }}</div>
        </div>
        <div class="text-primary-900 font-ibm-light">${{ roundTo(value) }}</div>
    </div>
</template>

<style scoped>
.text-st {
    font-size: 9px;
}
.leading-3\.5 {
    line-height: 14px;
}
</style>