<script setup>
import Ribbon from '@/core/components/Ribbon.vue';
import { computed } from 'vue';

const props = defineProps({
    percent: {
        type: Number,
        default: 100
    },
    period: {
        type: Number,
        default: 365
    },
})

</script>

<template>
    <div to="detail" class="w-full max-w-xs">
        <div class="hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700">
            <div class="relative h-50 overflow-hidden p-6 bg-[url('@/assets/test.jpg')] bg-cover">
                <ribbon :percent="percent" :period="period" />
            </div>
            <div class="p-5">
                <slot />
            </div>
        </div>
    </div>
</template>
