'use client';

import React from 'react';
import Script from 'next/script';
import { FALLBACK_PHONE, FALLBACK_RAW_PHONE } from '@/data/locations';

interface CallRailScriptProps {
  scriptUrl?: string;
  enabled?: boolean;
}

export function CallRailScript({
  scriptUrl = process.env.NEXT_PUBLIC_CALLRAIL_SCRIPT_URL,
  enabled = true,
}: CallRailScriptProps) {
  if (!enabled || !scriptUrl) {
    return null;
  }

  return (
    <Script
      id="callrail-dni"
      src={scriptUrl}
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && (window as unknown as { CallTrk?: { swap?: () => void } }).CallTrk) {
          try {
            (window as unknown as { CallTrk: { swap: () => void } }).CallTrk.swap();
          } catch (e) {
            console.warn('CallRail swap error:', e);
          }
        }
      }}
    />
  );
}

/**
 * CLS-Safe Phone Component
 * Hardcoded fallback (713) 999-9150 rendered on the server to prevent Cumulative Layout Shift (CLS).
 * Decorated with standard CallRail DNI swap classes so dynamic tracking numbers seamlessly swap in without jumping.
 */
interface CallRailPhoneProps {
  className?: string;
  phone?: string;
  rawPhone?: string;
  showIcon?: boolean;
}

export function CallRailPhone({
  className = '',
  phone = FALLBACK_PHONE,
  rawPhone = FALLBACK_RAW_PHONE,
  showIcon = false,
}: CallRailPhoneProps) {
  return (
    <a
      href={`tel:${rawPhone}`}
      className={`callrail-dni callrail-phone dni-phone inline-flex items-center font-bold tracking-tight transition-colors ${className}`}
      aria-label={`Call local dispatch at ${phone}`}
    >
      {showIcon && (
        <svg
          className="mr-2 h-4 w-4 shrink-0 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      )}
      <span className="tabular-nums">{phone}</span>
    </a>
  );
}
