import { defineField, defineType } from 'sanity';

export const callRailType = defineType({
  name: 'callRailSettings',
  title: 'CallRail DNI & Tracking',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Name',
      type: 'string',
      initialValue: 'Primary CallRail DNI Script',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enabled',
      title: 'Enable CallRail Dynamic Number Insertion (DNI)',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle CallRail tracking script on the website',
    }),
    defineField({
      name: 'scriptUrl',
      title: 'CallRail Script Source URL',
      type: 'string',
      description: 'The script URL provided by CallRail (e.g. //cdn.callrail.com/companies/XXXXXXXXX/XXXXXXXXXXXX/12/swap.js)',
      placeholder: '//cdn.callrail.com/companies/YOUR_COMPANY_ID/YOUR_SCRIPT_KEY/12/swap.js',
    }),
    defineField({
      name: 'fallbackPhone',
      title: 'Hardcoded Fallback Phone Number',
      type: 'string',
      initialValue: '(713) 999-9150',
      description: 'Hardcoded across all static HTML templates to prevent Cumulative Layout Shift (CLS)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rawFallbackPhone',
      title: 'Raw Dial Phone Number (tel:)',
      type: 'string',
      initialValue: '+17139999150',
      description: 'RFC 3966 formatted phone for href="tel:..."',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dniTargetClasses',
      title: 'DNI Swap Target CSS Classes',
      type: 'string',
      initialValue: 'callrail-phone, dni-phone, local-dispatch-phone',
      description: 'Comma separated CSS classes to swap numbers cleanly without layout shifts',
    }),
    defineField({
      name: 'swapTimeoutMs',
      title: 'Max Swap Timeout (ms)',
      type: 'number',
      initialValue: 300,
      description: 'Grace period for DNI replacement to safeguard Core Web Vitals',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'fallbackPhone',
    },
  },
});
