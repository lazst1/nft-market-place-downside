<template>
    <accordion :border="false">
        <template v-slot:caption>
            <div class="flex items-center w-full">
                <div class="flex-1 text-sm font-press py-4 mr-24">
                    Trending Collections
                </div>
                <nftmx-select class="font-ibm font-thin w-full max-w-lg text-sm" :data="items" small>
                </nftmx-select>
            </div>
        </template>
        <div class="px-6 pt-2">
            <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                <nftmx-sale-card :auction="true"></nftmx-sale-card>
                <nftmx-sale-card></nftmx-sale-card>
                <nftmx-sale-card :syndication="false"></nftmx-sale-card>
                <nftmx-sale-card v-for="index in 2" :key="index" :bought="true"></nftmx-sale-card>
            </div>
        </div>
    </accordion>
</template>

<script>
import Accordion from '@/core/container/Accordion.vue';


export default {
    setup() {
        
    },
}
</script>