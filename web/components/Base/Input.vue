<template>
  <q-input
    :model-value="modelValue"
    v-bind="$props"
    :color="formatColor"
    :bg-color="formatBGColor"
    standout="light"
    @update:model-value="$emit('update:modelValue', $event)"
  ></q-input>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/appStore";

const props = defineProps({
  color: {
    type: String,
    default: "none",
  },
  bgColor: {
    type: String,
    default: "none",
  },
  modelValue: {
    type: String,
    default: "",
  },
});
const formatColor = computed(() => {
  const color = props.color;
  if (color === "none") {
    if (useAppStore().isDarkMode) {
      return "white";
    }
  }

  return color;
});
const formatBGColor = computed(() => {
  const color = props.bgColor;
  if (color === "none") {
    if (useAppStore().isDarkMode) {
      return "grey-9";
    }
  }

  return color;
});
</script>

<style lang="scss" scoped></style>
