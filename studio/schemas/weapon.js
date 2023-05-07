import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'

export const rarity = {
  title: 'Rarity',
  name: 'rarity',
  type: 'number',
  options: {
    list: [1, 2, 3, 4, 5]
  }
}

export const damage = {
  name: 'damage',
  type: 'array',
  title: 'Damage',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'value',
          type: 'number',
          title: 'Damage',
          options: {
            list: [1, 2, 3, 4, 5]
          }
        },
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantity',
        }
      ]
    }
  ],
  preview: {
    select: {
      quatity: 'quantity',
    },
    prepare({ quatity }) {
      return {
        title: `x ${quatity}`,
      }
    }
  }
}

const raritySource = (doc) => {
  const rarity = ['white', 'yellow', 'green', 'purple', 'orange']
  return `${rarity[doc.rarity - 1]}-${doc.type}`
}

export default {
  name: 'weapon',
  type: 'document',
  title: 'Weapon',
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
      name: 'img',
      type: 'slug',
      title: 'Image Id',
      options: {
        source: raritySource,
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
      name: 'weaponType',
      type: 'reference',
      title: 'Weapon Type',
      to: [{ type: 'weaponType' }],
    },
    {
      name: 'type',
      type: 'string',
      title: 'Weapon Type',
      options: {
        list: [
          { title: 'Great Sword', value: 'g-sword' },
          { title: 'Duel Blades', value: 'd-blades' },
          { title: 'Sword and Shield', value: 's-shield' },
          { title: 'Bow', value: 'bow' },
          { title: 'Switch Axe', value: 's-axe' },
          { title: 'Charge Blade', value: 'c-blade' },
          { title: 'Insect Glaive', value: 'i-glaive' },
          { title: 'Heavy Bowgun', value: 'h-bowgun' },
          { title: 'Hammer', value: 'hammer' },
          { title: 'Hunting Horn', value: 'horn' },
          { title: 'Lance', value: 'lance' },
          { title: 'Gunlance', value: 'g-lance' },
          { title: 'Light Bowgun', value: 'l-bowgun' },
      ]
      }
    },

    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'rarity',
      type: 'rarity',
      title: 'Rarity'
    },
    {
      name: 'damage',
      type: 'damage',
      title: 'Damage'
    }
  ],
  preview: {
    select: {
      title: 'name',
      img: 'weaponType.rarityImages',
      rarity: 'rarity'
    },
    prepare({ title, img, rarity }) {
      return {
        title,
        media: img[rarity - 1],
      }
    }
  },
}