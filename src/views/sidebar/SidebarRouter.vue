<script setup>
import { useStore } from 'vuex'

defineProps({
    to: String,
})

const store = useStore();
function closeSidebar(params) {
  store.commit('app/TOGGLE_SIDEBAR', false)
}
</script>

<template>
    <div class="font-ibm-semi-bold text-sm mt-2.5 text-white">
        <router-link class="hover:text-primary-700" :to="to" @click="closeSidebar">
            <slot />
        </router-link>
    </div>
</template>
