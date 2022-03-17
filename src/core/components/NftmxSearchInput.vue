<script setup>
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import { computed } from 'vue';

const props = defineProps({
    navbar: Boolean,
    placeholder: String,
    modelValue: Boolean
})

const emit = defineEmits(['update:modelValue']);
const filterActive = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value)
})

function clickFilter() {
    filterActive.value = !filterActive.value;
}

function onKeyDown(evt) {
    if (evt.keyCode === 13) {
        evt.preventDefault()
        return
    }
}
const store = useStore();

</script>

<template>
    <div
        :class="[navbar ? 'w-full' : 'w-full sm:w-68.5 border border-black px-6', 'flex justify-between items-center gap-4 h-12.5']"
    >
        <div class="flex items-center w-full">
            <font-awesome-icon
                :icon="['fas', 'search']"
                class="text-white text-lg pointer-events-none"
            />
            <input
                v-if="!navbar || store.state.app.windowWidth >= themeConfig.sm"
                class="text-white pl-6 py-2 font-ibm placeholder-tertiary-500 w-full border-0 focus:outline-none bg-tertiary-800"
                :placeholder="placeholder ? placeholder : 'Search'"
            />
            <textarea
                v-if="navbar && store.state.app.windowWidth < themeConfig.sm"
                @keydown="onKeyDown($event)"
                rows="2"
                class="text-sm leading-snug text-white pl-6 py-2 font-ibm-medium placeholder-tertiary-500 w-full border-0 outline-none focus:outline-none bg-tertiary-800 resize-none"
                :placeholder="placeholder ? placeholder : 'Search'"
            />
        </div>
        <font-awesome-icon
            @click="clickFilter"
            :icon="['fas', 'filter']"
            :class="[navbar ? 'text-lg' : 'text-sm', filterActive ? 'text-primary-900' : 'text-white', 'transition text-white hover:text-primary-900 cursor-pointer']"
        />
    </div>
</template>

<style scoped>
textarea {
    -webkit-box-shadow: none;
}
</style>
