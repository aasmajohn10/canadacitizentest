'use client';

import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export default function HomeClient() {
  const { lang } = useLang();

  const ctaCards = [
    {
      href: '/quiz',
      icon: '❓',
      title: t('home_card_quiz_title', lang),
      desc: t('home_card_quiz_desc', lang),
    },
    {
      href: '/flashcards',
      icon: '🃏',
      title: t('home_card_flash_title', lang),
      desc: t('home_card_flash_desc', lang),
    },
    {
      href: '/guide',
      icon: '📖',
      title: t('home_card_guide_title', lang),
      desc: t('home_card_guide_desc', lang),
    },
    {
      href: '/mock',
      icon: '🏆',
      title: t('home_card_mock_title', lang),
      desc: t('home_card_mock_desc', lang),
    },
  ];

  const steps = [
    {
      step: '01',
      title: t('home_step_study_title', lang),
      desc: t('home_step_study_desc', lang),
    },
    {
      step: '02',
      title: t('home_step_practice_title', lang),
      desc: t('home_step_practice_desc', lang),
    },
    {
      step: '03',
      title: t('home_step_pass_title', lang),
      desc: t('home_step_pass_desc', lang),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <span className="inline-block text-5xl mb-4">🍁</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {lang === 'fr' ? (
              <>
                Préparez-vous à votre test de{' '}
                <span className="text-[#C0392B]">citoyenneté canadienne</span>
              </>
            ) : (
              <>
                Prepare for your Canadian{' '}
                <span className="text-[#C0392B]">Citizenship Test</span>
              </>
            )}
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
            {t('home_hero_sub', lang)}
          </p>

          {/* Stats bar */}
          <div className="inline-flex flex-wrap justify-center gap-6 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-4 text-sm">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold text-gray-900">259</span>
              <span className="text-gray-400">{t('home_stat_questions', lang)}</span>
            </div>
            <div className="w-px bg-gray-200 self-stretch" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold text-gray-900">10</span>
              <span className="text-gray-400">{t('home_stat_categories', lang)}</span>
            </div>
            <div className="w-px bg-gray-200 self-stretch" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold text-[#C0392B]">{t('home_stat_free', lang)}</span>
              <span className="text-gray-400">{t('home_stat_forever', lang)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ctaCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all hover:border-[#C0392B] hover:shadow-md group"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h2 className="font-semibold text-gray-900 text-base mb-1 group-hover:text-[#C0392B] transition-colors">
                {card.title}
              </h2>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
            {t('home_how_title', lang)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-[#C0392B] mb-2">{s.step}</span>
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{t('home_cta_title', lang)}</h2>
        <p className="text-gray-500 mb-6">{t('home_cta_sub', lang)}</p>
        <Link
          href="/quiz"
          className="inline-block px-8 py-3 bg-[#C0392B] text-white rounded-xl font-semibold hover:bg-[#a93226] transition-colors"
        >
          {t('home_cta_btn', lang)}
        </Link>
      </section>
    </div>
  );
}
