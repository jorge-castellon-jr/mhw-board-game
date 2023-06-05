import { defineStore } from "pinia";
import { Resource, ResourceCategory, resources } from "@/stores/Resources";
import {
  Equipment,
  EquipmentType,
  StartingEquipment,
  equipment,
  startingEquipment,
} from "./Equipment";
import { useAppStore } from "./appStore";

export interface HunterInterface {
  id: string;
  hunter_name: string;
  campaign_name: string;
  palico_name: string;
  resources: Resource[];
  weapons: Equipment[];
  armor: Equipment[];
  equipment: Equipment[];
  health_potions: Resource;
  day_tracker: Resource;
}

export const useHunterStore = defineStore("hunter", {
  state: () => ({
    currentHunter: new Hunter() as HunterInterface,
    hunters: [] as HunterInterface[],
    all_resources: resources as Resource[],
    all_equipment: equipment as Equipment[],
    all_starting_equipment: startingEquipment,
  }),
  getters: {
    hasHunters: (state) => {
      return state.hunters.length > 0;
    },
    isHunterSelected: (state) => {
      return state.currentHunter.id !== "";
    },
    getHunterById: (state) => (id: string) => {
      return state.hunters.find(
        (hunter) => hunter.id === id
      ) as HunterInterface;
    },
    currentWeapon: (state) => {
      return state.currentHunter.equipment.find(
        (equipment) => equipment.type === EquipmentType.Weapon
      );
    },
    currentGear: (state) => {
      return state.currentHunter.equipment.filter(
        (equipment) => equipment.type !== EquipmentType.Weapon
      );
    },
    common_resources: (state) => {
      console.log("common_resources", state.currentHunter);
      if (state.currentHunter.id == "") return [];

      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.Common
      );
    },
    other_resources: (state) => {
      if (state.currentHunter.id == "") return [];
      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.Other
      );
    },
    monster_parts: (state) => {
      if (state.currentHunter.id == "") return [];
      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.MonsterPart
      );
    },
    inventory: (state) => {
      if (state.currentHunter.id !== "") return [];
      return state.currentHunter.resources.filter(
        (resource) => resource.category === ResourceCategory.Inventory
      );
    },
    getEquipmentById: (state) => (id: string) => {
      return state.all_equipment.find((equipment) => equipment.id === id);
    },
    getStartingEquipmentById: (state) => (id: string) => {
      return state.all_starting_equipment.find(
        (equipment) => equipment.id === id
      );
    },
  },
  actions: {
    setCurrentHunter(hunter: HunterInterface) {
      this.currentHunter = hunter;
    },
    addHunter(hunter: HunterInterface) {
      this.hunters.push(hunter);
    },
    updateHunter(hunter: HunterInterface) {
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
      if (resourceId === "day_tracker") {
        if (this.currentHunter.day_tracker.value < 99)
          this.currentHunter.day_tracker.value++;
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
      if (resourceId === "day_tracker") {
        if (this.currentHunter.day_tracker.value > 1)
          this.currentHunter.day_tracker.value--;
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
    resetStartingEquipment() {
      this.currentHunter.equipment = [];
      this.currentHunter.armor = [];
      this.currentHunter.weapons = [];
    },
    addStartingEquipment(weapon: string) {
      this.resetStartingEquipment();
      this.currentHunter.weapons.push(
        this.getEquipmentById(weapon) as Equipment
      );
      this.currentHunter.equipment.push(
        this.getEquipmentById(weapon) as Equipment
      );

      const starting_armor = this.getStartingEquipmentById(
        weapon
      ) as StartingEquipment;

      starting_armor.armor.forEach((armor) => {
        const equipment = this.getEquipmentById(armor) as Equipment;
        this.currentHunter.armor.push(equipment);
        this.currentHunter.equipment.push(equipment);
      });

      this.all_starting_equipment.forEach((equipment) => {
        equipment.active = false;
      });
      const starting_weapon = this.all_starting_equipment.find(
        (equipment) => equipment.id === weapon
      );
      if (starting_weapon != undefined) starting_weapon.active = true;
    },
    createHunter() {
      console.log("createHunter");

      const newHunter = new Hunter() as HunterInterface;
      newHunter.id = Math.random().toString(36).substring(3);
      // this.addHunter(newHunter);
      this.setCurrentHunter(newHunter);
    },
  },
  persist: {
    // storage: persistedState.localStorage,
  },
});

class Hunter {
  id: string = "";
  hunter_name: string = "";
  campaign_name: string = "";
  palico_name: string = "";
  resources: Resource[] = [];
  weapons: Equipment[] = [];
  armor: Equipment[] = [];
  equipment?: Equipment[] = [];
  health_potions: Resource = {
    id: "health_potions",
    name: "Health Potions",
    category: ResourceCategory.HealthPotion,
    value: 0,
    img: "health-potion.png",
  };
  day_tracker: Resource = {
    id: "day_tracker",
    name: "Campain Day",
    category: ResourceCategory.CampaignDay,
    value: 1,
    img: "frame.png",
  };
}
