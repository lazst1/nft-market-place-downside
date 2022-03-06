<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import Accordion from '@/core/container/Accordion.vue';
import GroupItem from './components/GroupItem.vue';
import SubItem from './components/SubItem.vue';

const props = defineProps({
    selectedGroup: {
        type: Object,
        default: { name: 'Collected', count: 0 }
    }
})

const emit = defineEmits(['select-group', 'select-tab']);

const store = useStore();
const open = ref(false);
const selectedTab = ref('ALL');

const handleClick = (value) => {
    open.value = value
}

const computedGroup = computed({
    get: () => props.selectedGroup
})

const selectGroup = (value) => {
    emit('select-group', value);
}

const selectTab = (value) => {
    selectedTab.value = value;
    emit('select-tab', value);
}
</script>

<template>
    <div v-if="store.state.app.windowWidth > themeConfig.sm" class="overflow-auto mt-3">
        <div class="flex gap-2.5 py-4 w-max">
            <group-item
                :active="computedGroup.key === 'COLLECTED'"
                @click="selectGroup('COLLECTED')"
            >
                Collected
                <span class="font-ibm-light">{{ store.state.collectedNFTs.total }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'ON_SALE'" @click="selectGroup('ON_SALE')">
                On Sale
                <span class="font-ibm-light">{{ store.state.myOrders.onSale.meta.totalItems }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'DOWNSIDE'" @click="selectGroup('DOWNSIDE')">
                Downside Protection
                <span class="font-ibm-light">{{ store.state.myOrders.downside.all.meta.totalItems }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'FAVORITE'" @click="selectGroup('FAVORITE')">
                Favorited
                <span class="font-ibm-light">{{ 0 }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'HIDDEN'" @click="selectGroup('HIDDEN')">
                Hidden
                <span class="font-ibm-light">{{ 0 }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'ACTIVITY'" @click="selectGroup('ACTIVITY')">
                Activity
                <span class="font-ibm-light">{{ 0 }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'Offers'" @click="selectGroup('OFFERS')">
                <span class="mr-4">Offers</span>
                <font-awesome-icon :icon="['fas', 'sort-down']" class="relative -top-0.75" />
            </group-item>
        </div>
        <div class="flex gap-2.5 py-4 w-max" v-if="computedGroup.key === 'DOWNSIDE'">
            <group-item
                :active="selectedTab === 'ALL'"
                @click="selectTab('ALL')"
            >
                All
                <span class="font-ibm-light">{{ store.state.myOrders.downside.all.meta.totalItems }}</span>
            </group-item>
            <group-item
                :active="selectedTab === 'BOUGHT'"
                @click="selectTab('BOUGHT')"
            >
                Bought
                <span class="font-ibm-light">{{ store.state.myOrders.downside.bought.meta.totalItems }}</span>
            </group-item>
            <group-item
                :active="selectedTab === 'SOLD'"
                @click="selectTab('SOLD')"
            >
                Sold
                <span class="font-ibm-light">{{ store.state.myOrders.downside.sold.meta.totalItems }}</span>
            </group-item>
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
            <div class="text-primary-900 font-ibm-light text-description pt-3 mb-1.5">
                {{ computedGroup.name }}
                <span class="font-ibm-light">{{ computedGroup.count }}</span>
            </div>
        </template>
        <div class="font-ibm-light text-tertiary-400 text-description">
            <sub-item :active="computedGroup.key === 'COLLECTED'" @click="selectGroup('COLLECTED')">
                Collected
                <span class="font-ibm-light">{{ store.state.collectedNFTs.total }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'ON_SALE'" @click="selectGroup('ON_SALE')">
                On Sale
                <span class="font-ibm-light">{{ store.state.myOrders.onSale.meta.totalItems }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'DOWNSIDE'" @click="selectGroup('DOWNSIDE')">
                Downside Protection
                <span class="font-ibm-light">{{ store.state.myOrders.downside.all.meta.totalItems }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'FAVORITE'" @click="selectGroup('FAVORITE')">
                Favorited
                <span class="font-ibm-light">{{ 0 }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'HIDDEN'" @click="selectGroup('HIDDEN')">
                Hidden
                <span class="font-ibm-light">{{ 0 }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'ACTIVITY'" @click="selectGroup('ACTIVITY')">
                Activity
                <span class="font-ibm-light">{{ 0 }}</span>
            </sub-item>
        </div>
    </accordion>
</template>
