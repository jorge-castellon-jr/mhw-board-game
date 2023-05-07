export default {
  name: 'resource',
  type: 'document',
  title: 'Resource',
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
    {
      name: 'group',
      type: 'reference',
      title: 'Resource group',
      to: [{ type: 'set' }],
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'group.name',
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle,
      }
    }
  },
}