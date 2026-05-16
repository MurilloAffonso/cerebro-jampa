"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/navigation';
import { useEffect } from 'react';
import type { Locale } from '@/i18n/routing';

const LOCALES: { code: Locale; flag: string; label: string }[] = [
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
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
            title={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              border: isActive
                ? '2px solid #107997'
                : '2px solid transparent',
              background: isActive
                ? 'rgba(16, 121, 151, 0.15)'
                : 'transparent',
              cursor: isActive ? 'default' : 'pointer',
              transition: 'all 150ms',
              lineHeight: 1,
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.border = '2px solid rgba(16,121,151,0.4)';
                e.currentTarget.style.background = 'rgba(16,121,151,0.08)';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '18px', lineHeight: 1 }}>{flag}</span>
          </button>
        );
      })}
    </div>
  );
}
