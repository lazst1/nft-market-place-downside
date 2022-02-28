<script setup>
import NavBarSearch from '@/core/container/NavBarSearch.vue';

defineProps({
    searchAble: {
        type: Boolean,
        default: false
    },
    padding: {
        type: Boolean,
        default: true
    },
    footerExtended: Boolean
})
</script>

<template>
    <nav-bar-search v-if="searchAble"></nav-bar-search>
    <div :class="[padding?'px-5.5 sm:px-10 md:px-16 lg:px-22 py-4':'', footerExtended?'pb-fes sm:pb-fem lg:pb-fel 2xl:pb-fex':'pb-50', 'bg-tertiary-900 font-ibm cursor-default']">
        <div class="max-w-8xl mx-auto">
            <slot />
        </div>
    </div>
</template>
