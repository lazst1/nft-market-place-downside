<script setup>import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    active: Boolean,
    to: String,
    disable: Boolean,
    sidebar: Boolean
})

const store = useStore();

const is = computed(() => {
    if (props.to) {
        return 'router-link'
    }

    return 'div'
})

const computedCss = computed(() => {
    const base = [
        'py-2 transition cursor-pointer font-ibm text-11 tracking-wider'
    ];
    if (props.disable) {
        base.push('text-tertiary-400');
    } else if (props.active) {
        base.push('text-white');
    } else {
        base.push('text-tertiary-400 hover:text-white');
    }

    return base
})

const closeSidebar = () => {
    if (props.sidebar) {
        store.commit('app/TOGGLE_MENU', false);
    }
}
</script>

<template>
    <component :is="is" :to="to" :class="computedCss" @click="closeSidebar">
        <slot />
    </component>
</template>
