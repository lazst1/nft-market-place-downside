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

const blockCss = computed(() => `text-white border text-center font-bold border-black bg-${props.color}`)

</script>

<template>
    <div
        :class="[blockCss, color === 'primary-900' ? 'bg-primary-900' : color === 'secondary-800' ? 'bg-secondary-800' : '', size === 'small' ? 'h-7 sm:h-8.5 w-5 sm:w-6.5 sm:pt-0.5' : 'h-10 w-8 pt-0.5']"
    >
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