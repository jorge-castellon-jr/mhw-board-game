export default {
  name: 'resourceDoc',
  type: 'document',
  title: 'Resources',
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

export const resourceType = {
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
          to: [{ type: 'resourceDoc' }],
          validation: (Rule) => Rule.required()
        },
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantity',
          options: {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            layout: 'radio',
            direction: 'horizontal'
          }
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
}