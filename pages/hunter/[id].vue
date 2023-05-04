<template>
  <div class="mt-16 mb-24">
    <div class="top-header">
      <div class="flex flex-col items-start">
        <div>Hunter: {{ hunter.hunter_name || "Hunter" }}</div>
        <div>Palico: {{ hunter.palico_name || "Palico" }}</div>
      </div>
      <div class="flex flex-col items-end">
        <div>
          {{ hunter.campaign_name || "Campaign" }}
        </div>
        <div>Day:{{ hunter.day_tracker }}</div>
      </div>
    </div>
    <div class="section mt-0">
      <h2>Equipment</h2>
      <div class="grid grid-cols-2 gap-3">
        <EquipmentCard
          v-for="equipment in hunter.equipment"
          :equipment="equipment"
        />
      </div>
    </div>
    <div v-if="hunterStore.common_resources.length" class="section">
      <h2>Common Bones, Ores and Hides:</h2>
      <div class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.common_resources"
          :key="resource.id"
          :resource="resource"
        />
      </div>
    </div>
    <div v-if="hunterStore.other_resources.length" class="section">
      <h2>Other Bones, Ores and Hides:</h2>
      <div class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.other_resources"
          :key="resource.id"
          :resource="resource"
        />
      </div>
    </div>
    <div v-if="hunterStore.monster_parts.length" class="section">
      <h2>Monster Parts:</h2>
      <div class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.monster_parts"
          :key="resource.id"
          :resource="resource"
        />
      </div>
    </div>
    <div class="fixed w-full left-0 bottom-0 p-2 bg-orange-900/75">
      <ResourceSearch class="mb-2" top />
      <BaseButton class="w-full" to="/hunter" @click="editHunter" shadow="lg">
        Edit
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Resource } from "~/stores/Resources";
import { useHunterStore, Hunter } from "~/stores/hunterStore";

const hunterStore = useHunterStore();
const hunter = hunterStore.currentHunter as Hunter;

const editHunter = () => {
  hunterStore.setCurrentHunter(hunter.id);
};
</script>

<style scoped>
.top-header {
  @apply fixed left-0 top-0 z-10 shadow-xl text-lg p-2 bg-orange-900/75 text-white w-full flex justify-between font-bold;
}
</style>
