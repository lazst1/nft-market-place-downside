<script setup>
import NavBarSearch from '@/core/container/NavBarSearch.vue';

defineProps({
    searchAble: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <nav-bar-search v-if="searchAble"></nav-bar-search>
    <div class="bg-tertiary-900 px-2 sm:px-8 md:px-16 lg:px-24 py-14 font-ibm" :class="{'mt-40':searchAble, 'mt-16':!searchAble}">
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
