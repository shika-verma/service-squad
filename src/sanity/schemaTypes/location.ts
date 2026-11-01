import { defineField, defineType } from 'sanity';

export const locationType = defineType({
  name: 'location',
  title: 'Location Hub',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Hub Internal Name',
      type: 'string',
      description: 'Internal reference name, e.g. "Corporate Hub - Houston"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'businessName',
      title: 'Business Name (Schema & Display)',
      type: 'string',
      description: 'Official registered name (e.g. Service Squad, Service Squad of Stafford, Service Squad of Richmond)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetLandingPage',
      title: 'Target Landing Page Path',
      type: 'string',
      description: 'Relative URL, e.g. /locations/houston-tx/',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isCorporateHub',
      title: 'Is Corporate Hub / Primary Headquarters',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'schemaTypes',
      title: 'Multi-Trade Schema Types (@type)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Primary schema.org @type array. Default applied to ALL locations: WaterDamageRestorationService, PlumbingContractor, HVACBusiness',
      initialValue: [
        'WaterDamageRestorationService',
        'PlumbingContractor',
        'HVACBusiness',
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'phone',
      title: 'Primary Dispatch Phone',
      type: 'string',
      description: 'Primary local dispatch number (Deprecated 800 number replaced with local number)',
      initialValue: '(713) 999-9150',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'streetAddress',
      title: 'Street Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'suite',
      title: 'Suite / Unit',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      initialValue: 'TX',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zipCode',
      title: 'Postal Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Search / Direction URL',
      type: 'url',
    }),
    defineField({
      name: 'geoCoordinates',
      title: 'Geo Coordinates (Latitude & Longitude)',
      type: 'geopoint',
    }),
    defineField({
      name: 'serviceRadius',
      title: 'Service Radius / Areas Served',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Neighborhoods and cities served (e.g. Bellaire, Galleria, Sugar Land, Rosenberg)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'string',
      initialValue: 'Open 24 Hours / 7 Days',
      description: 'Operating hours across all hubs (Default: Open 24 Hours / 7 Days)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hubImage',
      title: 'Hub Location Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Summary Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'businessName',
      subtitle: 'streetAddress',
      media: 'hubImage',
    },
  },
});
