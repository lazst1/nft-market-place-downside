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
        'py-1.25 transition cursor-pointer font-ibm-medium text-13 tracking-wider'
    ];
    if (props.disable) {
        base.push('text-white');
    } else if (props.active) {
        base.push('text-primary-900');
    } else {
        base.push('text-white hover:text-primary-900');
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
