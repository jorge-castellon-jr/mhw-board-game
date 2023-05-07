<template>
  <div v-if="hunter" class="pb-10">
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
      <h2>Starting Equipment</h2>

      <template v-if="hunter.equipment">
        <div class="resources-group">
          <EquipmentCard
            v-for="equipment in hunter.equipment"
            :equipment="equipment"
          />
        </div>
        <h2 class="section">Change Starting Equipment</h2>
      </template>
      <div v-if="all_equipment.length" class="resources-group">
        <EquipmentCard
          v-for="equipment in all_equipment"
          :equipment="equipment"
          :class="
            equipment.active
              ? 'outline outline-offset-2 outline-orange-800 bg-orange-200'
              : ''
          "
          @click="addEquipment(equipment)"
        />
      </div>
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
      <ResourceItem :resource="hunter.health_potions" />
      <h2>Campaign Day Tracker: {{ hunter.day_tracker }}</h2>
    </div>
    <!-- <img src="~/assets/MHW__Note_Sheet.png" alt="" /> -->
    <div
      class="fixed w-full left-0 bottom-0 p-2 bg-orange-900/75 grid grid-cols-2 gap-2"
    >
      <BaseButton to="/">Back</BaseButton>
      <BaseButton @click="save">Save</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHunterStore, HunterInterface } from "~/stores/hunterStore";
import { StartingEquipment } from "~/stores/Equipment";
import { Resource } from "~/stores/Resources";

const router = useRouter();

const hunterStore = useHunterStore();
const hunter = hunterStore.currentHunter as HunterInterface;

onBeforeMount(() => {
  if (hunter.id === undefined) {
    console.log(hunter.id);

    router.push("/");
  }
});

const all_equipment = hunterStore.all_starting_equipment;
const addEquipment = (equipment: StartingEquipment) => {
  hunterStore.addStartingEquipment(equipment.id);
};

const save = () => {
  hunterStore.updateHunter(hunter);
  router.push("/");
};
</script>
