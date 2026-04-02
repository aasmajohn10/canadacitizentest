import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Canadian Citizenship Practice Test — 259 Questions',
  description:
    'Prepare for your Canadian citizenship test with 259 free practice questions based on the official Discover Canada study guide. Quizzes, flashcards, and timed mock exams — all free.',
};

const ctaCards = [
  {
    href: '/quiz',
    icon: '❓',
    title: 'Practice Quiz',
    desc: 'Answer questions by category and difficulty with instant feedback.',
    color: 'hover:border-[#C0392B]',
  },
  {
    href: '/flashcards',
    icon: '🃏',
    title: 'Flashcards',
    desc: 'Flip through every question and mark what you already know.',
    color: 'hover:border-[#C0392B]',
  },
  {
    href: '/guide',
    icon: '📖',
    title: 'Study Guide',
    desc: 'Structured notes, key facts, and important dates by topic.',
    color: 'hover:border-[#C0392B]',
  },
  {
    href: '/mock',
    icon: '🏆',
    title: 'Mock Exam',
    desc: '20 timed questions — just like the real test. Score 75% to pass.',
    color: 'hover:border-[#C0392B]',
  },
];

const steps = [
  { step: '01', title: 'Study', desc: 'Read the study guide and learn key facts by topic.' },
  { step: '02', title: 'Practice', desc: 'Quiz yourself and flip flashcards until you feel confident.' },
  { step: '03', title: 'Pass', desc: 'Take the mock exam to simulate test-day conditions.' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <span className="inline-block text-5xl mb-4">🍁</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Prepare for your Canadian{' '}
            <span className="text-[#C0392B]">Citizenship Test</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
            Free practice questions, flashcards, study guides, and mock exams — everything
            you need to pass with confidence.
          </p>

          {/* Stats bar */}
          <div className="inline-flex flex-wrap justify-center gap-6 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-4 text-sm">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold text-gray-900">259</span>
              <span className="text-gray-400">Questions</span>
            </div>
            <div className="w-px bg-gray-200 self-stretch" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold text-gray-900">10</span>
              <span className="text-gray-400">Categories</span>
            </div>
            <div className="w-px bg-gray-200 self-stretch" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold text-[#C0392B]">Free</span>
              <span className="text-gray-400">Forever</span>
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
              className={`block bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all ${card.color} hover:shadow-md group`}
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
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to start studying?</h2>
        <p className="text-gray-500 mb-6">
          Take a quick practice quiz and see where you stand.
        </p>
        <Link
          href="/quiz"
          className="inline-block px-8 py-3 bg-[#C0392B] text-white rounded-xl font-semibold hover:bg-[#a93226] transition-colors"
        >
          Start Practicing
        </Link>
      </section>
    </div>
  );
}
