import weapon, { rarity, damage } from "./weapon";
import weaponType from "./weaponType";
import armor, { element } from "./armor";
import armorType from "./armorType";
import set from "./set";
import resource from "./resource";
import cards from "./cards";

export const schemaTypes = [
  resource,
  set, weapon, armor, rarity, damage, weaponType, armorType, element,
  cards
]
