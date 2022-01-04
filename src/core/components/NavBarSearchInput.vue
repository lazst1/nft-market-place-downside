<script setup>
import Control from '@/core/components/Control.vue'
import { mdiMagnify } from '@mdi/js'

defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  fontSize: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <control
    ref="root"
    ctrl-k-focus
    :placeholder="placeholder"
    transparent
    borderless
    :icon="mdiMagnify"
    :fontSize="fontSize"
  />
</template>
