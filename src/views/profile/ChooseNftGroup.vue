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
    },
    counts: Object
})

const emit = defineEmits(['select-group', 'select-tab']);

const store = useStore();
const open = ref(false);
const selectedTab = ref('ALL');
const itemCounts = computed(() => props.counts);

const handleClick = (value) => {
    open.value = value
}

const computedGroup = computed({
    get: () => props.selectedGroup
});
const computedCount = computed(() => {
    switch (props.selectedGroup.key) {
        case 'COLLECTED':
            return itemCounts.value.collected;
        case 'ON_SALE':
            return itemCounts.value.onSale;
        case 'DOWNSIDE':
            return itemCounts.value.downside;
        case 'FAVORITE':
            return itemCounts.value.favorite;
        case 'HIDDEN':
            return itemCounts.value.hidden;
        case 'ACTIVITY':
            return itemCounts.value.activity;
        default:
            break;
    }
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
                <span class="font-ibm-light">{{ itemCounts.collected }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'ON_SALE'" @click="selectGroup('ON_SALE')">
                On Sale
                <span class="font-ibm-light">{{ itemCounts.onSale }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'DOWNSIDE'" @click="selectGroup('DOWNSIDE')">
                Downside Protection
                <span class="font-ibm-light">{{ itemCounts.downside }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'FAVORITE'" @click="selectGroup('FAVORITE')">
                Favorite
                <span class="font-ibm-light">{{ itemCounts.favorite }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'HIDDEN'" @click="selectGroup('HIDDEN')">
                Hidden
                <span class="font-ibm-light">{{ itemCounts.hidden }}</span>
            </group-item>
            <group-item :active="computedGroup.key === 'ACTIVITY'" @click="selectGroup('ACTIVITY')">
                Activity
                <span class="font-ibm-light">{{ itemCounts.activity }}</span>
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
                <span class="font-ibm-light">{{ itemCounts.downside }}</span>
            </group-item>
            <group-item
                :active="selectedTab === 'BOUGHT'"
                @click="selectTab('BOUGHT')"
            >
                Bought
                <span class="font-ibm-light">{{ itemCounts.downsideBought }}</span>
            </group-item>
            <group-item
                :active="selectedTab === 'SOLD'"
                @click="selectTab('SOLD')"
            >
                Sold
                <span class="font-ibm-light">{{ itemCounts.downsideSold }}</span>
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
                <span class="font-ibm-light">{{ computedCount }}</span>
            </div>
        </template>
        <div class="font-ibm-light text-tertiary-400 text-description">
            <sub-item :active="computedGroup.key === 'COLLECTED'" @click="selectGroup('COLLECTED')">
                Collected
                <span class="font-ibm-light">{{ itemCounts.collected }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'ON_SALE'" @click="selectGroup('ON_SALE')">
                On Sale
                <span class="font-ibm-light">{{ itemCounts.onSale }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'DOWNSIDE'" @click="selectGroup('DOWNSIDE')">
                Downside Protection
                <span class="font-ibm-light">{{ itemCounts.downside }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'FAVORITE'" @click="selectGroup('FAVORITE')">
                Favorite
                <span class="font-ibm-light">{{ itemCounts.favorite }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'HIDDEN'" @click="selectGroup('HIDDEN')">
                Hidden
                <span class="font-ibm-light">{{ itemCounts.hidden }}</span>
            </sub-item>
            <sub-item :active="computedGroup.key === 'ACTIVITY'" @click="selectGroup('ACTIVITY')">
                Activity
                <span class="font-ibm-light">{{ itemCounts.activity }}</span>
            </sub-item>
        </div>
    </accordion>
</template>
