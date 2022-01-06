<script setup>
import NumberBlock from './NumberBlock.vue';

const props = defineProps({
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: "primary"
    }
})

const integer = parseInt(props.price);
const _dLength = props.price.toString().length - integer.toString().length - 1;
const decimal = _dLength > 0 ? (props.price - integer).toFixed(_dLength) : null;


</script>

<template>
    <div class="flex baseline w-fit gap-x-0.5">
        <number-block :color="color==='primary'?'primary-900':'secondary-800'">$</number-block>
        <div v-for="(l, index) in integer.toString()" :key="index" class="flex">
            {{index>0&&(integer.toString().length-index)%3===0 ? ',' : null}}
            <number-block :color="color==='primary'?'primary-900':'secondary-800'">{{l}}</number-block>
        </div>
        <span v-if="decimal">.</span>
        <div v-for="(l, index) in decimal" :key="index" class="flex">
            <number-block v-if="index>1" :color="color==='primary'?'primary-900':'secondary-800'">{{l}}</number-block>
        </div>
    </div>
</template>