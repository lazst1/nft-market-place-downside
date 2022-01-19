<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected">
    <div class="mt-1 relative">
      <ListboxButton :class="[small?'pl-0 py-2':'pl-6 py-4', 'relative w-full bg-black border border-black shadow-sm text-left cursor-pointer focus:outline-none']">
        <span class="flex items-center">
            <img v-if="selected.image" :src="selected.image" alt="" class="flex-shrink-0 h-7 w-7 rounded-full" />
            <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg v-if="!open" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
            </svg>
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions :class="[small?'pl-1':'pl-4', 'absolute z-10 w-full bg-black shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm']">
          <ListboxOption as="template" v-for="(content, index) in data" :key="index" :value="content" class="cursor-pointer select-none relative py-2 pl-2">
            <li>
              <div class="flex items-center">
                <img v-if="content.image" :src="content.image" alt="" class="flex-shrink-0 h-7 w-7 rounded-full" />
                <span :class="[small?'':'ml-3', 'block truncate']">
                  {{ content.name }}
                </span>
              </div>

              <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  },
  setup(props) {
    const data = props.data;
    const selected = ref(data[0]);

    return {
      data,
      selected,
    }
  },
}
</script>