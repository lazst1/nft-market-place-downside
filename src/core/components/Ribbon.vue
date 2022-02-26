<script setup>

defineProps({
    percent: {
        type: Number,
        require: true
    },
    period: {
        type: Number,
        require: true
    },
    big: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div
        :class="[big ? 'w-60 h-16.5 -ml-16.5 mt-5.5' : 'w-50 h-12.5 -ml-14 mt-4',
        'absolute top-0 left-0 -rotate-45 bg-primary-700 text-white whitespace-no-wrap px-4 font-ibm-semi-bold bg-opacity-50 flex flex-col items-center justify-center']"
    >
        <div :class="[big ? 'text-lg' : 'text-sm']">{{ percent }}% / {{ period }}</div>
        <div :class="[big?'text-xs':'text-10']">Downside Protection</div>
    </div>
</template>

<style scoped>
.ribbon {
    position: absolute;
    top: 0;
    left: 0px;
    width: 200px;
    height: 50px;
    margin-left: -50px;
    margin-top: 10px;
    transform: rotate(-45deg);
}
</style>