import type { Metadata } from 'next';
import GuideClient from './GuideClient';

export const metadata: Metadata = {
  title: 'Discover Canada Study Guide — Canadian Citizenship Test Notes',
  description:
    'Study notes based on the official Discover Canada guide. Covers all 10 citizenship test topics: Canadian history, government, rights, symbols, and more. Key facts and important dates for every topic.',
};

export default function GuidePage() {
  return <GuideClient />;
}
