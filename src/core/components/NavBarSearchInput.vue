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
  },
  small: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <div v-if="small">
    <input class="text-xs text-white pl-12 py-2 hover:bg-tertiary-700 font-ibm placeholder-tertiary-500 w-full border-0 focus:outline-none bg-black" placeholder="Filter" />
    <font-awesome-icon :icon="['fas', 'search']" class="text-white cursor-pointer absolute top-3 left-4 z-10 pointer-events-none" />
  </div>
  <control
    v-if="!small"
    ref="root"
    ctrl-k-focus
    :placeholder="placeholder"
    transparent
    borderless
    :icon="mdiMagnify"
    :fontSize="fontSize"
  />
</template>
