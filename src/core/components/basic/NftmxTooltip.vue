<template>
  <div class="tooltip-box" @mouseover="tooltip = true" @mouseout="tooltip = false">
    <slot />
    <div v-if="tooltip"
      class="tooltip absolute bg-black text-white font-ibm-light leading-5 z-50 text-11 shadow-[0_-2px_15px_-2px_rgb(0_0_0_/_0.1),_0_2px_6px_-4px_rgb(0_0_0_/_0.1);] shadow-primary-900 p-4 w-96 right-1 top-3"
    >
      {{text}}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  }
})

const tooltip = ref(false)

</script>

<style scoped>
.tooltip-box { 
  position: relative;
  display: inline-block;
}

.tooltip-box:hover .tooltip{
  opacity: 1;
}

.tooltip { 
  opacity: 0;
}

</style>
