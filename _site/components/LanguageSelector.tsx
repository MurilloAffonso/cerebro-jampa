"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/navigation';
import { useEffect } from 'react';
import type { Locale } from '@/i18n/routing';

const LOCALES: { code: Locale; flag: string; label: string }[] = [
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
];

export function LanguageSelector({ scrolled }: { scrolled: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try { localStorage.setItem('preferred-locale', locale); } catch {}
  }, [locale]);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    try { localStorage.setItem('preferred-locale', newLocale); } catch {}
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className="flex items-center"
      style={{ gap: '2px' }}
      role="group"
      aria-label="Select language"
    >
      {LOCALES.map(({ code, flag, label }) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            aria-label={`Switch to ${label}`}
            aria-pressed={isActive}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              padding: '4px 5px',
              borderRadius: '6px',
              border: isActive
                ? '1.5px solid #107997'
                : '1.5px solid transparent',
              background: isActive
                ? 'rgba(16, 121, 151, 0.12)'
                : 'transparent',
              cursor: isActive ? 'default' : 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: isActive ? 700 : 500,
              color: isActive
                ? '#107997'
                : scrolled
                ? 'var(--cor-texto-medio)'
                : 'rgba(255,255,255,0.78)',
              transition: 'all 150ms',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.border = '1.5px solid rgba(16,121,151,0.4)';
                e.currentTarget.style.background = 'rgba(16,121,151,0.07)';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.border = '1.5px solid transparent';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '13px', lineHeight: 1 }}>{flag}</span>
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
