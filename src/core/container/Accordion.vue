<script>

export default {
    props: {
        accordion: {
            type: Boolean,
            default: true
        },
        border: {
            type: Boolean,
            default: true
        },
        sidebar: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const accordion = props.accordion;

        return {
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
    <div :class="[border?'border border-black bg-tertiary-800':'', 'font-ibm']">
        <div :class="[border?'border-b border-black':'', sidebar?'':'px-5', 'flex text-xl text-white font-bold']">
            <div class="flex-1">
                <slot name="caption"></slot>
            </div>
            <div v-if="accordion" class="self-center cursor-pointer" @click="clickMenu">
                <font-awesome-icon v-if="!open" :icon="['fas', 'sort-down']" :class="{'text-sm':sidebar}" />
                <font-awesome-icon v-if="open" :icon="['fas', 'sort-up']" :class="{'text-sm':sidebar}" />
            </div>
        </div>
        <div v-if="open">
            <slot />
        </div>
    </div>
</template>