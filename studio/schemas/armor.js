import armorType from "./armorType"

export const elements = {
  name: 'element',
  type: 'document',
  title: 'Elements',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    }
  },
}


export default {
  name: 'armor',
  type: 'document',
  title: 'Armors',
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
      options: {
        disableNew: true,
      }
    },
    {
      name: 'set',
      type: 'reference',
      title: 'Armor Set',
      to: [{ type: 'set' }],
      options: {
        disableNew: true,
      }
    },
    {
      name: 'armorValue',
      type: 'number',
      title: 'Armor Value',
      validation: (Rule) => Rule.min(0).max(5)
    },
    {
      name: 'elementalResistance',
      type: 'object',
      title: 'Elemental Resistance',
      fields: [
        {
          name: 'element',
          type: 'reference',
          title: 'Element',
          to: [{ type: 'element' }],
          options: {
            disableNew: true,
          }
        },
        {
          name: 'resistance',
          type: 'number',
          title: 'Resistance',
          validation: (Rule) => Rule.min(0).max(5)
        },
      ]
    },
    {
      name: 'skill',
      type: 'object',
      title: 'Skill',
      fields: [
        {
          name: 'isSetBonus',
          type: 'boolean',
          title: 'Is Set Bonus Skill?',
        },
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
        },
      ],
      initialValue: {
        isSetBonus: false
      }
    },
    {
      name: 'resources',
      type: 'resources',
      title: 'Resources',
    },
  ],
  initialValue: {
    rarity: 5,
    armorValue: 0

  },
  preview: {
    select: {
      title: 'name',
      img: 'armorType.rarityImages',
      rarity: 'rarity',
      set: 'set.name',
      armorType: 'armorType.name',
      skill: 'skill.name',
    },
    prepare({ title, img, rarity, set, armorType, skill}) {
      return {
        title,
        subtitle: `${set} ${armorType}${skill ? ' ★' : ''}`,
        media: img[rarity - 1],
      }
    }
  },
}