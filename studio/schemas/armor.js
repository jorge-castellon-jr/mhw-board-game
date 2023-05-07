import armorType from "./armorType"

export default {
  name: 'armor',
  type: 'document',
  title: 'Armor',
  fields: [
    {
      name: 'id',
      type: 'slug',
      title: 'ID',
      options: {
        source: 'name',
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '_')
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'rarity',
      type: 'number',
      title: 'Rarity',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'armorType',
      type: 'reference',
      title: 'Armor Type',
      to: [{ type: 'armorType' }],
    },
    {
      name: 'set',
      type: 'reference',
      title: 'Armor Set',
      to: [{ type: 'set' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      img: 'armorType.rarityImages',
      rarity: 'rarity',
      set: 'set.name',
      armorType: 'armorType.name',
    },
    prepare({ title, img, rarity, set, armorType }) {
      return {
        title,
        subtitle: `${set} ${armorType}`,
        media: img[rarity - 1],
      }
    }
  },
}