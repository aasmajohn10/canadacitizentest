import type { Metadata } from 'next';
import MockClient from './MockClient';

export const metadata: Metadata = {
  title: 'Canadian Citizenship Mock Exam — Timed Practice Tests',
  description:
    'Simulate the real Canadian citizenship test with 5 timed mock exams. 20–30 questions, 30–45 minute timers, and a 75% pass mark — just like the real test. Review your answers instantly.',
};

export default function MockPage() {
  return <MockClient />;
}
