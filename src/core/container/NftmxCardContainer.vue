<script setup>
import Ribbon from '@/core/components/Ribbon.vue';
import { computed } from 'vue';

const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    assetContractAddress: {
        type: String,
        required: true
    },
    tokenId: {
        type: String,
        required: true
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
    <router-link :to="{name: 'asset', params: { assetContractAddress: assetContractAddress, tokenId: tokenId}}" class="w-full">
        <div class="hover:shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700">
            <div class="bg-black">
                <div class="relative w-full pt-65per overflow-hidden p-6" :style="{background:'url('+image+')', backgroundRepeat:'no-repeat', backgroundSize: card_display_style, backgroundPosition: 'center'}">
                    <ribbon v-if="!forMore" :percent="percent" :period="period" />
                </div>
            </div>
            <div class="p-5">
                <slot />
            </div>
        </div>
    </router-link>
</template>
