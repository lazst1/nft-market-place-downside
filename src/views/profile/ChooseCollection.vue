<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import Accordion from '@/core/container/Accordion.vue';

const store = useStore();

const open = ref(false);
const handleClick = (value) => {
    console.log(value)
    open.value = value
}
</script>

<template>
    <div
        v-if="store.state.app.windowWidth > themeConfig.sm"
        class="flex text-white font-ibm-semi-bold text-sm pb-4.5 md:mt-4"
    >
        <div class="mx-4 cursor-pointer hover:text-primary-700">My Collection</div>
        <div class="ml-10 cursor-pointer hover:text-primary-700">Ledger</div>
    </div>
    <accordion
        v-if="store.state.app.windowWidth <= themeConfig.sm"
        :border="false"
        :sidebar="true"
        class="-mt-px"
        v-model="open"
        @handle-click="handleClick"
    >
        <template v-slot:caption>
            <div class="text-primary-900 font-ibm-light text-description pt-3 mb-1.5">My Collection</div>
        </template>
        <div class="font-ibm-light text-tertiary-400 text-description">
            <div class="cursor-pointer text-white hover:text-primary-900">My Collection</div>
            <div class="cursor-pointer text-white hover:text-primary-900">Ledger</div>
        </div>
    </accordion>
</template>
