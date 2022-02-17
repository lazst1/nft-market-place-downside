<script setup>
defineProps({
    modelValue: String,
    placeholder: String,
    iconGroup: String,
    icon: String,
    readonly: Boolean
})
</script>

<template>
    <div v-if="icon" class="absolute bg-black w-13 h-13 flex justify-center items-center">
        <font-awesome-icon :icon="[iconGroup, icon]" class="text-white text-base" />
    </div>
    <input
        v-model="modelValue"
        :class="[icon ? 'pl-17.5' : 'pl-4.75', 'h-13.5 focus:outline-none border-2 border-black text-white placeholder-tertiary-500 bg-tertiary-700 w-full font-ibm text-sm']"
        :placeholder="placeholder"
        :readonly="readonly"
    />
</template>
