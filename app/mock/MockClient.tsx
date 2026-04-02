'use client';

import { useState, useEffect, useRef } from 'react';
import ProgressBar from '@/components/ProgressBar';
import AdBanner from '@/components/AdBanner';
import { getQuestionsByCategoryAndDifficulty, shuffleQuestions, type Question } from '@/lib/questions';

// ── Exam definitions ────────────────────────────────────────────────────────

interface ExamDef {
  id: number;
  name: string;
  subtitle: string;
  icon: string;
  count: number;
  duration: number; // seconds
  categories: string[] | 'all';
}

const EXAM_DEFS: ExamDef[] = [
  {
    id: 1,
    name: 'General Mix',
    subtitle: 'Random questions from all categories',
    icon: '🎲',
    count: 20,
    duration: 30 * 60,
    categories: 'all',
  },
  {
    id: 2,
    name: 'History & Identity',
    subtitle: "Canada's History, Who We Are, Modern Canada",
    icon: '🏛️',
    count: 20,
    duration: 30 * 60,
    categories: ["Canada's History", 'Who We Are', 'Modern Canada'],
  },
  {
    id: 3,
    name: 'Government & Law',
    subtitle: 'How Canadians Govern Themselves, Federal Elections, The Justice System',
    icon: '⚖️',
    count: 20,
    duration: 30 * 60,
    categories: ['How Canadians Govern Themselves', 'Federal Elections', 'The Justice System'],
  },
  {
    id: 4,
    name: 'Rights & Culture',
    subtitle: "Rights & Responsibilities, Canadian Symbols, Canada's Economy",
    icon: '🍁',
    count: 20,
    duration: 30 * 60,
    categories: ['Rights & Responsibilities', 'Canadian Symbols', "Canada's Economy"],
  },
  {
    id: 5,
    name: 'Full Simulation',
    subtitle: '30 questions from all categories — harder simulation',
    icon: '🏆',
    count: 30,
    duration: 45 * 60,
    categories: 'all',
  },
];

function buildQuestions(exam: ExamDef): Question[] {
  const pool =
    exam.categories === 'all'
      ? getQuestionsByCategoryAndDifficulty('All', 'All')
      : exam.categories.flatMap((cat) => getQuestionsByCategoryAndDifficulty(cat, 'All'));
  return shuffleQuestions(pool).slice(0, exam.count);
}

// ── Types ───────────────────────────────────────────────────────────────────

type Phase = 'menu' | 'exam' | 'results' | 'review';

interface Answer {
  questionIndex: number;
  selected: number | null;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function formatTimeTaken(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  if (m === 0) return `${sec}s`;
  return `${m}m ${sec}s`;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function MockClient() {
  const [phase, setPhase] = useState<Phase>('menu');
  const [activeExam, setActiveExam] = useState<ExamDef | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function startExam(exam: ExamDef) {
    const qs = buildQuestions(exam);
    setActiveExam(exam);
    setQuestions(qs);
    setAnswers(qs.map((_, i) => ({ questionIndex: i, selected: null })));
    setCurrentIndex(0);
    setSelected(null);
    setTimeLeft(exam.duration);
    setTimeTaken(0);
    setPhase('exam');

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setTimeTaken(exam.duration);
          setPhase('results');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  function handleSelect(index: number) {
    setSelected(index);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = { questionIndex: currentIndex, selected: index };
      return next;
    });
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      finishExam();
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(answers[currentIndex + 1]?.selected ?? null);
    }
  }

  function finishExam() {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeTaken((activeExam?.duration ?? 0) - timeLeft);
    setPhase('results');
  }

  const score = answers.filter(
    (a) => a.selected !== null && questions[a.questionIndex]?.ans === a.selected
  ).length;
  const total = questions.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = pct >= 75;

  const categoryBreakdown = (() => {
    const map: Record<string, { correct: number; total: number }> = {};
    questions.forEach((q, i) => {
      if (!map[q.category]) map[q.category] = { correct: 0, total: 0 };
      map[q.category].total++;
      if (answers[i]?.selected === q.ans) map[q.category].correct++;
    });
    return map;
  })();

