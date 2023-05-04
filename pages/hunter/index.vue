<template>
  <div>
    <h1>Hunter's Sheet</h1>
    <div class="section">
      <h2>Hunter's Info</h2>
      <BaseInput
        v-model="hunter.hunter_name"
        label="Hunter's Name"
        name="hunter_name"
        placeholder="Enter your Hunter's name"
      />
      <BaseInput
        v-model="hunter.palico_name"
        label="Palico's Name"
        name="palico_name"
        placeholder="Enter your Palico's name"
      />
      <BaseInput
        v-model="hunter.campaign_name"
        label="Campaign's Name"
        name="campaign_name"
        placeholder="Enter the Campaign's name"
      />
    </div>
    <div class="section">
      <h2>Add Resources</h2>
      <ResourceSearch class="my-4" />
    </div>
    <div class="section">
      <h2>Common Bones, Ores and Hides:</h2>
      <div v-if="hunterStore.common_resources.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.common_resources"
          :resource="resource"
        />
      </div>
      <div v-else>No Common Resources</div>
    </div>
    <div class="section">
      <h2>Other Bones, Ores and Hides:</h2>
      <div v-if="hunterStore.other_resources.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.other_resources"
          :resource="resource"
        />
      </div>
      <div v-else>No Other Resources</div>
    </div>
    <div class="section">
      <h2>Monster Parts:</h2>
      <div v-if="hunterStore.monster_parts.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.monster_parts"
          :resource="resource"
        />
      </div>
      <div v-else>No Monster Parts</div>
    </div>
    <div class="section">
      <h2>Inventory:</h2>
      <div v-if="hunterStore.inventory.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.inventory"
          :resource="resource"
        />
      </div>
      <div v-else>No Inventory</div>
    </div>
    <div class="section">
      <h2>Health Potions:</h2>
      <ResourceItem :resource="health_potions" />
      <h2>Campaign Day Tracker: {{ day_tracker }}</h2>
    </div>
    <!-- <img src="~/assets/MHW__Note_Sheet.png" alt="" /> -->
    <div class="flex justify-between">
      <BaseButton to="/">Back</BaseButton>
      <BaseButton @click="save">Save</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHunterStore, Hunter } from "~/stores/hunterStore";
import { Resource } from "~/stores/Resources";

const router = useRouter();

const hunterStore = useHunterStore();
const hunter = hunterStore.currentHunter as Hunter;

const all_resources = hunterStore.all_resources;
// const other_resources = hunter.other_resources;
// const monster_parts = hunter.monster_parts;
// const inventory = hunter.inventory;
const health_potions = hunter.health_potions;
const day_tracker = hunter.day_tracker;

const save = () => {
  hunterStore.updateHunter(hunter);
  router.push("/");
};

const query = ref("");
const filteredResources = computed(() =>
  query.value === ""
    ? all_resources
    : all_resources.filter((resource) => {
        return resource.name.toLowerCase().includes(query.value.toLowerCase());
      })
);

const addResource = (resource: Resource) => {
  hunterStore.addResource(resource);
};
</script>
