'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  const links = [
    { href: '/', label: t('nav_home', lang) },
    { href: '/quiz', label: t('nav_quiz', lang) },
    { href: '/flashcards', label: t('nav_flashcards', lang) },
    { href: '/guide', label: t('nav_guide', lang) },
    { href: '/mock', label: t('nav_mock', lang) },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
          <MapleleafIcon />
          <span>Canada Citizen Test</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href
                  ? 'bg-[#C0392B] text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Language toggle */}
          <div className="ml-3 flex items-center border border-gray-200 rounded-md overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === 'en' ? 'bg-[#C0392B] text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === 'fr' ? 'bg-[#C0392B] text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href
                  ? 'bg-[#C0392B] text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile language toggle */}
          <div className="mt-2 flex items-center gap-1 border border-gray-200 rounded-md overflow-hidden text-xs font-semibold w-fit">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition-colors ${
                lang === 'en' ? 'bg-[#C0392B] text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`px-3 py-1.5 transition-colors ${
                lang === 'fr' ? 'bg-[#C0392B] text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              FR
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function MapleleafIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 100 100"
      fill="#C0392B"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 5 L57 35 L85 25 L72 48 L95 55 L70 60 L75 90 L50 78 L25 90 L30 60 L5 55 L28 48 L15 25 L43 35 Z" />
    </svg>
  );
}
