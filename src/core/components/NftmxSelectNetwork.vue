<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected flex items-center" :class="{ open: open }" @click="open = !open">
            <img :src="selected.icon" class="mr-3" />
            {{ selected.name }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                class="flex items-center"
                v-for="(option, i) of options"
                :key="i"
                @click="
                selected = option;
                open = false;
                $emit('input', option);
                "
            >
                <img :src="option.icon" class="mr-3" />
                {{ option.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { networks } from "../config";

export default {
  props: {
    default: {
      type: Object,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      open: false,
      options: networks,
      selected: networks[0]
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  line-height: 50px;
}

.custom-select .selected {
  background-color: #343434;
  border: 2px solid black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 26px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  position: absolute;
  background-color: #343434;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #151515;
}

.selectHide {
  display: none;
}
</style>
