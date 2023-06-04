import weapon, { rarity, damage, weaponCard } from "./weapon";
import weaponType from "./weaponType";
import armor, { elements } from "./armor";
import armorType from "./armorType";
import set from "./set";
import resource, { resourceType } from "./resource";
import cards from "./cards";

export const schemaTypes = [
  resource,
  resourceType,
  set,
  weapon,
  armor,
  rarity,
  damage,
  weaponCard,
  weaponType,
  armorType,
  elements,
  cards
]
