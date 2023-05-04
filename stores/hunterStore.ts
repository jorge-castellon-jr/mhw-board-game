import { defineStore } from "pinia";
import { Resource, ResourceCategory, resources } from "@/stores/Resources";
import { Equipment, equipment } from "./Equipment";

export interface Hunter {
  id: string;
  hunter_name: string;
  campaign_name: string;
  palico_name: string;
  resources: Resource[];
  equipment?: Equipment[];
  other_resources: string;
  monster_parts: string;
  inventory: string;
  health_potions: Resource;
  day_tracker: number;
}

export const useHunterStore = defineStore("hunter", {
  state: () => ({
    currentHunter: {} as Hunter,
    hunters: [] as Hunter[],
    all_resources: resources as Resource[],
    all_equipment: equipment as Equipment[],
  }),
  getters: {
    getHunterById: (state) => (id: string) => {
      return state.hunters.find((hunter) => hunter.id === id) as Hunter;
    },
    common_resources: (state) => {
      if (!state.currentHunter) return [];
      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.Common
      );
    },
    other_resources: (state) => {
      if (!state.currentHunter) return [];
      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.Other
      );
    },
    monster_parts: (state) => {
      if (!state.currentHunter) return [];
      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.MonsterPart
      );
    },
    inventory: (state) => {
      if (!state.currentHunter) return [];
      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.Inventory
      );
    },
    getEquipmentById: (state) => (id: string) => {
      return state.all_equipment.find((equipment) => equipment.id === id);
    },
  },
  actions: {
    setCurrentHunter(hunterId: string) {
      this.currentHunter = this.getHunterById(hunterId) as Hunter;
    },
    addHunter(hunter: Hunter) {
      this.hunters.push(hunter);
    },
    updateHunter(hunter: Hunter) {
      const index = this.hunters.findIndex((h) => h.id === hunter.id);
      this.hunters[index] = hunter;
    },
    deleteHunter(id: string) {
      const index = this.hunters.findIndex((h) => h.id === id);
      this.hunters.splice(index, 1);
    },
    plusResource(resourceId: string) {
      if (resourceId === "health_potions") {
        if (this.currentHunter.health_potions.value < 3)
          this.currentHunter.health_potions.value++;
        return;
      }
      const resource = this.currentHunter.resources.find(
        (resource) => resource.id === resourceId
      ) as Resource;
      resource.value++;
      // this.updateHunter(hunter);
    },
    minusResource(resourceId: string) {
      if (resourceId === "health_potions") {
        if (this.currentHunter.health_potions.value > 0)
          this.currentHunter.health_potions.value--;
        return;
      }
      const resource = this.currentHunter.resources.find(
        (resource) => resource.id === resourceId
      ) as Resource;
      if (resource.value > 0) resource.value--;
      if (resource.value === 0) {
        this.deleteResource(resourceId);
        return;
      }
    },
    addResource(resource: Resource) {
      const hunterHasResource = this.currentHunter.resources.find(
        (r) => r.id === resource.id
      );
      if (hunterHasResource) {
        hunterHasResource.value++;
        return;
      }
      this.currentHunter.resources.push(resource);
    },
    deleteResource(resourceId: string) {
      const index = this.currentHunter.resources.findIndex(
        (r) => r.id === resourceId
      );
      this.currentHunter.resources.splice(index, 1);
    },
    createHunter() {
      const newHunter = {
        id: Math.random().toString(36).substring(5),
        hunter_name: "",
        campaign_name: "",
        palico_name: "",
        resources: [],
        equipment: [
          this.getEquipmentById("buster_sword"),
          this.getEquipmentById("leather_headgear"),
          this.getEquipmentById("leather_mail"),
          this.getEquipmentById("leather_trousers"),
        ],
        other_resources: "",
        monster_parts: "",
        inventory: "",
        health_potions: {
          id: "health_potions",
          name: "Health Potions",
          category: ResourceCategory.HealthPotion,
          value: 0,
          img: "health-potion.png",
        },
        day_tracker: 1,
      } as Hunter;
      this.addHunter(newHunter);
      this.setCurrentHunter(newHunter.id);
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
