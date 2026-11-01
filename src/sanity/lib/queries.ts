import { groq } from 'next-sanity';

export const LOCATIONS_QUERY = groq`
  *[_type == "location"] | order(isCorporateHub desc, name asc) {
    _id,
    name,
    businessName,
    "slug": slug.current,
    targetLandingPage,
    isCorporateHub,
    schemaTypes,
    phone,
    streetAddress,
    suite,
    city,
    state,
    zipCode,
    googleMapsUrl,
    serviceRadius,
    operatingHours,
    shortDescription
  }
`;

export const LOCATION_BY_SLUG_QUERY = groq`
  *[_type == "location" && (slug.current == $slug || targetLandingPage == $targetPath)][0] {
    _id,
    name,
    businessName,
    "slug": slug.current,
    targetLandingPage,
    isCorporateHub,
    schemaTypes,
    phone,
    streetAddress,
    suite,
    city,
    state,
    zipCode,
    googleMapsUrl,
    geoCoordinates,
    serviceRadius,
    operatingHours,
    shortDescription
  }
`;

export const SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    tradeCategory,
    shortDescription,
    fullDescription,
    iconName,
    emergencyAvailable,
    features
  }
`;

export const CALLRAIL_SETTINGS_QUERY = groq`
  *[_type == "callRailSettings"][0] {
    title,
    enabled,
    scriptUrl,
    fallbackPhone,
    rawFallbackPhone,
    dniTargetClasses,
    swapTimeoutMs
  }
`;