  // ── MENU ──────────────────────────────────────────────────────────────────
  if (phase === 'menu') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mock Exams</h1>
        <p className="text-gray-500 mb-8">
          Choose an exam below. No feedback shown during the exam — just like the real thing.
          Score 75% or higher to pass.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EXAM_DEFS.map((exam) => (
            <div
              key={exam.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{exam.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-[#C0392B] uppercase tracking-wider mb-0.5">
                    Mock Exam {exam.id}
                  </p>
                  <h2 className="font-semibold text-gray-900">{exam.name}</h2>
                  <p className="text-xs text-gray-400 mt-0.5">{exam.subtitle}</p>
                </div>
              </div>

              <div className="flex gap-4 text-xs text-gray-500">
                <span>{exam.count} questions</span>
                <span>·</span>
                <span>{exam.duration / 60} minutes</span>
                <span>·</span>
                <span>75% to pass</span>
              </div>

              <button
                onClick={() => startExam(exam)}
                className="mt-auto w-full py-2.5 bg-[#C0392B] text-white rounded-lg text-sm font-medium hover:bg-[#a93226] transition-colors"
              >
                Start Exam
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── EXAM ──────────────────────────────────────────────────────────────────
  if (phase === 'exam' && questions.length > 0) {
    const q = questions[currentIndex];
    const urgent = timeLeft < 120;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-[#C0392B] uppercase tracking-wider">
            Mock Exam {activeExam?.id} — {activeExam?.name}
          </span>
          <span
            className={`text-sm font-mono font-semibold px-3 py-1 rounded-full ${
              urgent ? 'bg-red-100 text-[#C0392B]' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        <div className="mb-5">
          <ProgressBar current={currentIndex} total={questions.length} />
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
          <p className="text-lg font-semibold text-gray-900 mb-5 leading-snug">{q.q}</p>
          <div className="flex flex-col gap-2">
            {q.opts.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors border ${
                  selected === i
                    ? 'border-[#C0392B] bg-red-50 text-[#C0392B]'
                    : 'border-gray-200 bg-white text-gray-800 hover:border-[#C0392B] hover:bg-red-50'
                }`}
              >
                <span className="inline-block w-5 font-bold text-gray-400 mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={finishExam}
            className="px-4 py-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Submit Early
          </button>
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="px-6 py-2.5 bg-[#C0392B] text-white rounded-lg font-medium hover:bg-[#a93226] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {currentIndex + 1 >= questions.length ? 'Submit' : 'Next →'}
          </button>
        </div>
      </div>
    );
  }

  // ── RESULTS ───────────────────────────────────────────────────────────────
  if (phase === 'results') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-lg">{activeExam?.icon}</span>
          <h1 className="text-xl font-bold text-gray-900">
            Mock Exam {activeExam?.id}: {activeExam?.name}
          </h1>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-6 text-center">
          <p className="text-5xl font-bold text-gray-900 mb-1">{score}/{total}</p>
          <p className="text-gray-500 mb-3">{pct}% correct</p>
          <span
            className={`inline-block px-5 py-1.5 rounded-full font-semibold mb-4 ${
              passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-[#C0392B]'
            }`}
          >
            {passed ? '✓ PASS' : '✗ FAIL'}
          </span>
          <p className="text-sm text-gray-400">Time taken: {formatTimeTaken(timeTaken)}</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Breakdown by Category</h2>
          <div className="flex flex-col gap-3">
            {Object.entries(categoryBreakdown).map(([cat, { correct, total: t }]) => (
              <div key={cat}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{cat}</span>
                  <span className="text-gray-500">{correct}/{t}</span>
                </div>
                <ProgressBar current={correct} total={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 justify-center mb-8">
          <button
            onClick={() => setPhase('review')}
            className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors"
          >
            Review Answers
          </button>
          <button
            onClick={() => activeExam && startExam(activeExam)}
            className="px-5 py-2.5 bg-[#C0392B] text-white rounded-lg text-sm font-medium hover:bg-[#a93226] transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => setPhase('menu')}
            className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors"
          >
            All Exams
          </button>
        </div>

        <div className="flex justify-center">
          <AdBanner />
        </div>
      </div>
    );
  }

  // ── REVIEW ────────────────────────────────────────────────────────────────
  if (phase === 'review') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button
          onClick={() => setPhase('results')}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
        >
          ← Back to Results
        </button>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Answer Review</h1>

        <div className="flex flex-col gap-4">
          {questions.map((q, i) => {
            const userAns = answers[i]?.selected;
            const correct = userAns === q.ans;
            return (
              <div
                key={q.id}
                className={`bg-white border rounded-2xl p-5 ${
                  correct ? 'border-green-200' : 'border-red-200'
                }`}
              >
                <div className="flex gap-2 items-start mb-3">
                  <span
                    className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-[#C0392B]'
                    }`}
                  >
                    {correct ? '✓' : '✗'}
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{q.category}</p>
                    <p className="text-sm font-medium text-gray-900">{q.q}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 pl-7 text-xs">
                  {userAns !== null && userAns !== q.ans && (
                    <p className="text-red-500">Your answer: {q.opts[userAns]}</p>
                  )}
                  {userAns === null && (
                    <p className="text-gray-400">Not answered</p>
                  )}
                  <p className="text-green-700">Correct: {q.opts[q.ans]}</p>
                  <p className="text-gray-400 mt-1">{q.exp}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setPhase('menu')}
            className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors"
          >
            All Exams
          </button>
          <button
            onClick={() => activeExam && startExam(activeExam)}
            className="px-6 py-2.5 bg-[#C0392B] text-white rounded-lg font-medium hover:bg-[#a93226] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return null;
}
