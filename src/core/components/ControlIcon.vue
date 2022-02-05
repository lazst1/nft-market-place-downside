<script setup>
import Icon from '@/core/components/Icon.vue'

defineProps({
  icon: {
    type: String,
    default: null
  },
  h: {
    type: String,
    default: null
  }
}
)
</script>

<template>
  <icon
    :path="icon"
    w="w-6"
    :h="h"
    :size="24"
    class="absolute top-0 left-0 z-10 pointer-events-none"
  />
</template>
