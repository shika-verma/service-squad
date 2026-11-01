import { defineField, defineType } from 'sanity';

export const formSubmissionType = defineType({
  name: 'formSubmission',
  title: 'Form Submission / Lead',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'serviceRequested',
      title: 'Service Requested',
      type: 'string',
    }),
    defineField({
      name: 'locationHub',
      title: 'Dispatched Hub / Area',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Emergency Details / Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'isEmergency',
      title: 'Emergency Immediate Dispatch Checked',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Dispatched', value: 'dispatched' },
          { title: 'In Progress', value: 'in_progress' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'phone',
      description: 'serviceRequested',
    },
  },
});
