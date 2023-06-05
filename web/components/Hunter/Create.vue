<template>
  <div v-if="hunter" class="pb-24">
    <h3>Create Hunter</h3>
    <div class="section">
      <h4>Hunter's Info</h4>
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
      <template v-if="hunter.equipment.length">
        <h4>Starting Equipment</h4>
        <EquipmentCard :equipment="hunterStore.currentWeapon" />
        <div class="resources-group">
          <EquipmentCard
            v-for="equipment in hunterStore.currentGear"
            :equipment="equipment"
          />
        </div>
        <h4 class="section">Change Starting Equipment</h4>
      </template>
      <h4 v-else class="section">Choose Starting Equipment</h4>
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
          hide-footer
        />
      </div>
    </div>
    <!-- <div class="section">
      <h4>Add Resources</h4>
      <ResourceSearch class="my-4" />
    </div>
    <div class="section">
      <h4>Common Bones, Ores and Hides:</h4>
      <div v-if="hunterStore.common_resources.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.common_resources"
          :resource="resource"
        />
      </div>
      <div v-else>No Common Resources</div>
    </div>
    <div class="section">
      <h4>Other Bones, Ores and Hides:</h4>
      <div v-if="hunterStore.other_resources.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.other_resources"
          :resource="resource"
        />
      </div>
      <div v-else>No Other Resources</div>
    </div>
    <div class="section">
      <h4>Monster Parts:</h4>
      <div v-if="hunterStore.monster_parts.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.monster_parts"
          :resource="resource"
        />
      </div>
      <div v-else>No Monster Parts</div>
    </div>
    <div class="section">
      <h4>Inventory:</h4>
      <div v-if="hunterStore.inventory.length" class="resources-group">
        <ResourceItem
          v-for="resource in hunterStore.inventory"
          :resource="resource"
        />
      </div>
      <div v-else>No Inventory</div>
    </div> -->
    <!-- <img src="~/assets/MHW__Note_Sheet.png" alt="" /> -->
    <div class="fixed left-4 right-4 bottom-16 grid grid-cols-1 gap-2 z-10">
      <BaseButton @click="save">Save</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHunterStore, HunterInterface } from "~/stores/hunterStore";
import { StartingEquipment } from "~/stores/Equipment";
import { useAppStore } from "~/stores/appStore";

const appStore = useAppStore();

const hunterStore = useHunterStore();
const hunter = hunterStore.currentHunter as HunterInterface;

const all_equipment = hunterStore.all_starting_equipment;
const addEquipment = (equipment: StartingEquipment) => {
  hunterStore.addStartingEquipment(equipment.id);
};
const save = () => {
  hunterStore.addHunter(hunter);
  appStore.pageIndex = "hunters";
};
</script>
