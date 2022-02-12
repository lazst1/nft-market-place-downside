<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import Accordion from '@/core/container/Accordion.vue';
import GroupItem from './components/GroupItem.vue';
import SubItem from './components/SubItem.vue';

const store = useStore();
const user = computed(() => store.getters['auth/getUser']);
const open = ref(false);
const handleClick = (value) => {
    open.value = value
}

const selectedGroup = ref({ name: 'Collected', count: user.nftData ? user.nftData.total : 0 });

</script>

<template>
    <div v-if="store.state.app.windowWidth > themeConfig.sm" class="overflow-auto mt-3">
        <div class="flex gap-2.5 py-4 w-max">
            <group-item
                :active="selectedGroup.name === 'Collected'"
                @click="selectedGroup = { name: 'Collected', count: user.nftData ? user.nftData.total : 0 }"
            >
                Collected
                <span class="font-ibm-light">{{ user.nftData ? user.nftData.total : 0 }}</span>
            </group-item>
            <group-item
                :active="selectedGroup.name === 'On Sale'"
                @click="selectedGroup = { name: 'On Sale', count: 0 }"
            >
                On Sale
                <span class="font-ibm-light">0</span>
            </group-item>
            <group-item
                :active="selectedGroup.name === 'Downside Protection'"
                @click="selectedGroup = { name: 'Downside Protection', count: 0 }"
            >
                Downside Protection
                <span class="font-ibm-light">0</span>
            </group-item>
            <group-item
                :active="selectedGroup.name === 'Favorited'"
                @click="selectedGroup = { name: 'Favorited', count: 0 }"
            >
                Favorited
                <span class="font-ibm-light">0</span>
            </group-item>
            <group-item
                :active="selectedGroup.name === 'Hidden'"
                @click="selectedGroup = { name: 'Hidden', count: 0 }"
            >
                Hidden
                <span class="font-ibm-light">0</span>
            </group-item>
            <group-item
                :active="selectedGroup.name === 'Activity'"
                @click="selectedGroup = { name: 'Activity', count: 0 }"
            >
                Activity
                <span class="font-ibm-light">0</span>
            </group-item>
            <group-item
                :active="selectedGroup.name === 'Offers'"
                @click="selectedGroup = { name: 'Offers', count: 0 }"
            >
                <span class="mr-4">Offers</span>
                <font-awesome-icon :icon="['fas', 'sort-down']" class="relative -top-0.75" />
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
                {{ selectedGroup.name }}
                <span
                    class="font-ibm-light"
                >{{ selectedGroup.name === 'Collected' ? selectedGroup.count || user.nftData ? user.nftData.total : 0 : 0 }}</span>
            </div>
        </template>
        <div class="font-ibm-light text-tertiary-400 text-description">
            <sub-item
                :active="selectedGroup.name === 'Collected'"
                @click="selectedGroup = { name: 'Collected', count: user.nftData ? user.nftData.total : 0 }"
            >
                Collected
                <span class="font-ibm-light">{{ user.nftData ? user.nftData.total : 0 }}</span>
            </sub-item>
            <sub-item
                :active="selectedGroup.name === 'On Sale'"
                @click="selectedGroup = { name: 'On Sale', count: 0 }"
            >
                On Sale
                <span class="font-ibm-light">0</span>
            </sub-item>
            <sub-item
                :active="selectedGroup.name === 'Downside Protection'"
                @click="selectedGroup = { name: 'Downside Protection', count: 0 }"
            >
                Downside Protection
                <span class="font-ibm-light">0</span>
            </sub-item>
            <sub-item
                :active="selectedGroup.name === 'Favorited'"
                @click="selectedGroup = { name: 'Favorited', count: 0 }"
            >
                Favorited
                <span class="font-ibm-light">0</span>
            </sub-item>
            <sub-item
                :active="selectedGroup.name === 'Hidden'"
                @click="selectedGroup = { name: 'Hidden', count: 0 }"
            >
                Hidden
                <span class="font-ibm-light">0</span>
            </sub-item>
            <sub-item
                :active="selectedGroup.name === 'Activity'"
                @click="selectedGroup = { name: 'Activity', count: 0 }"
            >
                Activity
                <span class="font-ibm-light">0</span>
            </sub-item>
        </div>
    </accordion>
</template>
