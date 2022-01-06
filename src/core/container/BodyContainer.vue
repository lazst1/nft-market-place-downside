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
    <div :class="[searchAble?'mt-40':'mt-16', padding?'px-2 sm:px-8 md:px-16 lg:px-24 py-14':'' , 'bg-tertiary-900 font-ibm']">
        <div class="max-w-8xl mx-auto">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.max-w-8xl {
    max-width: 1920px;
}
</style>
