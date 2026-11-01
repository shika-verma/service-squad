import React from 'react';
import Link from 'next/link';
import { CallRailPhone } from './CallRailScript';
import { FALLBACK_PHONE, VERIFIED_LOCATIONS } from '@/data/locations';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* 3 Verified Hub Directory Banner */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              Verified Physical Hub Directory
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Full-Service Multi-Trade Hubs Across Greater Houston
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Operating 24 Hours / 7 Days with dedicated local technicians, water extraction trailers, and emergency plumbing & HVAC units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERIFIED_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-600/10 text-orange-400 border border-orange-500/20">
                      {loc.isCorporateHub ? 'Corporate Hub' : 'Regional Hub'}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                      <span>24/7 Active</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-white">{loc.businessName}</h4>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                    <p className="flex items-start space-x-2">
                      <span className="text-slate-500">📍</span>
                      <span>
                        {loc.streetAddress}
                        {loc.suite && `, ${loc.suite}`}
                        <br />
                        {loc.city}, {loc.state} {loc.zipCode}
                      </span>
                    </p>
                    <p className="flex items-center space-x-2 pt-1">
                      <span className="text-slate-500">📞</span>
                      <CallRailPhone
                        className="text-white hover:text-orange-400 font-bold"
                        phone={loc.phone}
                      />
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="text-slate-500">🕒</span>
                      <span className="text-slate-400">{loc.operatingHours}</span>
                    </p>
                  </div>

                  {/* Service Radius */}
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Dispatched Service Radius:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.serviceRadius.map((area) => (
                        <span
                          key={area}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold">
                  <Link
                    href={loc.targetLandingPage}
                    className="text-orange-400 hover:text-orange-300 transition flex items-center space-x-1"
                  >
                    <span>Hub Landing Page</span>
                    <span>→</span>
                  </Link>
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition flex items-center space-x-1"
                  >
                    <span>Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Multi-Trade Schema Credentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black">
                SS
              </div>
              <div className="text-lg font-black text-white">SERVICE SQUAD</div>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Service Squad operates as an integrated multi-trade emergency response contractor specializing in rapid Water Damage Restoration, licensed Master Plumbing, and 24/7 HVAC heating and cooling solutions across Houston, Stafford, and Richmond, Texas.
            </p>
            <div className="pt-2 text-xs text-slate-300">
              <strong className="text-white">Central Emergency Dispatch:</strong>{' '}
              <CallRailPhone
                className="text-orange-400 hover:underline"
                phone={FALLBACK_PHONE}
              />
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Multi-Trade Divisions
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Water Damage Restoration
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Emergency Flood Cleanup
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Licensed Plumbing Contractor
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Burst Pipe & Slab Leak Repair
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  24/7 HVAC Heating & Cooling
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Sewage Blackwater Remediation
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Admin */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Verified Hubs & CMS
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/locations/houston-tx/" className="hover:text-white transition">
                  Houston Corporate Hub (77081)
                </Link>
              </li>
              <li>
                <Link href="/locations/stafford-tx/" className="hover:text-white transition">
                  Stafford Regional Hub (77477)
                </Link>
              </li>
              <li>
                <Link href="/locations/richmond-tx/" className="hover:text-white transition">
                  Richmond Regional Hub (77469)
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/studio" className="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1">
                  <span>Sanity Studio CMS</span>
                  <span>↗</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Service Squad. All rights reserved. Open 24 Hours / 7 Days across all hubs.</p>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>Primary Dispatch: <strong className="text-white">{FALLBACK_PHONE}</strong></span>
            <span>•</span>
            <span className="text-slate-500 font-mono text-[10px]">CLS-Safe Hardcoded Fallback</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
