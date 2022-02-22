<script setup>
import DetailButton from '@/core/components/DetailButton.vue';
import Ribbon from '@/core/components/Ribbon.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import Accordion from '../../core/container/Accordion.vue';
import { assetDetailTabs } from '@/core/config'
const props = defineProps({
    percent: {
        type: Number,
        default: 100
    },
    period: {
        type: Number,
        default: 365
    },
})

const store = useStore();
const open = ref(false);
const tab = ref('Please select');

const handleClick = (value) => {
    open.value = value
}
const selectTab = (value) => {
    tab.value = value;
}

</script>

<template>
    <div
        class="relative overflow-hidden p-6 w-full pt-70per"
        :style="{ background: 'url(' + '/images/img10.png' + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', backgroundColor: '#222222' }"
    >
        <ribbon :percent="percent" :period="period" />
    </div>
    <div class="mt-4 mb-8 items-center">
        <div class="relative flex w-full items-center text-sm font-ibm">
            <div v-if="store.state.app.windowWidth >= 1920" class="flex-1 flex px-5">
                <detail-button
                    v-for="(name, i) in assetDetailTabs"
                    :key="i"
                    @click="selectTab(name === tab ? 'Please select' : name)"
                    :active="name === tab"
                >{{ name }}</detail-button>
            </div>
            <accordion
                v-if="store.state.app.windowWidth < 1920"
                :border="false"
                :sidebar="true"
                v-model="open"
                @handle-click="handleClick"
                class="absolute top-0 width"
            >
                <template v-slot:caption>
                    <detail-button class="text-sm pt-1.5 font-ibm-light">{{ tab }}</detail-button>
                </template>
                <detail-button
                    v-for="(name, i) in assetDetailTabs"
                    :key="i"
                    @click="selectTab(name === tab ? 'Please select' : name)"
                    :active="name === tab"
                >{{ name }}</detail-button>
            </accordion>
            <div class="flex-1"></div>
            <div class="flex object-right">
                <div
                    class="border border-black w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'undo']" />
                </div>
                <div
                    class="border-y border-r border-black w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                </div>
                <div
                    class="border-y border-black w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'share-alt']" />
                </div>
                <div
                    class="border border-black w-8 h-8 px-2.25 pt-1.25 hover:bg-primary-900 bg-tertiary-800 cursor-pointer"
                >
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.width {
    width: calc(100% - theme("spacing[40]"));
}
</style>
