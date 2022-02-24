<script setup>
import { exchangeRate } from "../../../core/config";
import { formatDate, formatOrderStatus } from "../../../core/utils";

const props = defineProps({
    log: {
        type: Object,
        default: {
            img: '/images/item1-45x.png',
            tokenName: 'Miss Atrbreellllll',
            description: 'Sold for 0.0005ETH',
            soldTime: '7/12/2021, 4:21 AM'
        }
    }
});

const orderLogs = {
    name: props.log.tokenName,
    img: '/images/item1-45x.png',
    description: formatOrderStatus(props.log.orderStatus) + ' for ' + props.log.tokenPrice / exchangeRate + ' BNB',
    soldTime: formatDate(parseInt(props.log.soldTime) * 1000)
}


</script>

<template>
    <div
        class="flex items-center font-ibm text-sm text-white border-b border-tertiary-800 mr-8 pt-4.75 pb-7"
    >
        <div
            :style="{ background: 'url( ' + orderLogs.img + ' )', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }"
            class="w-12.75 h-13 mr-4 -ml-0.5"
        />
        <div class="truncate">
            <div class="truncate">{{ orderLogs.name }}</div>
            <div
                class="truncate text-xxs font-ibm-bold text-tertiary-500 mt-2"
            >{{ orderLogs.description }}</div>
            <div class="truncate text-xxs text-tertiary-500 mt-1">{{ orderLogs.soldTime }}</div>
        </div>
    </div>
</template>
