<template>
  <div class="p-4">
    <h1 class="text-3xl">Components</h1>
    <div class="section">
      <h2 class="text-2xl">BaseAutocomplete</h2>
      <BaseAutocomplete />
    </div>
    <div class="section">
      <div class="flex space-x-2 mt-1">
        <BaseButton>Default</BaseButton>
        <BaseButton color="primary">Primary</BaseButton>
        <BaseButton color="secondary">Secondary</BaseButton>
        <BaseButton color="warning">Warning</BaseButton>
        <BaseButton color="error">Error</BaseButton>
        <BaseButton color="success">Success</BaseButton>
        <BaseButton color="light">Light</BaseButton>
        <BaseButton color="dark">Dark</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.section {
  margin-top: 2rem;
}
</style>
