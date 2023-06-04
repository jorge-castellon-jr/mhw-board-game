import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'

export const rarity = {
  title: 'Rarity',
  name: 'rarity',
  type: 'number',
  options: {
    list: [1, 2, 3, 4, 5],
    layout: 'radio',
    direction: 'horizontal'
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
          name: 'isArmor',
          type: 'boolean',
          title: 'Is this Armor?',
        },
        {
          name: 'value',
          type: 'number',
          title: 'Damage',
          options: {
            list: [1, 2, 3, 4, 5],
            layout: 'radio',
            direction: 'horizontal'
          }
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          hidden: true,
          readOnly: true
        },
        {
          name: 'armorImage',
          type: 'image',
          title: 'Armor Image',
          hidden: true,
          readOnly: true
        },
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantity',
          description: 'How many of this card? only used for damage cards',
          options: {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            layout: 'radio',
            direction: 'horizontal'
          }
        }
      ],
      initialValue: {
        quantity: 1,
        value: 1,
        isArmor: false,
        image: {
          "_type": "image",
          "asset": {
            "_ref": "image-6ef6f5479d63ff96012e5ca97f63456685ad81ea-59x59-png",
            "_type": "reference"
          }
        },
        armorImage: {
          "_type": "image",
          "asset": {
            "_ref": "image-c4df43226a77badb494c017f91ec0565255a03f4-44x58-png",
            "_type": "reference"
          }
        }
      },
      preview: {
          select: {
            value: 'value',
            quatity: 'quantity',
            media: 'image',
            armorImage: 'armorImage',
            isArmor: 'isArmor'
          },
          prepare({ value,quatity, media, armorImage, isArmor }) {
            console.log(armorImage);
            return {
              title: isArmor ? `${value} armor` : `${value} dmg x ${quatity}`,
              media: isArmor ? armorImage : media
            }
          }
        }
    }
  ],
  initialValue: {
    rarity: 1,
  },
}

export const weaponCard = {
  name: 'weaponCards',
  type: 'array',
  group: 'details',
  of: [
    {
      name: 'cards',
      type: 'object',
      fields: [
        {
          name: 'card',
          type: 'reference',
          to: [{ type: 'card' }],
          options: {
            filter: ({ document }) => {
              const type = document.weaponType._ref
              console.log(document.weaponType);
              return {
                filter: 'references($type)',
                params: { type }
              }
            }
          },
          validation: (Rule) => Rule.required()
        },
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantity',
          options: {
            list: [1, 2, 3, 4, 5, 6],
            layout: 'radio',
            direction: 'horizontal'
          }
        }
      ],
      initialValue: {
        quantity: 2
      },
      preview: {
        select: {
          title: 'card.name',
          quantity: 'quantity',
          media: 'card.weaponType.rarityImages',
        },
        prepare({ title, quantity, media }) {
          return {
            title: `${quantity} x ${title}`,
            media: media[0]
          }
        }
      }
    }
  ]
}

const raritySource = (doc) => {
  const rarity = ['white', 'yellow', 'green', 'purple', 'orange']
  return `${rarity[doc.rarity - 1]}-${doc.type}`
}



export default {
  name: 'weapon',
  type: 'document',
  title: 'Weapons',
  groups: [
    {
      name: 'info',
      title: 'Weapon Info',
    },
    {
      name: 'details',
      title: 'Card Details',
    },
    {
      name: 'resources',
      title: 'Resources',
    },
  ],
  fields: [
    {
      name: 'id',
      type: 'slug',
      title: 'ID',
      group: 'info',
      options: {
        source: 'name',
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '_')
          .replace(/'|"/g, '')
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      group: 'info',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rarity',
      type: 'rarity',
      title: 'Rarity',
      group: 'info',
    },
    {
      name: 'weaponType',
      type: 'reference',
      title: 'Weapon Type',
      group: 'info',
      to: [{ type: 'weaponType' }],
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'set',
      type: 'reference',
      title: 'Armor Set',
      group: 'info',
      to: [{ type: 'set' }],
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'damage',
      type: 'damage',
      title: 'Damage',
      group: 'details',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'remove',
      type: 'weaponCards',
      title: 'Remove Cards',
      group: 'details',
    },
    {
      name: 'add',
      type: 'weaponCards',
      title: 'Add Cards',
      group: 'details',
    },
    {
      name: 'resources',
      type: 'resources',
      title: 'Resources',
      group: 'resources',
      validation: (Rule) => Rule.custom((resource, context)=>{
        const {rarity, resources} = context.document
        console.log(resources);
        return rarity  === 1 || resources !== undefined ? true : 'Resources are required for rarity 2+'
      })
    },
  ],
  initialValue: {
    rarity: 1,
  },
  preview: {
    select: {
      title: 'name',
      img: 'weaponType.rarityImages',
      rarity: 'rarity',
      subtitle: 'set.name'
    },
    prepare({ title, img, rarity, subtitle }) {
      return {
        title,
        subtitle,
        media: img[rarity - 1],
      }
    }
  },
}