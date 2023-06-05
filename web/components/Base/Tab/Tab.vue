<template>
  <q-tab v-bind="$props" :ripple="false">
    <slot />
  </q-tab>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.q-tab__content {
  z-index: 2;
}
.q-tab__indicator {
  z-index: 1;
  height: calc(100% - 0.5rem);
  @apply rounded-full inset-1;

  .q-tab--inactive & {
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s !important;
  }
}
// .q-tab--active {
//   .q-tab__indicator {
//     background-color: #374151;
//     @apply rounded-full h-full;
//   }
// }
</style>
