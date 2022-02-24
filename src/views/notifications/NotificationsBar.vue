<script setup>
import SidebarContainer from '@/core/container/SidebarContainer.vue';
import { useStore } from 'vuex';
import Notification from './components/Notification.vue';

const store = useStore();

function toggleNotificationBar() {
    store.commit('app/TOGGLE_NOTIFICATION_BAR', false);
}
</script>

<template>
    <sidebar-container>
        <div class="h-17 flex items-center justify-between cursor-default text-sm text-primary-900">
            See All
            <font-awesome-icon
                @click="toggleNotificationBar()"
                :icon="['fas', 'times']"
                class="text-white text-lg cursor-pointer"
            />
        </div>
        <notification v-for="i in 10" :key="i" />
    </sidebar-container>
</template>