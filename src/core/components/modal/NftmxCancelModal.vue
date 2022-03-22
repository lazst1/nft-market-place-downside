<script setup>
import { computed, ref, watchEffect } from 'vue';
import Overlay from './Overlay.vue';
import NftmxButton from '@/core/components/basic/NftmxButton.vue';

const props = defineProps({
    modelValue: Boolean
});


const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value)
})

const confirmCancel = mode => {
    value.value = false
    emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')

watchEffect(() => {
    emit('update:modelValue', props.modelValue)
})

</script>

<template>
    <overlay v-show="value" @overlay-click="cancel">
        <div class="p-6 bg-tertiary-900 font-press text-white text-xl xl:text-2xl z-50 mx-4">
            <div>
                <font-awesome-icon
                    :icon="['fas', 'times']"
                    class="float-right cursor-pointer"
                    @click="cancel"
                />
            </div>
            <div class="pb-6 lg:p-12">
                <div class="mt-8.5 lg:mx-8 mb-12 text-center">Are you sure you cancel your investment?</div>
                <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 xl:gap-11">
                    <nftmx-button
                        color="gray"
                        label="NO"
                        class="font-press w-full text-sm xl:text-lg h-16.5"
                        @click="cancel"
                    />
                    <nftmx-button
                        color="red"
                        label="YES"
                        class="font-press w-full text-sm xl:text-lg h-16.5"
                        @click="confirm"
                    />
                </div>
            </div>
        </div>
    </overlay>
</template>
&