import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Free Canadian Citizenship Practice Test - 259 Questions',
  description:
    'Prepare for your Canadian citizenship test with 259 free practice questions based on the official Discover Canada study guide. Quizzes, flashcards, and timed mock exams, all free.',
};

export default function HomePage() {
  return <HomeClient />;
}
