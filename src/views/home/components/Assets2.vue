<script setup>
import AccordionContainer from '../container/AccordionContainer.vue';
import NftmxSaleCard from '@/core/components/NftmxSaleCard.vue';
import { useStore } from 'vuex';

const store = useStore();


</script>

<template>
    <accordion-container title="Digital Art">
        <template v-slot:content>
            <nftmx-sale-card
                v-for="(order, index) in store.state.orders.items"
                :data="order"
                :key="index"
            ></nftmx-sale-card>
        </template>
    </accordion-container>
</template>
