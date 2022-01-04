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
    <div class="grid grid-cols-2 gap-x-4 text-xxs items-baseline leading-5 text-white py-6 h-36">
        <div>
            Unique
        </div>
        <div>
            Transferred
            <icon
                :path="mdiHelpCircle"
                w="w-3"
                h="h-3"
                color="white"
            />
        </div>
        <div class="text-primary-900">
            {{unique}}
        </div>
        <div class="text-primary-900">
            {{transferred}}
        </div>
        <div class="">
            ROI
            <icon
                :path="mdiHelpCircle"
                w="w-3"
                h="h-3"
                color="white"
            />
        </div>
        <div>
            Value
            <icon
                :path="mdiHelpCircle"
                w="w-3"
                h="h-3"
                color="white"
            />
        </div>
        <div class="text-primary-900">
            {{roi}}
        </div>
        <div class="text-primary-900">
            {{value}}
        </div>
        <div class="text-tertiary-400 -mt-2">
            {{roii}}
        </div>
    </div>
</template>