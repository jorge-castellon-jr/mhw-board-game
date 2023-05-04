<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bordered?: boolean;
  }>(),
  {
    bordered: false,
  }
);
</script>

<template>
  <div class="p-2 py-4 text-gray-600">
    <slot />
  </div>
</template>
