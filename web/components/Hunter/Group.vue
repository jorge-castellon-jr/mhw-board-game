<template>
  <h3 class="mb-4">Hunters</h3>
  <!-- list hunters as BaseButton from hunterStore -->
  <div v-if="hunterStore.hasHunters" class="flex flex-col space-y-4">
    <BaseButton
      v-for="hunter in hunterStore.hunters"
      :key="hunter.id"
      @click="
        [hunterStore.setCurrentHunter(hunter), (appStore.pageIndex = 'hidden')]
      "
      no-caps
    >
      <div class="flex w-full justify-between text-gray-100">
        <div class="flex flex-col items-start">
          <div>
            <span class="text-gray-300 font-extrabold">Hunter:</span>
            {{ hunter.hunter_name || "Hunter" }}
          </div>
          <div>
            <span class="text-gray-300 font-extrabold">Palico:</span>
            {{ hunter.palico_name || "No Name" }}
          </div>
        </div>
        <div class="flex flex-col items-end">
          <div>
            {{ hunter.campaign_name || "" }}
          </div>
          <div>
            <span class="text-gray-300 font-extrabold">Day:</span>
            {{ hunter.day_tracker.value }}
          </div>
        </div>
      </div>
    </BaseButton>
  </div>
  <div v-else>
    <!-- // if no hunters, show create hunter button -->
    <BaseButton
      class="w-full"
      @click="[hunterStore.createHunter(), (appStore.pageIndex = 'create')]"
      size="lg"
    >
      Create Hunter
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/appStore";
import { useHunterStore } from "~/stores/hunterStore";

const hunterStore = useHunterStore();
const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
