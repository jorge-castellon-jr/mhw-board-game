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
          name: 'image',
          type: 'image',
          title: 'Image',
          hidden: true,
          readOnly: true
        },
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantity',
        }
      ],
      initialValue: {
        quantity: 1,
        value: 1,
        image: {
          "_type": "image",
          "asset": {
              "_ref": "image-6ef6f5479d63ff96012e5ca97f63456685ad81ea-59x59-png",
              "_type": "reference"
          }
        }
      },
      preview: {
          select: {
            value: 'value',
            quatity: 'quantity',
            media: 'image',
          },
          prepare({ value,quatity, media }) {
            return {
              title: `${value} dmg x ${quatity}`,
              media
            }
          }
        }
    }
  ],
  initialValue: {
    rarity: 1,
  },
}

const raritySource = (doc) => {
  const rarity = ['white', 'yellow', 'green', 'purple', 'orange']
  return `${rarity[doc.rarity - 1]}-${doc.type}`
}

export default {
  name: 'weapon',
  type: 'document',
  title: 'Weapons',
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
      name: 'weaponType',
      type: 'reference',
      title: 'Weapon Type',
      to: [{ type: 'weaponType' }],
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
      name: 'rarity',
      type: 'rarity',
      title: 'Rarity'
    },
    {
      name: 'damage',
      type: 'damage',
      title: 'Damage'
    },
    {
      name: 'remove',
      type: 'array',
      title: 'Remove Cards',
      of: [
        {
          type: 'reference',
          to: [{ type: 'card' }]
        }
      ]
    },
    {
      name: 'add',
      type: 'array',
      title: 'Add Cards',
      of: [
        {
          type: 'reference',
          to: [{ type: 'card' }]
        }
      ]
    },
    {
      name: 'resources',
      type: 'array',
      title: 'Resources',
      of: [
        {
          name: 'resource',
          type: 'object',
          fields: [

            {
              name: 'resource',
              type: 'reference',
              to: [{ type: 'resourceDoc' }]
            },
            {
              name: 'quantity',
              type: 'number',
              title: 'Quantity',
            }
          ],
          initialValue: {
            quantity: 1
          },
          preview: {
            select: {
              resource: 'resource.name',
              quatity: 'quantity',
              media: 'resource.image',
            },
            prepare({ resource, quatity, media }) {
              return {
                title: `${quatity} x ${resource}`,
                media
              }
            }
          }
        }
      ],
    },
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