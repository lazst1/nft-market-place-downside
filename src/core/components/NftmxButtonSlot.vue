<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    },
})
</script>

<template>
    <button
        :class="[active ? 'bg-primary-900 border-primary-900' : '', 'text-white hover:bg-primary-900 hover:border-primary-900 transition w-full text-left h-8.75 border border-black pl-4']"
    >
        <slot />
    </button>
</template>
