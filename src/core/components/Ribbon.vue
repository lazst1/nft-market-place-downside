<script setup>

defineProps({
    percent: {
        type: Number,
        require: true
    },
    period: {
        type: Number,
        require: true
    }
})

</script>

<template>
    <div class="ribbon bg-primary-700 text-sm text-white whitespace-no-wrap px-4 py-2 font-ibm">
        <div class="-ml-6 -mb-1 text-sm text-center">{{percent}}% / {{period}}</div>
        <div class="pl-3 text-xss text-left">Downside Protection</div>
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
    .text-xss {
        font-size: 11px;
    }
</style>