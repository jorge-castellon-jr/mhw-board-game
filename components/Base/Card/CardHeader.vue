<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    bordered?: boolean;
  }>(),
  {
    bordered: false,
  }
);
</script>

<template>
  <h3 class="font-semibold text-gray-700 p-2 border-b grow">
    <slot>
      {{ title }}
    </slot>
  </h3>
</template>
