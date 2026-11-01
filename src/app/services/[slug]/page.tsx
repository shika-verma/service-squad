import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { VERIFIED_SERVICES, ServiceItem } from '@/data/services';
import { FALLBACK_PHONE, VERIFIED_LOCATIONS } from '@/data/locations';
import { CallRailPhone } from '@/components/CallRailScript';
import { DispatchForm } from '@/components/DispatchForm';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return VERIFIED_SERVICES.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = VERIFIED_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Service Squad',
    };
  }

  return {
    title: `${service.title} | 24/7 Multi-Trade Dispatch Houston TX`,
    description: `${service.shortDescription} Available 24/7 across Houston, Stafford, and Richmond hubs. Dispatch phone: (713) 999-9150.`,
    alternates: {
      canonical: `https://servicesquadtx.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = VERIFIED_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      {/* Service Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="text-orange-400 font-bold">{service.title}</span>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-600/20 text-orange-400 border border-orange-500/30 inline-block">
              Schema Trade: {service.schemaTradeType}
            </span>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <CallRailPhone
                className="px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-black text-sm uppercase tracking-wider shadow-lg shadow-orange-600/30"
                phone={FALLBACK_PHONE}
                showIcon={true}
              />
              <span className="text-xs text-slate-400">
                Dispatched from Houston, Stafford & Richmond Hubs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-4">
              <h2 className="text-2xl font-black text-slate-900">
                Service Scope & Operations
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm">
                {service.fullDescription}
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-4">
                What to Expect During Immediate Dispatch:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feat, i) => (
                  <li
                    key={i}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center space-x-2"
                  >
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hub Selector */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4">
              <h3 className="text-xl font-black">
                Available at all 3 Verified Hub Locations
              </h3>
              <p className="text-xs text-slate-400">
                Our multi-trade trucks carry specialized equipment for {service.title} in each designated territory:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {VERIFIED_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.id}
                    href={loc.targetLandingPage}
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 text-xs block transition"
                  >
                    <div className="font-bold text-white">{loc.city}, TX Hub</div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      {loc.operatingHours}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <DispatchForm defaultService={service.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
