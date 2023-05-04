import { Resource, resources } from "./Resources";

export type Equipment = {
  id: string;
  name: string;
  description?: string;
  rarity: number;
  set: string;
  type: EquipmentType;
  img: string;
  skill: Skill | null;
  stats: stats[];
  crafting: Resource[];
};

export enum EquipmentType {
  Head,
  Chest,
  Legs,
  GreatSword,
}
export type stats = {
  value: number;
  damage?: string;
  element?: string;
};
export type Skill = {
  name: string;
  description: string;
};

const findResource = (id: string, value: number = 1) => {
  const resource = resources.find((resource) => resource.id === id) as Resource;
  if (!resource) throw new Error(`Resource ${id} not found`);
  resource.value = value;
  return resource;
};

export const equipment: Equipment[] = [
  // Great Sword
  {
    id: "buster_sword",
    name: "Buster Sword",
    rarity: 1,
    set: "iron.png",
    type: EquipmentType.GreatSword,
    img: "white-g-sword.png",
    skill: null,
    stats: [
      {
        value: 7,
      },
    ],
    crafting: [],
  },
  // Leather
  {
    id: "leather_headgear",
    name: "Leather Headgear",
    rarity: 1,
    set: "leather.png",
    type: EquipmentType.Head,
    img: "white-helmet.png",
    skill: null,
    stats: [
      {
        value: 0,
      },
    ],
    crafting: [],
  },
  {
    id: "leather_mail",
    name: "Leather Mail",
    rarity: 1,
    set: "leather.png",
    type: EquipmentType.Chest,
    img: "white-chest.png",
    skill: null,
    stats: [
      {
        value: 0,
      },
    ],
    crafting: [],
  },
  {
    id: "leather_trousers",
    name: "Leather Trousers",
    rarity: 1,
    set: "leather.png",
    type: EquipmentType.Legs,
    img: "white-legs.png",
    skill: null,
    stats: [
      {
        value: 0,
      },
    ],
    crafting: [],
  },
  {
    id: "ratholos_helm",
    name: "Ratholos Helm",
    rarity: 4,
    set: "rathalos.png",
    type: EquipmentType.Head,
    img: "purple-helmet.png",
    skill: {
      name: "Rathalos Mastery",
      description:
        "When applying fire, draw an elemental damage card instead of placing a fire token.",
    },
    stats: [
      {
        value: 2,
      },
      {
        value: 1,
        element: "fire",
      },
    ],
    crafting: [
      findResource("rathalos_scale"),
      findResource("rathalos_shell"),
      findResource("rathalos_marrow"),
    ],
  },
];
