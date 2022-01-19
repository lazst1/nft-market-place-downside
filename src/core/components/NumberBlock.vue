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

const blockCss = computed(() => `text-white border text-center font-bold border-black bg-${props.color} ${props.size === 'small' ? 'h-8.5 w-6.5' : 'h-10 w-8'}`)

</script>

<template>
    <div :class="[blockCss, color==='primary-900'?'bg-primary-900':color==='secondary-800'?'bg-secondary-800':'']">
        <slot />
    </div>
</template>

<style scoped>
    .h-8\.5 {
        height: 34px;
    }
    .w-6\.5 {
        width: 26px;
    }
</style>