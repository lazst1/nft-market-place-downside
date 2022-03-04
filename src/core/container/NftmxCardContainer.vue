<script setup>
import Ribbon from '@/core/components/Ribbon.vue';
import { computed, ref } from 'vue';

const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    approved: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['approve'])

const tokenImage = ref(props.image || 'images/img10.png')

</script>

<template>
    <div class="w-full relative">
        <div
            class="transition hover:shadow-[0_0px_12px_0px_rgb(0_0_0_/_0.1),_0_0px_0px_0px_rgb(0_0_0_/_0.1);] hover:shadow-primary-700"
        >
            <div class="bg-black">
                <div
                    class="relative w-full pt-65per overflow-hidden p-6"
                    :style="{ background: 'url(' + tokenImage + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }"
                />
            </div>
            <div class="p-5">
                <slot />
            </div>
        </div>
        <div
            v-if="!approved"
            class="absolute top-0 transition w-full h-full bg-black bg-opacity-80 hover:bg-primary-900 hover:opacity-80 text-primary-400 hover:text-white hover:cursor-pointer flex justify-center items-center"
            @click="emit('approve')"
        >
            <div class="w-fit font-press text-xs">Approve To List</div>
        </div>
    </div>
</template>
