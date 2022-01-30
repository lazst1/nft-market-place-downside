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
    }
})
</script>

<template>
    <nav-bar-search v-if="searchAble"></nav-bar-search>
    <div :class="[padding?'px-5.5 sm:px-10 md:px-16 lg:px-22 py-4':'' , 'bg-tertiary-900 font-ibm']">
        <div class="max-w-8xl mx-auto">
            <slot />
        </div>
    </div>
</template>
