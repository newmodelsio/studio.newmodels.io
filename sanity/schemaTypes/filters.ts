import { defineField, defineType } from 'sanity'

export const filters = defineType({
  name: 'filters',
  title: 'Filters',
  type: 'document',
  fields: [

    defineField({
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'bioImage',
      title: 'Image',
      type: 'image',
    })
  ],
})