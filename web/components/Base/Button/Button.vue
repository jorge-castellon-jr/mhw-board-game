<template>
  <q-btn v-bind="$props" :color="formatColor" style="border-radius: 0.5rem">
    <slot />
  </q-btn>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/appStore";

const props = defineProps({
  color: {
    type: String,
    default: "none",
  },
});

const formatColor = computed(() => {
  const color = props.color;
  if (color === "none") {
    if (useAppStore().isDarkMode) {
      return "blue-grey";
    }
  }

  return color;
});
</script>

<style scoped></style>
