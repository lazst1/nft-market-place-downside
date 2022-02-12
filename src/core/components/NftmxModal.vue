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
  big: Boolean,
  secondary: Boolean
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
  <overlay v-show="value" @overlay-click="cancel">
    <div class="h-full z-50 overflow-auto modal">
      <div class="h-1/6" />
      <div :class="[big ? '3xl:w-modal-big' : secondary ? 'w-test' : 'w-full', 'bg-tertiary-900 text-white']">
        <div class="text-right text-xl p-5">
          <icon :path="mdiClose" :size="24" class="cursor-pointer" @click="cancel" />
        </div>
        <slot />
      </div>
    </div>
  </overlay>
</template>

<style scoped>
.w-test {
  width: 847px;
}
</style>
