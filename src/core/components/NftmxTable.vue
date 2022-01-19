<script setup>

defineProps({
    height: {
        type: String,
        default: '100%'
    }
})

</script>

<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden overflow-x-auto overflow-y-auto" :style="{height: height}">
                    <table class="min-w-full">
                        <slot />
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>