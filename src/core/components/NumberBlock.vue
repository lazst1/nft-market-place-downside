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

const blockCss = computed(() => `flex justify-center items-center text-white border text-center font-bold border-black bg-${props.color}`)

</script>

<template>
    <div
        :class="[blockCss, color === 'primary-900' ? 'bg-primary-900' : color === 'secondary-800' ? 'bg-secondary-800' : '', size === 'small' ? 'h-7 sm:h-8.5 w-5 sm:w-6.5' : 'h-8.25 w-6.25 2xl:h-10.75 2xl:w-8']"
        :style="{ background: color === 'primary-900' ? 'url(images/components/green-count-bg.png)' : color === 'secondary-800' ? 'url(images/components/blue-count-bg.png)' : '', backgroundPosition: 'center', backgroundRepeat: 'repeat-x', backgroundColor: color === 'primary-900' ? '#19cb58' : color === 'secondary-800' ? '#2d7cde' : '' }"
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