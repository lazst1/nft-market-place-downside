<script setup>
import Icon from '@/core/components/Icon.vue'
import { mdiHelpCircle } from '@mdi/js'

const props = defineProps({
})
</script>

<template>
        <slot />
        <icon
            class="-ml-2"
            :path="mdiHelpCircle"
            w="w-3"
            h="h-3"
            size="26"
            color="white"
        />
</template>
