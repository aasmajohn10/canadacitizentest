'use client';

import { useState } from 'react';
import { type Question } from '@/lib/questions';
import { useLang } from '@/contexts/LanguageContext';
import { t, categoryLabel } from '@/lib/i18n';

interface FlashcardProps {
  question: Question;
  index: number;
  total: number;
}

export default function Flashcard({ question, index, total }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const { lang } = useLang();

  const questionText = (lang === 'fr' && question.q_fr) ? question.q_fr : question.q;
  const answerText = (lang === 'fr' && question.opts_fr?.length)
    ? question.opts_fr[question.ans]
    : question.opts[question.ans];
  const explanation = (lang === 'fr' && question.exp_fr) ? question.exp_fr : question.exp;
  const cat = categoryLabel(question.category, lang);

  const key = question.id;

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-gray-500">
        {t('flash_card_of', lang, { n: index + 1, total })}
      </p>

      {/* 3D flip card */}
      <div
        key={key}
        onClick={() => setFlipped((f) => !f)}
        className="w-full max-w-lg cursor-pointer"
        style={{ perspective: '1000px' }}
      >
        <div
          style={{
            transition: 'transform 0.5s',
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            position: 'relative',
            height: '220px',
          }}
        >
          {/* Front */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className="absolute inset-0 bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 shadow-sm"
          >
            <span className="text-xs font-semibold text-[#C0392B] uppercase tracking-wider mb-4">
              {cat}
            </span>
            <p className="text-center text-lg font-semibold text-gray-900 leading-snug">
              {questionText}
            </p>
            <p className="mt-4 text-xs text-gray-400">{t('flash_tap', lang)}</p>
          </div>

          {/* Back */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 bg-[#C0392B] rounded-2xl flex flex-col items-center justify-center p-8 shadow-sm"
          >
            <p className="text-center text-lg font-semibold text-white leading-snug">
              {answerText}
            </p>
            <p className="mt-4 text-xs text-white/70 text-center">{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
