<script>

export default {
    props: {
        caption: {
            type: String,
            required: true
        },
        accordion: {
            type: Boolean,
            default: true
        },
    },
    setup(props) {
        const caption = props.caption;
        const accordion = props.accordion;

        return {
            caption,
            accordion
        }
    },
    data () {
        return {
            open: true
        }
    },
    methods: {
        clickMenu() {
            this.open = this.accordion ? !this.open : true;
        }
    },
}
</script>


<template>
    <div class="bg-tertiary-800 font-ibm border border-black">
        <div class="flex px-5 text-xl text-white border-b border-black font-bold">
            <div class="flex-1">
                <slot name="caption"></slot>
            </div>
            <div v-if="accordion" class="self-center cursor-pointer" @click="clickMenu">
                <svg v-if="!open" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
                </svg>
                <svg v-if="open" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7,15L12,10L17,15H7Z" />
                </svg>
            </div>
        </div>
        <div v-if="open">
            <slot />
        </div>
    </div>
</template>