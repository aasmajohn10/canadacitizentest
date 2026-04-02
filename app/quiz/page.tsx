import type { Metadata } from 'next';
import QuizClient from './QuizClient';

export const metadata: Metadata = {
  title: 'Canadian Citizenship Practice Quiz — 259 Questions by Category',
  description:
    'Practice for the Canadian citizenship test with 259 questions filtered by topic and difficulty. Based on the official Discover Canada guide. Instant feedback on every answer.',
};

export default function QuizPage() {
  return <QuizClient />;
}
