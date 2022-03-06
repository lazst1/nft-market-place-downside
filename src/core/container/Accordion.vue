<script setup>
import { computed, onMounted, ref } from 'vue';

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
const accordion = ref(null);
const aHeight = ref(0);

const handleClick = () => {
    emit('handle-click', props.accordion ? !props.modelValue : true)
}

onMounted(() => {
    aHeight.value = accordion.value.scrollHeight;
})

</script>


<template>
    <div :class="[border ? 'border border-black bg-tertiary-800' : '', 'font-ibm']">
        <div
            @click="handleClick"
            :class="[border ? 'border-b border-black' : '', sidebar ? '' : 'px-5', 'flex text-2xl text-white font-bold cursor-pointer']"
        >
            <div class="flex-1">
                <slot name="caption"></slot>
            </div>
            <div v-if="accordion" class="self-center cursor-pointer">
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
        <div
            ref="accordion"
            class="transition-all overflow-hidden"
            :style="{ maxHeight: modelValue ? aHeight + 'px' : '0' }"
        >
            <slot />
        </div>
    </div>
</template>