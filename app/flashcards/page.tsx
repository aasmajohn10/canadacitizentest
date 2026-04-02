import type { Metadata } from 'next';
import FlashcardsClient from './FlashcardsClient';

export const metadata: Metadata = {
  title: 'Canadian Citizenship Flashcards — Study All 259 Questions',
  description:
    'Study for your Canadian citizenship test with interactive flashcards. Flip through all 259 questions from the Discover Canada guide, shuffle the deck, and mark what you know.',
};

export default function FlashcardsPage() {
  return <FlashcardsClient />;
}
