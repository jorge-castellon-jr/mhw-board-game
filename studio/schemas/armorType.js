export default {
  name: 'armorType',
  type: 'document',
  title: 'Armor Type',
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