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
    <div>
        <router-link :to="to" class="hover:text-white" @click="closeSidebar">
            <slot />
        </router-link>
    </div>
</template>
