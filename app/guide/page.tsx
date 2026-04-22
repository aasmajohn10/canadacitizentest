import type { Metadata } from 'next';
import Link from 'next/link';
import guideData from '@/data/study_guide.json';

export const metadata: Metadata = {
  title: 'Discover Canada Study Guide — Canadian Citizenship Test Notes',
  description:
    'Study notes based on the official Discover Canada guide. Covers all 10 citizenship test topics: Canadian history, government, rights, symbols, and more. Key facts and important dates for every topic.',
};

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Study Guide</h1>
      <p className="text-gray-500 mb-8">
        Select a topic to review key facts and important dates for the Canadian citizenship test.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guideData.map((topic) => (
          <Link
            key={topic.id}
            href={`/guide/${topic.id}`}
            className="text-left p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#C0392B] hover:shadow-md transition-all group"
          >
            <div className="text-3xl mb-3">{topic.icon}</div>
            <h2 className="font-semibold text-gray-900 group-hover:text-[#C0392B] transition-colors mb-1">
              {topic.title}
            </h2>
            <p className="text-xs text-gray-500 mb-2">{topic.summary}</p>
            <p className="text-xs text-gray-400">
              {topic.key_facts.length} key facts · {topic.important_dates.length} important dates
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
