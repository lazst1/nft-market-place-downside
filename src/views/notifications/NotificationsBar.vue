<script setup>
import SidebarContainer from '@/core/container/SidebarContainer.vue';
import Notification from './components/Notification.vue';

</script>

<template>
    <sidebar-container>
        <notification v-for="i in 10" :key="i" />
    </sidebar-container>
</template>