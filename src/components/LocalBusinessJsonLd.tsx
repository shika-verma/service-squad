import React from 'react';
import { LocationHub, VERIFIED_LOCATIONS } from '@/data/locations';

interface LocalBusinessJsonLdProps {
  location?: LocationHub;
  allLocations?: boolean;
}

export function LocalBusinessJsonLd({
  location,
  allLocations = false,
}: LocalBusinessJsonLdProps) {
  // If specific location provided, output that location; otherwise output hub or all hubs
  const targetLocations = location
    ? [location]
    : allLocations
    ? VERIFIED_LOCATIONS
    : [VERIFIED_LOCATIONS[0]]; // Default corporate hub

  const schemas = targetLocations.map((loc) => ({
    '@context': 'https://schema.org',
    // MULTI-TRADE SCHEMA ARRAY APPLIED TO ALL LOCATIONS AS REQUIRED
    '@type': [
      'WaterDamageRestorationService',
      'PlumbingContractor',
      'HVACBusiness',
    ],
    '@id': `https://servicesquadtx.com${loc.targetLandingPage}#localbusiness`,
    name: loc.businessName,
    alternateName: 'Service Squad',
    url: `https://servicesquadtx.com${loc.targetLandingPage}`,
    // PRIMARY LOCAL DISPATCH NUMBER (NO 800 NUMBER)
    telephone: loc.phone,
    priceRange: '$$',
    image: 'https://servicesquadtx.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.suite
        ? `${loc.streetAddress}, ${loc.suite}`
        : loc.streetAddress,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zipCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.geoCoordinates.lat,
      longitude: loc.geoCoordinates.lng,
    },
    hasMap: loc.googleMapsUrl,
    areaServed: loc.serviceRadius.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, TX`,
    })),
    // OPEN 24 HOURS / 7 DAYS ACROSS ALL LOCATIONS
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Emergency Water Damage Restoration',
          description:
            'Rapid water extraction, structural drying, and flood mitigation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Licensed Emergency Plumbing Contractor',
          description:
            'Burst pipes, main line drain cleaning, slab leaks, and water heaters.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Emergency HVAC Repair & Installation',
          description:
            'Heating, AC compressor service, and indoor air purification.',
        },
      },
    ],
  }));

  const jsonLdContent =
    schemas.length === 1 ? schemas[0] : { '@context': 'https://schema.org', '@graph': schemas };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdContent, null, 2),
      }}
    />
  );
}
