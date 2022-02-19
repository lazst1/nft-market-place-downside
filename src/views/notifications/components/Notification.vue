<script setup>
defineProps({
    item: {
        type: Object,
        default: {
            img: '/images/item1-45x.png',
            name: 'Miss Atrbreellllll',
            description: 'Sold for 0.0005ETH',
            soldTime: '7/12/2021, 4:21 AM'
        }
    }
})


</script>

<template>
    <div
        class="flex items-center font-ibm text-sm text-white border-b border-tertiary-800 mr-8 pt-4.75 pb-7"
    >
        <div :style="{background: 'url( '+ item.img + ' )', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}" class="w-12.75 h-13 mr-4 -ml-0.5" />
        <div class="truncate">
            <div class="truncate">{{ item.name }}</div>
            <div class="truncate text-xxs font-ibm-bold text-tertiary-500 mt-2">{{ item.description }}</div>
            <div class="truncate text-xxs text-tertiary-500 mt-1">{{ item.soldTime }}</div>
        </div>
    </div>
</template>
