<template>
  <q-card
    v-bind="$props"
    flat
    style="border-radius: 1rem"
    class="flex flex-row"
  >
    <q-card-section v-if="!hideHeader" class="w-full bg-blue-grey-7">
      <slot name="header" />
    </q-card-section>

    <slot />
    <q-card-section
      v-if="!hideFooter"
      class="flex justify-center w-full bg-blue-grey-7"
    >
      <slot name="footer" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  hideHeader: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
});
</script>
