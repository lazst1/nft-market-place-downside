<script setup>
defineProps({
    to: String,
})
</script>

<template>
    <div class="font-ibm-semi-bold text-sm mt-2.5 text-white">
        <router-link class="hover:text-primary-700" :to="to">
            <slot />
        </router-link>
    </div>
</template>
