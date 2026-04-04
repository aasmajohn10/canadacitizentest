'use client';

import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
        <p className="leading-relaxed">
          {lang === 'fr' ? (
            <>
              © 2025 Canada Citizen Test. Tous droits réservés. {t('footer_disclaimer', lang)}{' '}
              <em>Découvrir le Canada : Les droits et responsabilités liés à la citoyenneté</em>,
              {' '}© Sa Majesté le Roi du chef du Canada, reproduit sous la Licence du gouvernement
              ouvert - Canada. Canada Citizen Test n&apos;est pas affilié au gouvernement du Canada
              ni à Immigration, Réfugiés et Citoyenneté Canada (IRCC). Ce site est à des fins
              éducatives uniquement.
            </>
          ) : (
            <>
              © 2025 Canada Citizen Test. All rights reserved. {t('footer_disclaimer', lang)}{' '}
              <em>Discover Canada: The Rights and Responsibilities of Citizenship</em>,
              {' '}© His Majesty the King in Right of Canada, reproduced under the Open Government
              Licence - Canada. Canada Citizen Test is not affiliated with, endorsed by, or
              connected to the Government of Canada or Immigration, Refugees and Citizenship Canada
              (IRCC). This site is for educational purposes only.
            </>
          )}
        </p>
        <p className="leading-relaxed">
          <span className="font-semibold text-gray-300">{t('footer_note_label', lang)}</span>{' '}
          {t('footer_note_body', lang)}{' '}
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 underline hover:text-white transition-colors"
          >
            canada.ca/citizenship
          </a>
          .{' '}
          <Link href="/privacy" className="text-gray-300 underline hover:text-white transition-colors">
            {t('footer_privacy', lang)}
          </Link>
        </p>
      </div>
    </footer>
  );
}
