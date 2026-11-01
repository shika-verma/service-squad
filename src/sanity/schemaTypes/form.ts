import { defineField, defineType } from 'sanity';

export const formType = defineType({
  name: 'siteForm',
  title: 'Lead & Contact Forms',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Form Name',
      type: 'string',
      description: 'e.g. 24/7 Emergency Dispatch Form, Free Estimate Form, Hub Direct Contact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formId',
      title: 'Form Identifier',
      type: 'string',
      description: 'Unique key (e.g. emergency-dispatch, quote-request, quick-contact)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Form Heading',
      type: 'string',
      initialValue: 'Request Immediate Emergency Dispatch',
    }),
    defineField({
      name: 'subheadline',
      title: 'Form Subheading',
      type: 'string',
      initialValue: 'Local technicians on call 24 Hours / 7 Days. Typical response time under 45 minutes.',
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Label',
      type: 'string',
      initialValue: 'Dispatch Service Squad Now',
    }),
    defineField({
      name: 'recipientEmail',
      title: 'Notification Recipient Email',
      type: 'string',
      description: 'Internal routing email for immediate alert notifications',
    }),
    defineField({
      name: 'successMessage',
      title: 'Submission Success Message',
      type: 'text',
      rows: 2,
      initialValue: 'Thank you! Your dispatch request has been received. A local technician is reviewing your ticket and will call you right away at the number provided.',
    }),
    defineField({
      name: 'fields',
      title: 'Included Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Field Name' },
            { name: 'label', type: 'string', title: 'Label' },
            {
              name: 'fieldType',
              type: 'string',
              title: 'Field Type',
              options: {
                list: ['text', 'tel', 'email', 'select', 'textarea'],
              },
            },
            { name: 'required', type: 'boolean', title: 'Required' },
            { name: 'placeholder', type: 'string', title: 'Placeholder' },
            {
              name: 'options',
              type: 'array',
              of: [{ type: 'string' }],
              title: 'Dropdown Options (if select)',
            },
          ],
        },
      ],
    }),
  ],
});
