'use client';

import { useState, useMemo } from 'react';
import Flashcard from '@/components/Flashcard';
import {
  getAllQuestions,
  getQuestionsByCategory,
  shuffleQuestions,
  CATEGORIES,
  type Question,
} from '@/lib/questions';

export default function FlashcardsClient() {
  const [category, setCategory] = useState('All');
  const [deck, setDeck] = useState<Question[]>(() => getAllQuestions());
  const [known, setKnown] = useState<Set<string>>(new Set());
  const [index, setIndex] = useState(0);

  const activeDeck = useMemo(() => deck.filter((q) => !known.has(q.id)), [deck, known]);
  const current = activeDeck[index] ?? null;

  function handleCategory(cat: string) {
    setCategory(cat);
    const filtered = cat === 'All' ? getAllQuestions() : getQuestionsByCategory(cat);
    setDeck(filtered);
    setIndex(0);
    setKnown(new Set());
  }

  function handleShuffle() {
    const filtered = category === 'All' ? getAllQuestions() : getQuestionsByCategory(category);
    setDeck(shuffleQuestions(filtered));
    setIndex(0);
    setKnown(new Set());
  }

  function handlePrev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function handleNext() {
    setIndex((i) => Math.min(activeDeck.length - 1, i + 1));
  }

  function handleMarkKnown() {
    if (!current) return;
    const newKnown = new Set(known);
    newKnown.add(current.id);
    setKnown(newKnown);
    // stay at same index (next card slides in), but clamp
    setIndex((i) => Math.min(i, activeDeck.length - 2));
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Flashcards</h1>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <select
          value={category}
          onChange={(e) => handleCategory(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:border-[#C0392B]"
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 hover:border-gray-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Shuffle
        </button>

        {known.size > 0 && (
          <span className="text-xs text-gray-400">
            {known.size} marked as known
          </span>
        )}
      </div>

      {activeDeck.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl font-semibold text-gray-900 mb-2">You know them all!</p>
          <p className="text-gray-500 mb-6">All cards in this deck are marked as known.</p>
          <button
            onClick={() => { setKnown(new Set()); setIndex(0); }}
            className="px-6 py-2.5 bg-[#C0392B] text-white rounded-lg font-medium hover:bg-[#a93226] transition-colors"
          >
            Reset Deck
          </button>
        </div>
      ) : current ? (
        <>
          <Flashcard question={current} index={index} total={activeDeck.length} />

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Previous
            </button>

            <button
              onClick={handleMarkKnown}
              className="px-4 py-2 border border-green-200 bg-green-50 rounded-lg text-sm font-medium text-green-700 hover:bg-green-100 transition-colors"
            >
              ✓ Mark as Known
            </button>

            <button
              onClick={handleNext}
              disabled={index >= activeDeck.length - 1}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
