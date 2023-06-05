<template>
  <div class="mt-20 mb-24">
    <div class="top-header bg-blue-grey">
      <div class="flex flex-col items-start">
        <div>Hunter: {{ hunter.hunter_name || "Hunter" }}</div>
        <div>Palico: {{ hunter.palico_name || "Palico" }}</div>
      </div>
      <div class="flex flex-col items-end">
        <div>
          {{ hunter.campaign_name || "Campaign" }}
        </div>
        <div>Day: {{ hunter.day_tracker.value }}</div>
      </div>
    </div>

    <div v-if="hunterStore.currentHunter.equipment.length" class="section mt-0">
      <h4>Equipment</h4>
      <EquipmentCard :equipment="hunterStore.currentWeapon" />
      <div class="grid grid-cols-2 gap-3">
        <EquipmentCard
          v-for="equipment in hunterStore.currentGear"
          :equipment="equipment"
        />
      </div>
    </div>

    <div v-if="hunterStore.common_resources.length" class="section">
      <h4>Common Bones, Ores and Hides:</h4>
      <div class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.common_resources"
          :key="resource.id"
          :resource="resource"
        />
      </div>
    </div>
    <div v-if="hunterStore.other_resources.length" class="section">
      <h4>Other Bones, Ores and Hides:</h4>
      <div class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.other_resources"
          :key="resource.id"
          :resource="resource"
        />
      </div>
    </div>
    <div v-if="hunterStore.monster_parts.length" class="section">
      <h4>Monster Parts:</h4>
      <div class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.monster_parts"
          :key="resource.id"
          :resource="resource"
        />
      </div>
    </div>

    <div v-if="!hunterStore.currentHunter.resources.length" class="section">
      <h4>You don't have any materials yet.</h4>
      <p>Search to add materials</p>
    </div>
    <div
      v-if="
        hunterStore.currentHunter.resources.length &&
        !hunterStore.common_resources.length
      "
      class="section"
    >
      <h4>You don't have any Common Materials yet.</h4>
      <p>Search to add materials</p>
    </div>
    <div
      v-if="
        hunterStore.currentHunter.resources.length &&
        !hunterStore.other_resources.length
      "
      class="section"
    >
      <h4>You don't have any Other materials yet.</h4>
      <p>Search to add materials</p>
    </div>
    <div
      v-if="
        hunterStore.currentHunter.resources.length &&
        !hunterStore.monster_parts.length
      "
      class="section"
    >
      <h4>You don't have any Monster Parts yet.</h4>
      <p>Search to add materials</p>
    </div>

    <div class="section">
      <h4>Campaign Options:</h4>
      <div class="resources-group">
        <ResourceItem :resource="hunter.health_potions" />
        <ResourceItem :resource="hunter.day_tracker" prominent />
      </div>
    </div>
    <div class="fixed w-full left-0 bottom-12 p-2">
      <ResourceSearch class="mb-2" top />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Resource } from "~/stores/Resources";
import { useAppStore } from "~/stores/appStore";
import { useHunterStore, HunterInterface } from "~/stores/hunterStore";

const appStore = useAppStore();

const hunterStore = useHunterStore();
const hunter = hunterStore.currentHunter as HunterInterface;

const editHunter = () => {
  hunterStore.setCurrentHunter(hunter);
};
</script>

<style scoped>
.top-header {
  @apply fixed left-0 top-0 right-0 z-10 shadow-xl text-lg py-2 px-4 m-2 text-white  flex justify-between font-bold rounded-2xl;
}
</style>
