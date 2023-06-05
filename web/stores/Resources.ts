export type Resource = {
  id: string;
  name: string;
  category: ResourceCategory;
  value: number;
  img: string;
};
export enum ResourceCategory {
  Common,
  Other,
  MonsterPart,
  Inventory,
  HealthPotion,
  CampaignDay
}

export const resources: Resource[] = [
  {
    id: "carbalite_ore",
    name: "Carbalite Ore",
    category: ResourceCategory.Common,
    value: 1,
    img: "purple-ore.png",
  },
  {
    id: "dragonite_ore",
    name: "Dragonite Ore",
    category: ResourceCategory.Common,
    value: 1,
    img: "green-ore.png",
  },
  {
    id: "machalite_ore",
    name: "Machalite Ore",
    category: ResourceCategory.Common,
    value: 1,
    img: "blue-ore.png",
  },
  {
    id: "monster_bone_medium",
    name: "Monster Bone Medium",
    category: ResourceCategory.Common,
    value: 1,
    img: "yellow-monster-bones.png",
  },
  {
    id: "monster_keenbone",
    name: "Monster Keenbone",
    category: ResourceCategory.Common,
    value: 1,
    img: "pink-monster-bones.png",
  },
  {
    id: "ancient_bone",
    name: "Ancient Bone",
    category: ResourceCategory.Common,
    value: 1,
    img: "green-monster-bones.png",
  },
  {
    id: "dragonvein_crystal",
    name: "Dragonvein Crystal",
    category: ResourceCategory.Common,
    value: 1,
    img: "red-ore.png",
  },
  {
    id: "fucium_ore",
    name: "Fucium Ore",
    category: ResourceCategory.Common,
    value: 1,
    img: "pink-ore.png",
  },
  {
    id: "monster_bone_small",
    name: "Monster Bone Small",
    category: ResourceCategory.Common,
    value: 1,
    img: "yellow-monster-bones.png",
  },
  {
    id: "quality_bone",
    name: "Quality Bone",
    category: ResourceCategory.Common,
    value: 1,
    img: "white-monster-bones.png",
  },
  {
    id: "monster_bone_large",
    name: "Monster Bone Large",
    category: ResourceCategory.Common,
    value: 1,
    img: "yellow-monster-bones.png",
  },
  {
    id: "monster_hardbone",
    name: "Monster Hardbone",
    category: ResourceCategory.Common,
    value: 1,
    img: "red-monster-bones.png",
  },
  {
    id: "boulder_bone",
    name: "Boulder Bone",
    category: ResourceCategory.Common,
    value: 1,
    img: "yellow-monster-bones.png",
  },
  {
    id: "wingdrake_hide",
    name: "Wingdrake Hide",
    category: ResourceCategory.Common,
    value: 1,
    img: "tan-wing.png",
  },
  {
    id: "rathalos_scale",
    name: "Rathalos Scale",
    category: ResourceCategory.MonsterPart,
    value: 1,
    img: "red-scale.png",
  },
  {
    id: "rathalos_shell",
    name: "Rathalos shell",
    category: ResourceCategory.MonsterPart,
    value: 1,
    img: "red-shell.png",
  },
  {
    id: "rathalos_marrow",
    name: "Rathalos Marrow",
    category: ResourceCategory.MonsterPart,
    value: 1,
    img: "red-monster.png",
  },
];
