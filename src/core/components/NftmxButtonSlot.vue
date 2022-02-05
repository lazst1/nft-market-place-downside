<script setup>
import { getButtonColor } from '@/colors.js'

const props = defineProps({
    size: {
        type: String,
        default: 'small'
    },
    active: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: null
    },
    align: {
        type: String,
        default: null
    },
    outline: Boolean,
    color: {
        type: String,
        default: 'primary'
    },
    disabled: Boolean
})
    
const buttonColor = getButtonColor(props.color, props.outline, !props.disabled)

</script>

<template>
    <button :class="[active?'bg-primary-900':'', width?width:'w-full', align?align:'text-center', size==='small'?'h-9':'h-13.5', outline?'border border-black':'', buttonColor, 'text-white']">
        <slot />
    </button>
</template>
