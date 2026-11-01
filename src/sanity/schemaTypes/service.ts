import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tradeCategory',
      title: 'Primary Trade Category',
      type: 'string',
      options: {
        list: [
          { title: 'Water Damage Restoration', value: 'water-damage' },
          { title: 'Plumbing Contractor', value: 'plumbing' },
          { title: 'HVAC Heating & Air Conditioning', value: 'hvac' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Service Details',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Identifier (Lucide)',
      type: 'string',
      description: 'e.g. Droplets, Wrench, Flame, Wind, ShieldAlert, Sparkles',
      initialValue: 'Wrench',
    }),
    defineField({
      name: 'emergencyAvailable',
      title: '24/7 Emergency Dispatch Available',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'features',
      title: 'Key Service Features & Guarantees',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Priority / Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tradeCategory',
      media: 'featuredImage',
    },
  },
});
