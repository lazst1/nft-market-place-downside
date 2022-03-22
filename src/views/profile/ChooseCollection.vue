<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import { themeConfig } from '@/core/config';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';
import ListGroupAccordion from '@/core/components/accordion/ListGroupAccordion.vue';
import ListGroupItem from '@/core/components/basic/ListGroupItem.vue';
import ListGroupSubItem from '@/core/components/basic/ListGroupSubItem.vue';

const store = useStore();

const selected = ref('My Collection');

</script>

<template>
    <div
        v-if="store.state.app.windowWidth > themeConfig.sm"
        class="flex justify-between text-white font-ibm-medium text-sm pb-px mt-0.75 xl:mt-2.75 mb-5 xl:mb-7.75"
    >
        <div class="flex gap-14.5 ml-4 items-center">
            <list-group-item
                :active="selected === 'My Collection'"
                @click="selected = 'My Collection'"
            >My Collection</list-group-item>
            <list-group-item :active="selected === 'Ledger'" @click="selected = 'Ledger'">Ledger</list-group-item>
        </div>
    </div>
    <list-group-accordion
        v-if="store.state.app.windowWidth <= themeConfig.sm"
        :title="selected"
        active
        class="mt-1.75 mb-4.5"
    >
        <list-group-sub-item
            :active="selected === 'My Collection'"
            @click="selected = 'My Collection'"
        >My Collection</list-group-sub-item>
        <list-group-sub-item :active="selected === 'Ledger'" @click="selected = 'Ledger'">Ledger</list-group-sub-item>
    </list-group-accordion>
</template>
