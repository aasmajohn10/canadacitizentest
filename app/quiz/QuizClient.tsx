'use client';

import { useState } from 'react';
import QuizCard from '@/components/QuizCard';
import ProgressBar from '@/components/ProgressBar';
import AdBanner from '@/components/AdBanner';
import {
  getQuestionsByCategoryAndDifficulty,
  shuffleQuestions,
  CATEGORIES,
  type Question,
} from '@/lib/questions';

const DIFFICULTY_TABS = ['All', 'Easy', 'Medium', 'Hard'];
const CATEGORY_TABS = ['All', ...CATEGORIES];

export default function QuizClient() {
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [questions, setQuestions] = useState<Question[]>(() =>
    shuffleQuestions(getQuestionsByCategoryAndDifficulty('All', 'All'))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function applyFilters(cat: string, diff: string) {
    const filtered = shuffleQuestions(
      getQuestionsByCategoryAndDifficulty(cat, diff === 'All' ? 'All' : diff.toLowerCase())
    );
    setQuestions(filtered);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setDone(false);
  }

  function handleCategoryChange(cat: string) {
    setCategory(cat);
    applyFilters(cat, difficulty);
  }

  function handleDifficultyChange(diff: string) {
    setDifficulty(diff);
    applyFilters(category, diff);
  }

  function handleAnswer(index: number) {
    setSelectedAnswer(index);
    if (index === questions[currentIndex].ans) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    }
  }

  function handleRestart() {
    applyFilters(category, difficulty);
  }

  const showAd = currentIndex > 0 && currentIndex % 5 === 0 && selectedAnswer !== null;
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const passed = pct >= 75;

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center text-gray-500">
        No questions match these filters. Try a different combination.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Practice Quiz</h1>

      {/* Category filter */}
      <div className="mb-3 overflow-x-auto">
        <div className="flex gap-2 pb-1">
          {CATEGORY_TABS.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                category === cat
                  ? 'bg-[#C0392B] text-white border-[#C0392B]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#C0392B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty filter */}
      <div className="mb-6 flex gap-2">
        {DIFFICULTY_TABS.map((diff) => (
          <button
            key={diff}
            onClick={() => handleDifficultyChange(diff)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              difficulty === diff
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
          >
            {diff}
          </button>
        ))}
      </div>

      {done ? (
        /* Results screen */
        <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-4xl font-bold text-gray-900 mb-1">
            {score}/{questions.length}
          </p>
          <p className="text-gray-500 mb-4">{pct}% correct</p>
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
              passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-[#C0392B]'
            }`}
          >
            {passed ? 'PASS — Great work!' : 'FAIL — Keep studying!'}
          </span>
          <div className="mb-6">
            <ProgressBar current={score} total={questions.length} />
          </div>
          <button
            onClick={handleRestart}
            className="px-6 py-2.5 bg-[#C0392B] text-white rounded-lg font-medium hover:bg-[#a93226] transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        /* Quiz in progress */
        <>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-gray-900">
              Score: {score}/{currentIndex}
            </span>
          </div>
          <div className="mb-4">
            <ProgressBar current={currentIndex} total={questions.length} />
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
            <QuizCard
              question={questions[currentIndex]}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
            />
          </div>

          {selectedAnswer !== null && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-[#C0392B] text-white rounded-lg font-medium hover:bg-[#a93226] transition-colors"
              >
                {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Question'}
              </button>
            </div>
          )}

          {showAd && (
            <div className="mt-8 flex justify-center">
              <AdBanner />
            </div>
          )}
        </>
      )}
    </div>
  );
}
