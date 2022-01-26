<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import Accordion from '@/core/container/Accordion.vue';

const store = useStore();
const user = computed(() => store.getters['auth/getUser']);
</script>

<template>
    <div v-if="store.state.app.windowWidth > themeConfig.sm" class="overflow-auto">
        <div class="flex gap-2.5 py-4 w-max">
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                Collected
                <span class="font-ibm-light">{{ user.nftData ? user.nftData.total : 0 }}</span>
            </div>
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                On Sale
                <span class="font-ibm-light">0</span>
            </div>
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                Downside Protection
                <span class="font-ibm-light">0</span>
            </div>
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                Favorited
                <span class="font-ibm-light">0</span>
            </div>
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                Hidden
                <span class="font-ibm-light">0</span>
            </div>
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                Activity
                <span class="font-ibm-light">0</span>
            </div>
            <div class="mx-4 cursor-pointer hover:text-primary-700">
                <span class="mr-4">Offers</span>
                <font-awesome-icon :icon="['fas', 'sort-down']" class="relative -top-0.75" />
            </div>
        </div>
    </div>
    <accordion
        v-if="store.state.app.windowWidth <= themeConfig.sm"
        :border="false"
        :sidebar="true"
        class="-mt-px"
    >
        <template v-slot:caption>
            <div class="text-primary-900 font-ibm-light text-description pt-3 mb-1.5">
                Collected
                <span class="font-ibm-light">{{ user.nftData ? user.nftData.total : 0 }}</span>
            </div>
        </template>
        <div class="font-ibm-light text-tertiary-400 text-description">
            <div class="cursor-pointer text-white hover:text-primary-900">
                Collected
                <span class="font-ibm-light">{{ user.nftData ? user.nftData.total : 0 }}</span>
            </div>
            <div class="cursor-pointer text-white hover:text-primary-900">
                On Sale
                <span class="font-ibm-light">0</span>
            </div>
            <div class="cursor-pointer text-white hover:text-primary-900">
                Downside Protection
                <span class="font-ibm-light">0</span>
            </div>
            <div class="cursor-pointer text-white hover:text-primary-900">
                Favorited
                <span class="font-ibm-light">0</span>
            </div>
            <div class="cursor-pointer text-white hover:text-primary-900">
                Hidden
                <span class="font-ibm-light">0</span>
            </div>
            <div class="cursor-pointer text-white hover:text-primary-900">
                Activity
                <span class="font-ibm-light">0</span>
            </div>
        </div>
    </accordion>
</template>
