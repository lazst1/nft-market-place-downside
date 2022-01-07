<script setup>
import { computed } from 'vue'
import { mdiClose } from '@mdi/js'
import Overlay from './Overlay.vue'
import Icon from './Icon.vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  largeTitle: {
    type: String,
    default: null
  },
  button: {
    type: String,
    default: 'info'
  },
  buttonLabel: {
    type: String,
    default: 'Done'
  },
  hasCancel: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  width: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const confirmCancel = mode => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')
</script>

<template>
  <overlay
    v-show="value"
    @overlay-click="cancel"
  >
    <div :class="[width, 'text-white shadow-lg w-full max-h-modal z-50 bg-tertiary-900']">
      <div class="text-right text-xl p-5">
        <icon
          :path="mdiClose"
          :size="24"
          class="cursor-pointer"
          @click="cancel"
        />
      </div>
      <slot />
    </div>
  </overlay>
</template>
