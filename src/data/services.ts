export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tradeCategory: 'water-damage' | 'plumbing' | 'hvac';
  schemaTradeType: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  emergencyAvailable: boolean;
  iconName: string;
}

export const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'water-damage-restoration',
    title: 'Water Damage Restoration',
    slug: 'water-damage-restoration',
    tradeCategory: 'water-damage',
    schemaTradeType: 'WaterDamageRestorationService',
    shortDescription:
      'Fast 24/7 water extraction, structural drying, and flood mitigation to protect your property and halt secondary damage.',
    fullDescription:
      'Service Squad delivers certified 24-hour emergency water extraction, thermal moisture mapping, industrial dehumidification, and complete sanitization for residential and commercial properties throughout Greater Houston.',
    features: [
      '30-45 Minute Emergency Dispatch',
      'Direct Insurance Billing Assistance',
      'Industrial Dehumidifiers & Air Movers',
      'Mold Prevention Antimicrobial Treatment',
      'Thermal Imaging Moisture Detection',
    ],
    emergencyAvailable: true,
    iconName: 'Droplets',
  },
  {
    id: 'plumbing-contractor',
    title: 'Licensed Plumbing Services',
    slug: 'plumbing-services',
    tradeCategory: 'plumbing',
    schemaTradeType: 'PlumbingContractor',
    shortDescription:
      'Emergency burst pipe repairs, high-pressure drain jetting, slab leak pinpointing, and complete water heater solutions.',
    fullDescription:
      'Our licensed master plumbers are equipped with high-definition sewer cameras and trenchless repair tools to resolve catastrophic plumbing failures, sewer line backups, and fixture installations 24 hours a day.',
    features: [
      'Master Plumber Certified Repairs',
      'Slab Leak & Hidden Pipe Detection',
      'Emergency Main Drain Clearing & Jetting',
      'Tankless & Standard Water Heater Repair',
      'Commercial & Residential Repiping',
    ],
    emergencyAvailable: true,
    iconName: 'Wrench',
  },
  {
    id: 'hvac-services',
    title: 'Emergency HVAC & AC Repair',
    slug: 'hvac-services',
    tradeCategory: 'hvac',
    schemaTradeType: 'HVACBusiness',
    shortDescription:
      'Comprehensive cooling & heating repairs, emergency compressor service, and indoor air filtration for Texas weather.',
    fullDescription:
      'When extreme Texas heat or unexpected freezes strike, Service Squad HVAC technicians provide round-the-clock diagnostic visits, refrigerant leak repairs, blower motor replacements, and full system tune-ups.',
    features: [
      '24/7 Emergency AC & Heating Dispatch',
      'Precision Refrigerant Diagnostics',
      'Heat Pump & Furnace Safety Checks',
      'Smart Thermostat & Zone Control',
      'Comprehensive Clean Air & Duct Sanitizing',
    ],
    emergencyAvailable: true,
    iconName: 'Flame',
  },
  {
    id: 'sewage-cleanup',
    title: 'Sewage Cleanup & Biohazard Remediation',
    slug: 'sewage-cleanup',
    tradeCategory: 'water-damage',
    schemaTradeType: 'WaterDamageRestorationService',
    shortDescription:
      'Safe, compliant extraction of contaminated sewage water, containment, and hospital-grade decontamination.',
    fullDescription:
      'Sewage backups present serious health hazards. Our specialized response teams contain Category 3 black water, safely extract contaminants, sanitize affected drywall and flooring, and restore hygienic air quality.',
    features: [
      'OSHA Compliant Biohazard Safety Protocols',
      'HEPA Air Scrubbers & Odor Removal',
      'Disposal of Unsalvageable Materials',
      'Certified Decontamination Clearance',
    ],
    emergencyAvailable: true,
    iconName: 'ShieldAlert',
  },
];
