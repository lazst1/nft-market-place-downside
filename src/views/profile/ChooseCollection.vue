<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import Accordion from '@/core/container/Accordion.vue';
import GroupItem from './components/GroupItem.vue';
import SubItem from './components/SubItem.vue';
import NftmxButton from '@/core/components/NftmxButton.vue';

const store = useStore();

const open = ref(false);
const handleClick = (value) => {
    open.value = value
}

const selected = ref('My Collection');

</script>

<template>
    <div
        v-if="store.state.app.windowWidth > themeConfig.sm"
        class="flex justify-between text-white font-ibm-semi-bold text-sm pb-px md:mt-4 md:mb-9 gap-x-7"
    >
        <div class="flex items-center">
            <group-item
                :active="selected === 'My Collection'"
                @click="selected = 'My Collection'"
            >My Collection</group-item>
            <group-item :active="selected === 'Ledger'" @click="selected = 'Ledger'">Ledger</group-item>
        </div>
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
            <div class="text-primary-900 font-ibm-light text-description pt-3 mb-1.5">{{ selected }}</div>
        </template>
        <div class="font-ibm-light text-tertiary-400 text-description">
            <sub-item
                :active="selected === 'My Collection'"
                @click="selected = 'My Collection'"
            >My Collection</sub-item>
            <sub-item :active="selected === 'Ledger'" @click="selected = 'Ledger'">Ledger</sub-item>
        </div>
    </accordion>
</template>
