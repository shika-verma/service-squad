import React from 'react';
import Link from 'next/link';
import { CallRailPhone } from '@/components/CallRailScript';
import { DispatchForm } from '@/components/DispatchForm';
import { FALLBACK_PHONE, VERIFIED_LOCATIONS } from '@/data/locations';
import { VERIFIED_SERVICES } from '@/data/services';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section with Live Dispatch Backdrop */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden py-16 sm:py-24">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Dispatch CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping inline-block" />
                <span>24/7 On-Call Emergency Response</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                Greater Houston’s Multi-Trade{' '}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Emergency Squad.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Full-service rapid dispatch hubs across <strong>Houston</strong>, <strong>Stafford</strong>, and <strong>Richmond</strong>. We deliver licensed water extraction, plumbing repairs, and HVAC diagnostics on-site within 45 minutes.
              </p>

              {/* Verified Multi-Trade Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200">
                  💧 Water Damage Restoration
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200">
                  🔧 Plumbing Contractor
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200">
                  ❄️ 24/7 HVAC Services
                </span>
              </div>

              {/* Immediate Call Action Box */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="p-4 bg-orange-600 rounded-2xl shadow-xl shadow-orange-600/25 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-extrabold text-orange-100">
                      Primary Local Dispatch (24/7)
                    </div>
                    <CallRailPhone
                      className="text-2xl font-black text-white hover:text-orange-100"
                      phone={FALLBACK_PHONE}
                    />
                  </div>
                </div>

                <a
                  href="#dispatch"
                  className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm text-center transition flex items-center justify-center space-x-2"
                >
                  <span>Request Online Dispatch</span>
                  <span>↓</span>
                </a>
              </div>

              {/* CLS Fallback and Guarantee Notice */}
              <p className="text-xs text-slate-400 flex items-center space-x-2 pt-1">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Open 24 Hours / 7 Days Across All 3 Texas Hubs • Deprecated 800 Number Replaced</span>
              </p>
            </div>

            {/* Right Column: Dispatch Form Card */}
            <div className="lg:col-span-5" id="dispatch">
              <DispatchForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Verified Hubs Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            Verified Location Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Three Strategically Located Emergency Hubs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Each hub operates as a full-service headquarters equipped with dedicated industrial drying rigs, sewer jetting vans, and licensed multi-trade technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_LOCATIONS.map((loc, idx) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl hover:border-orange-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 font-black text-sm flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700">
                    {loc.isCorporateHub ? 'Corporate Hub' : 'Regional Hub'}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  {loc.businessName}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-semibold">{loc.headline}</p>

                {/* Address & Direct Dispatch Phone */}
                <div className="mt-6 space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                  <div>
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">
                      Physical Address:
                    </span>
                    <span className="font-semibold text-slate-800">
                      {loc.streetAddress}
                      {loc.suite && `, ${loc.suite}`}
                      <br />
                      {loc.city}, {loc.state} {loc.zipCode}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">
                      Dispatch Phone:
                    </span>
                    <CallRailPhone
                      className="text-base font-black text-orange-600 hover:text-orange-700"
                      phone={loc.phone}
                    />
                  </div>

                  <div>
                    <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">
                      Operating Hours:
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {loc.operatingHours}
                    </span>
                  </div>
                </div>

                {/* Service Radius */}
                <div className="mt-6">
                  <span className="font-bold text-slate-900 text-xs block mb-2">
                    Primary Service Radius:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.serviceRadius.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <Link
                  href={loc.targetLandingPage}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white transition flex items-center space-x-1.5 shadow-md"
                >
                  <span>View Hub Page</span>
                  <span>→</span>
                </Link>

                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 transition flex items-center space-x-1"
                >
                  <span>Map Directions</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Trade Services Overview */}
      <section className="bg-slate-900 text-white py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              Multi-Trade Schema Array Supported
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
              Integrated Trade Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              One call dispatches certified technicians for water damage remediation, licensed plumbing, and round-the-clock HVAC repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFIED_SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-500/50 hover:bg-slate-800 transition group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/10 border border-orange-500/20 text-orange-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {svc.iconName === 'Droplets' && '💧'}
                    {svc.iconName === 'Wrench' && '🔧'}
                    {svc.iconName === 'Flame' && '❄️'}
                    {svc.iconName === 'ShieldAlert' && '☣️'}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {svc.schemaTradeType}
                  </span>
                  <h3 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {svc.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {svc.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center space-x-1.5">
                        <span className="text-orange-500 text-xs">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-orange-400 hover:text-orange-300 transition flex items-center space-x-1"
                  >
                    <span>Service Details</span>
                    <span>→</span>
                  </Link>
                  <CallRailPhone
                    className="text-slate-300 hover:text-white"
                    phone={FALLBACK_PHONE}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sanity CMS & System Integration Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-blue-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-600/40 text-blue-200 text-xs font-bold">
              <span>Sanity CMS Connected (Project: qsg1mmpf)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Manage Services, Locations, Forms & CallRail DNI in Sanity Studio
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
              The CMS schema is fully wired for Location hubs, multi-trade categories, dynamic lead capture forms, and CallRail DNI scripts. Launch the built-in Studio to edit content directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/studio"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition text-center"
            >
              Open Sanity Studio ↗
            </Link>
            <a
              href={`tel:${FALLBACK_PHONE}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition text-center"
            >
              Test Dispatch Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
