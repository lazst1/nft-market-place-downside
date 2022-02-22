<template>
    <div
        class="w-13 h-7 flex items-center bg-tertiary-600 border-2 border-black p-0.5 duration-300 cursor-pointer"
        :aria-checked="modelValue"
        @click="toggle()"
    >
        <div
            class="bg-black w-5 h-full shadow-md transform duration-300"
            :class="{ 'translate-x-6': modelValue, 'bg-primary-900': modelValue }"
        ></div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})

const toggleValue = ref(props.modelValue);
const emit = defineEmits(['update:modelValue'])

function toggle() {
    toggleValue.value = !toggleValue.value;
    emit('update:modelValue', toggleValue.value)
}
</script>