<script setup>
import { computed } from 'vue'
const props = defineProps({
    color: {
        type: String,
        default: 'tertiary-800'
    },
    size: {
        type: String,
        default: 'small'
    }
})

const blockCss = computed(() => `text-white border text-center font-bold border-black bg-${props.color} ${props.size === 'small' ? 'h-8 w-6' : 'h-10 w-8'}`)

</script>

<template>
    <div :class="[blockCss, color==='primary-900'?'bg-primary-900':color==='secondary-800'?'bg-secondary-800':'']">
        <slot />
    </div>
</template>