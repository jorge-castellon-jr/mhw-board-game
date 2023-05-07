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
  isEquiped: boolean;
};

export type StartingEquipment = {
  id: string;
  name: string;
  img: string;
  armor: string[];
  active?: boolean;
};

export enum EquipmentType {
  Head,
  Chest,
  Legs,
  Weapon,
}
export type stats = {
  value: number;
  damage?: number;
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

export const startingEquipment: StartingEquipment[] = [
  {
    id: "buster_sword",
    name: "Great Sword",
    img: "white-g-sword.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    id: "matched_slicers",
    name: "Duel Blades",
    img: "white-d-blades.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    id: "hunters_knife",
    name: "Sword and Shield",
    img: "white-s-shield.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    id: "iron_bow",
    name: "Bow",
    img: "white-bow.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    id: "proto_switch_axe",
    name: "Switch Axe",
    img: "white-axe.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    //Proto Commission Axe
    id: "proto_commission_axe",
    name: "Charge Blade",
    img: "white-c-blade.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    id: "iron_blade",
    name: "Insect Glaive",
    img: "white-i-glaive.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    //Iron Assault
    id: "iron_assault",
    name: "Heavy Bowgun",
    img: "white-h-bowgun.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    //Iron Gunlance
    id: "iron_gunlance",
    name: "Gunlance",
    img: "white-gunlance.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    //Iron Hammer
    id: "iron_hammer",
    name: "Hammer",
    img: "white-hammer.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    id: "iron_lance",
    name: "Lance",
    img: "white-lance.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    //Metal Bagpipe
    id: "metal_bagpipe",
    name: "Hunting Horn",
    img: "white-horn.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    //Chain Blitz
    id: "chain_blitz",
    name: "Light Bowgun",
    img: "white-l-bowgun.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
  {
    id: "iron_katana",
    name: "Long Sword",
    img: "white-l-sword.png",
    armor: ["leather_headgear", "leather_mail", "leather_trousers"],
  },
];

export const equipment: Equipment[] = [
  // Great Sword
  {
    id: "buster_sword",
    name: "Buster Sword",
    rarity: 1,
    set: "iron.png",
    type: EquipmentType.Weapon,
    img: "white-g-sword.png",
    skill: null,
    stats: [
      {
        value: 7,
        damage: 1,
      },
      {
        value: 4,
        damage: 2,
      },
      {
        value: 1,
        damage: 3,
      },
    ],
    crafting: [],
    isEquiped: false,
  },
  // Duel Blades
  {
    id: "matched_slicers",
    name: "Matched Slicers",
    rarity: 1,
    set: "iron.png",
    type: EquipmentType.Weapon,
    img: "white-blades.png",
    skill: null,
    stats: [
      {
        value: 10,
        damage: 1,
      },
      {
        value: 2,
        damage: 2,
      },
    ],
    crafting: [],
    isEquiped: false,
  },
  // Sword and Shield
  {
    id: "hunters_knife",
    name: "Hunter's Knife",
    rarity: 1,
    set: "iron.png",
    type: EquipmentType.Weapon,
    img: "white-s-shield.png",
    skill: null,
    stats: [
      {
        value: 8,
        damage: 1,
      },
      {
        value: 4,
        damage: 2,
      },
    ],
    crafting: [],
    isEquiped: false,
  },
  // Bow
  {
    id: "iron_bow",
    name: "Iron Bow",
    rarity: 1,
    set: "iron.png",
    type: EquipmentType.Weapon,
    img: "white-bow.png",
    skill: null,
    stats: [
      {
        value: 8,
        damage: 1,
      },
      {
        value: 4,
        damage: 2,
      },
    ],
    crafting: [],
    isEquiped: false,
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
    isEquiped: false,
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
    isEquiped: false,
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
    isEquiped: false,
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
    isEquiped: false,
  },
];
