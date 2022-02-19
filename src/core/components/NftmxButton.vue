<script setup>
import { computed } from 'vue'
import { getButtonColor, getButtonHoverColor } from '@/colors.js'
import Icon from '@/core/components/Icon.vue'

const props = defineProps({
  label: {
    type: [String, Number],
    default: null
  },
  iconBefore: {
    type: String,
    default: null
  },
  iconAfter: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'white'
  },
  as: {
    type: String,
    default: null
  },
  small: Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean
})

const is = computed(() => {
  if (props.as) {
    return props.as
  }

  if (props.to) {
    return 'router-link'
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const computedType = computed(() => {
  if (is.value === 'button') {
    return props.type ?? 'button'
  }

  return null
})

const labelClass = computed(() => props.small ? 'px-1' : 'px-2')

const componentClass = computed(() => {
  const base = [
    'relative',
    'inline-flex',
    'cursor-pointer',
    'justify-center',
    'items-center',
    'focus:outline-none',
    'duration-150',
    'transition',
    'text-xs',
    props.small ? 'p-2' : 'p-4',
    getButtonColor(props.color, props.outline, !props.disabled)
  ]

  if (props.disabled) {
    base.push('cursor-not-allowed', props.outline ? 'opacity-50' : 'opacity-70')
  }

  return base
})
const componentHoverCss = computed(() => getButtonHoverColor(props.color, props.outline, !props.disabled))

</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :to="to"
    :target="target"
    :disabled="disabled"
  >
    <div :class="[componentHoverCss, 'absolute w-full h-full inline-flex cursor-pointer justify-center items-center transition hover:opacity-0 pb-0.5']">
      <icon v-if="iconBefore" :path="iconBefore" />
      <span v-if="label" :class="labelClass">{{ label }}</span>
      <icon v-if="iconAfter" :path="iconAfter" color="primary-900" />
    </div>
    <icon v-if="iconBefore" :path="iconBefore" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
    <icon v-if="iconAfter" :path="iconAfter" color="primary-900" />
  </component>
</template>
