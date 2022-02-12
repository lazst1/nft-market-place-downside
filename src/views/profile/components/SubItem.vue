<script setup>
defineProps({
    active: Boolean
})
</script>

<template>
    <div
        :class="[active ? 'text-white' : '', 'py-1 cursor-pointer hover:text-white font-ibm-medium']"
    >
        <slot />
    </div>
</template>
