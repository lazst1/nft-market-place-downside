<script setup>
import Ribbon from '@/core/components/Ribbon.vue';
import { computed } from 'vue';

const props = defineProps({
    url: {
        type: String,
        default: '/images/img6.png'
    },
    card_display_style: {
        type: String,
        default: 'contain'
    },
    percent: {
        type: Number,
        default: 0
    },
    period: {
        type: Number,
        default: 0
    },
    forMore: Boolean
})

</script>

<template>
    <div to="detail" class="w-full max-w-xs">
        <div class="hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700">
            <div class="bg-black">
                <div class="relative h-50 overflow-hidden p-6" :style="{background:'url('+url+')', backgroundRepeat:'no-repeat', backgroundSize: card_display_style, backgroundPosition: 'center'}">
                    <ribbon v-if="!forMore" :percent="percent" :period="period" />
                </div>
            </div>
            <div class="p-5">
                <slot />
            </div>
        </div>
    </div>
</template>
