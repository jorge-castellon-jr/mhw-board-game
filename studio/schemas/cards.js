export default {
  name: 'card',
  type: 'document',
  title: 'Cards',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'weaponType',
      type: 'reference',
      title: 'Weapon Type',
      to: [{ type: 'weaponType' }],
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'weaponType.name',
      media: 'weaponType.rarityImages'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media: media[0],
      }
    }
  }
}