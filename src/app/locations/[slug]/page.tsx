import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getLocationBySlug,
  VERIFIED_LOCATIONS,
  FALLBACK_PHONE,
} from '@/data/locations';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd';
import { CallRailPhone } from '@/components/CallRailScript';
import { DispatchForm } from '@/components/DispatchForm';
import { VERIFIED_SERVICES } from '@/data/services';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for the 3 verified hubs
export async function generateStaticParams() {
  return VERIFIED_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return {
      title: 'Location Not Found | Service Squad',
    };
  }

  return {
    title: `${location.businessName} | 24/7 Multi-Trade Dispatch (${location.city}, TX)`,
    description: `${location.businessName} provides 24/7 Water Damage Restoration, Licensed Plumbing, and HVAC Emergency Dispatch in ${location.city}, TX and surrounding areas (${location.serviceRadius.slice(0, 4).join(', ')}). Call (713) 999-9150.`,
    alternates: {
      canonical: `https://servicesquadtx.com${location.targetLandingPage}`,
    },
    openGraph: {
      title: `${location.businessName} | 24/7 Dispatch Hub`,
      description: `Full-service multi-trade dispatch hub at ${location.streetAddress}, ${location.city}, TX ${location.zipCode}. Direct dispatch: (713) 999-9150.`,
      url: `https://servicesquadtx.com${location.targetLandingPage}`,
    },
  };
}

export default function LocationLandingPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      {/* Individual Hub LocalBusiness JSON-LD with multi-trade schema array */}
      <LocalBusinessJsonLd location={location} />

      {/* Hero Section for Specific Hub */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span>Locations</span>
              <span>/</span>
              <span className="text-orange-400 font-bold">{location.city}, TX</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping inline-block" />
              <span>
                {location.isCorporateHub
                  ? 'Corporate Headquarters & Full-Service Hub'
                  : 'Regional Multi-Trade Emergency Hub'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              {location.businessName}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {location.shortDescription}
            </p>

            {/* Hub Quick Info Pill Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">
                  Hub Location
                </span>
                <span className="text-white font-semibold">
                  {location.streetAddress}
                  {location.suite && `, ${location.suite}`}
                  <br />
                  {location.city}, TX {location.zipCode}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">
                  Dispatch Line (24/7)
                </span>
                <CallRailPhone
                  className="text-lg font-black text-orange-400 hover:text-orange-300"
                  phone={location.phone}
                />
              </div>

              <div>
                <span className="text-slate-400 block font-bold uppercase text-[10px] tracking-wider">
                  Operational Schedule
                </span>
                <span className="text-emerald-400 font-bold block">
                  {location.operatingHours}
                </span>
                <span className="text-slate-400 text-[11px]">365 Days / Year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Dispatch Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Detailed Hub Capabilities */}
          <div className="lg:col-span-7 space-y-10">
            {/* Service Radius */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Primary Dispatched Service Radius
              </h2>
              <p className="text-sm text-slate-600">
                Technicians from the <strong>{location.businessName}</strong> hub are dispatched directly to homes and commercial facilities across:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {location.serviceRadius.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-xl text-sm font-bold bg-orange-50 text-orange-800 border border-orange-200"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 pt-2">
                Emergency average arrival time is typically <strong>under 45 minutes</strong> throughout this coverage perimeter.
              </p>
            </div>

            {/* Multi-Trade Capabilities for this Hub */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Full-Service Trades Available at this Hub
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {VERIFIED_SERVICES.map((svc) => (
                  <div
                    key={svc.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex items-start space-x-4 hover:border-orange-500 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xl shrink-0 font-bold">
                      {svc.iconName === 'Droplets' && '💧'}
                      {svc.iconName === 'Wrench' && '🔧'}
                      {svc.iconName === 'Flame' && '❄️'}
                      {svc.iconName === 'ShieldAlert' && '☣️'}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {svc.schemaTradeType}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          24/7 Available
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900">{svc.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {svc.shortDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Directions Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4">
              <h3 className="text-xl font-black">Directions & Physical Presence</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our hub is fully licensed and registered at <strong>{location.streetAddress}{location.suite && `, ${location.suite}`}, {location.city}, TX {location.zipCode}</strong>. We welcome appointments and operate commercial drying yards and response vehicles 24 hours a day.
              </p>
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition"
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Dispatch Form for this Location */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <DispatchForm defaultLocationSlug={location.slug} />

              <div className="mt-6 p-6 bg-slate-100 rounded-2xl border border-slate-200 text-center space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Prefer direct telephone dispatch?
                </span>
                <div>
                  <CallRailPhone
                    className="text-2xl font-black text-slate-900 hover:text-orange-600"
                    phone={location.phone}
                    showIcon={true}
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Zero phone trees. Immediate connection to our local dispatch team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
