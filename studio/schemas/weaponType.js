export default {
  name: 'weaponType',
  type: 'document',
  title: 'Weapon Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'rarityImages',
      type: 'array',
      title: 'Rarity Images',
      of: [{ type: 'image' }],
      options: {
        sortable: true
      },
      validation: (Rule) => Rule.min(5).max(5)
    },
    {
      name: 'startingWeapon',
      type: 'reference',
      title: 'Starting Weapon',
      to: [{ type: 'weapon' }],
    },
    {
      name: 'startingArmor',
      type: 'array',
      title: 'Starting Armor',
      of: [
        { 
          type: 'reference',
          to: [{ type: 'armor' }],
       }
      ],
      validation: (Rule) => Rule.min(3).max(3)
    }
  ],
  preview: {
    select: {
      title: 'name',
      img: 'rarityImages',
    },
    prepare({ title, img }) {
      return {
        title,
        media: img[0],
      }
    }
  }
}