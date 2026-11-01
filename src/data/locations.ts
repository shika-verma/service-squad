export interface LocationHub {
  id: string;
  name: string;
  businessName: string;
  slug: string;
  targetLandingPage: string;
  isCorporateHub: boolean;
  schemaTypes: string[];
  phone: string;
  rawPhone: string;
  streetAddress: string;
  suite?: string;
  city: string;
  state: string;
  zipCode: string;
  serviceRadius: string[];
  operatingHours: string;
  googleMapsUrl: string;
  geoCoordinates: {
    lat: number;
    lng: number;
  };
  headline: string;
  shortDescription: string;
}

export const VERIFIED_LOCATIONS: LocationHub[] = [
  {
    id: 'houston-corporate-hub',
    name: 'Corporate Hub - Houston',
    businessName: 'Service Squad',
    slug: 'houston-tx',
    targetLandingPage: '/locations/houston-tx/',
    isCorporateHub: true,
    schemaTypes: [
      'WaterDamageRestorationService',
      'PlumbingContractor',
      'HVACBusiness',
    ],
    phone: '(713) 999-9150',
    rawPhone: '+17139999150',
    streetAddress: '7321 Ashcroft Dr',
    city: 'Houston',
    state: 'TX',
    zipCode: '77081',
    serviceRadius: [
      'Bellaire',
      'Galleria',
      'Meyerland',
      'Heights',
      'Inner Loop',
      'West University Place',
      'Montrose',
    ],
    operatingHours: 'Open 24 Hours / 7 Days',
    googleMapsUrl:
      'https://www.google.com/maps/search/7321+Ashcroft+Dr,+Houston,+TX+77081',
    geoCoordinates: {
      lat: 29.7093,
      lng: -95.4952,
    },
    headline: 'Corporate Headquarters & 24/7 Primary Dispatch Hub',
    shortDescription:
      'Service Squad corporate hub serving central Houston, Inner Loop, Galleria, and Bellaire with rapid 24/7 water damage restoration, licensed plumbing, and HVAC emergency services.',
  },
  {
    id: 'stafford-hub',
    name: 'Stafford Hub',
    businessName: 'Service Squad of Stafford',
    slug: 'stafford-tx',
    targetLandingPage: '/locations/stafford-tx/',
    isCorporateHub: false,
    schemaTypes: [
      'WaterDamageRestorationService',
      'PlumbingContractor',
      'HVACBusiness',
    ],
    phone: '(713) 999-9150',
    rawPhone: '+17139999150',
    streetAddress: '435 Murphy Rd',
    suite: 'Suite B1-121',
    city: 'Stafford',
    state: 'TX',
    zipCode: '77477',
    serviceRadius: [
      'Sugar Land',
      'Missouri City',
      'Meadows Place',
      'Alief',
      'Stafford',
      'Fondren Southwest',
    ],
    operatingHours: 'Open 24 Hours / 7 Days',
    googleMapsUrl:
      'https://www.google.com/maps/search/435+Murphy+Rd,+Suite+B1-121,+Stafford,+TX+77477',
    geoCoordinates: {
      lat: 29.6202,
      lng: -95.5577,
    },
    headline: 'Stafford, Sugar Land & Missouri City Regional Hub',
    shortDescription:
      'Rapid-response multi-trade dispatch hub providing 24/7 emergency water extraction, expert plumbing repairs, and full HVAC service across Fort Bend and southwest Houston.',
  },
  {
    id: 'richmond-hub',
    name: 'Richmond Hub',
    businessName: 'Service Squad of Richmond',
    slug: 'richmond-tx',
    targetLandingPage: '/locations/richmond-tx/',
    isCorporateHub: false,
    schemaTypes: [
      'WaterDamageRestorationService',
      'PlumbingContractor',
      'HVACBusiness',
    ],
    phone: '(713) 999-9150',
    rawPhone: '+17139999150',
    streetAddress: '1319 Pine Mills Dr',
    city: 'Richmond',
    state: 'TX',
    zipCode: '77469',
    serviceRadius: [
      'Rosenberg',
      'Pecan Grove',
      'Greatwood',
      'Fulshear',
      'Katy (South)',
      'Richmond',
    ],
    operatingHours: 'Open 24 Hours / 7 Days',
    googleMapsUrl:
      'https://www.google.com/maps/search/1319+Pine+Mills+Dr,+Richmond,+TX+77469',
    geoCoordinates: {
      lat: 29.5822,
      lng: -95.7608,
    },
    headline: 'Richmond, Rosenberg & West Houston Emergency Hub',
    shortDescription:
      'Full-service multi-category hub operating around the clock for flood damage drying, master plumbing solutions, and emergency heating & AC repairs in Richmond and surrounding communities.',
  },
];

export const FALLBACK_PHONE = '(713) 999-9150';
export const FALLBACK_RAW_PHONE = '+17139999150';

export function getLocationBySlug(slug: string): LocationHub | undefined {
  const cleanSlug = slug.replace('/locations/', '').replace(/\//g, '');
  return VERIFIED_LOCATIONS.find(
    (loc) => loc.slug === cleanSlug || loc.slug === slug
  );
}
