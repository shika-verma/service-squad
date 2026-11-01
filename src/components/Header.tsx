'use client';

import React from 'react';
import Link from 'next/link';
import { CallRailPhone } from './CallRailScript';
import { FALLBACK_PHONE, VERIFIED_LOCATIONS } from '@/data/locations';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top 24/7 Alert Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-semibold py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>24/7 Emergency Dispatch Hubs Active — Houston • Stafford • Richmond</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-xs">
            <span>Direct Dispatch:</span>
            <CallRailPhone
              className="text-white hover:text-orange-100 font-extrabold underline decoration-white/40"
              phone={FALLBACK_PHONE}
            />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl font-black text-white tracking-tighter">SS</span>
            </div>
            <div>
              <div className="text-xl font-black tracking-tight flex items-center space-x-1.5">
                <span>SERVICE</span>
                <span className="text-orange-500">SQUAD</span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold">
                Water • Plumbing • HVAC Hubs
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-300">
            <Link href="/#services" className="hover:text-white transition">
              Services
            </Link>
            <div className="relative group py-2">
              <button className="flex items-center space-x-1 hover:text-white transition">
                <span>Hub Locations</span>
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-64 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 py-2 hidden group-hover:block transition animate-in fade-in slide-in-from-top-1">
                {VERIFIED_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.id}
                    href={loc.targetLandingPage}
                    className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-700/60"
                  >
                    <div className="font-bold text-white">{loc.businessName}</div>
                    <div className="text-[11px] text-slate-400">{loc.city}, TX • 24/7 Hub</div>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/#dispatch" className="hover:text-white transition">
              Emergency Dispatch
            </Link>
            <Link
              href="/studio"
              className="text-xs px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-400/30 transition flex items-center space-x-1"
            >
              <span>Sanity CMS</span>
              <span>↗</span>
            </Link>
          </nav>

          {/* Direct Emergency Call Button */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] uppercase tracking-wider font-bold text-orange-400">
                24/7 Dispatch Desk
              </div>
              <CallRailPhone
                className="text-lg font-black text-white hover:text-orange-400"
                phone={FALLBACK_PHONE}
                showIcon={true}
              />
            </div>
            <Link
              href="/#dispatch"
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-orange-600/30 transition"
            >
              Dispatch Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
