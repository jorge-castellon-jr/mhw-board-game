import weapon, { rarity, damage } from "./weapon";
import weaponType from "./weaponType";
import armor from "./armor";
import armorType from "./armorType";
import set from "./set";
import resource from "./resource";

export const schemaTypes = [
  resource,
  set, weapon, armor, rarity, damage, weaponType, armorType,
]
