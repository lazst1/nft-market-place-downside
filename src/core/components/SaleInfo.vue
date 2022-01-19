<script setup>
import Icon from './Icon.vue'
import { mdiThumbUp, mdiHelpCircle } from '@mdi/js'

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
    value: {
        type: String,
        default: "$0.4781"
    },
})

</script>

<template>
    <div class="grid grid-cols-2 gap-x-4 text-xxs items-baseline font-ibm-semi-bold leading-4.5 text-white">
        <div>
            Unique
        </div>
        <div>
            Transferred
            <font-awesome-icon :icon="['fas', 'question-circle']" class="text-st" />
        </div>
        <div class="text-primary-900 font-ibm-light">
            {{unique}}
        </div>
        <div class="text-primary-900 font-ibm-light">
            {{transferred}}
        </div>
        <div class="mt-3">
            ROI
            <font-awesome-icon :icon="['fas', 'question-circle']" class="text-st" />
        </div>
        <div>
            Value
            <font-awesome-icon :icon="['fas', 'question-circle']" class="text-st" />
        </div>
        <div class="text-primary-900 font-ibm-light">
            {{roi}}
            <div class="text-tertiary-400 font-ibm-light leading-3.5">
                {{roii}}
            </div>
        </div>
        <div class="text-primary-900 font-ibm-light">
            {{value}}
        </div>
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