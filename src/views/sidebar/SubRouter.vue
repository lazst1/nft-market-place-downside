<script setup>
defineProps({
    to: String,
})
</script>

<template>
    <div>
        <router-link :to="to" class="hover:text-white">
            <slot />
        </router-link>
    </div>
</template>
