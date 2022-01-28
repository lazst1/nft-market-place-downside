<script setup>
import { computed } from 'vue';

const props = defineProps({
    accordion: {
        type: Boolean,
        default: true
    },
    border: {
        type: Boolean,
        default: true
    },
    sidebar: {
        type: Boolean,
        default: false
    },
    bIcon: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: Boolean,
        default: true
    },
})

const emit = defineEmits(['handle-click'])

const handleClick = () => {
    console.log(props.modelValue, props.accordion ? !props.modelValue : true)
    emit('handle-click', props.accordion ? !props.modelValue : true)
}

</script>


<template>
    <div :class="[border ? 'border border-black bg-tertiary-800' : '', 'font-ibm']">
        <div
            :class="[border ? 'border-b border-black' : '', sidebar ? '' : 'px-5', 'flex text-2xl text-white font-bold']"
        >
            <div class="flex-1">
                <slot name="caption"></slot>
            </div>
            <div v-if="accordion" class="self-center cursor-pointer" @click="handleClick">
                <font-awesome-icon
                    v-if="!modelValue"
                    :icon="['fas', 'sort-down']"
                    :class="[bIcon ? 'text-2xl' : 'text-sm', '-translate-y-1/3']"
                />
                <font-awesome-icon
                    v-if="modelValue"
                    :icon="['fas', 'sort-up']"
                    :class="[bIcon ? 'text-2xl' : 'text-sm']"
                />
            </div>
        </div>
        <div v-if="modelValue">
            <slot />
        </div>
    </div>
</template>