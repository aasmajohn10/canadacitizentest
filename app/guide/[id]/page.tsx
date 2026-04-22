import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import guideData from '@/data/study_guide.json';
import AdBanner from '@/components/AdBanner';

interface Topic {
  id: string;
  title: string;
  icon: string;
  summary: string;
  sections: { heading: string; content: string }[];
  key_facts: string[];
  important_dates: { year: string; event: string }[];
}

const topics = guideData as Topic[];

export function generateStaticParams() {
  return topics.map((topic) => ({ id: topic.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const topic = topics.find((t) => t.id === id);
  if (!topic) return {};
  return {
    title: `${topic.title} — Canadian Citizenship Study Guide`,
    description: topic.summary,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = topics.find((t) => t.id === id);
  if (!topic) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/guide"
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
      >
        ← Back to Study Guide
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{topic.icon}</span>
        <h1 className="text-2xl font-bold text-gray-900">{topic.title}</h1>
      </div>

      <p className="text-gray-500 leading-relaxed mb-8">{topic.summary}</p>

      {/* Sections */}
      <div className="flex flex-col gap-6 mb-8">
        {topic.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-sm font-semibold text-gray-900 mb-2">{section.heading}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      <AdBanner className="mb-8" />

      {/* Key Facts */}
      <div className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-3">Key Facts</h2>
        <ul className="flex flex-col gap-2">
          {topic.key_facts.map((fact, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-700">
              <span className="text-[#C0392B] font-bold mt-0.5 flex-shrink-0">•</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Important Dates */}
      {topic.important_dates.length > 0 && (
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Important Dates</h2>
          <div className="flex flex-col gap-2">
            {topic.important_dates.map((d, i) => (
              <div
                key={i}
                className="grid text-sm"
                style={{ gridTemplateColumns: '7rem 1fr', gap: '0.75rem' }}
              >
                <span className="font-mono text-[#C0392B] font-semibold whitespace-nowrap">
                  {d.year}
                </span>
                <span className="text-gray-700">{d.event}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation to other topics */}
      <div className="border-t border-gray-100 pt-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Other Topics</h2>
        <div className="flex flex-wrap gap-2">
          {topics
            .filter((t) => t.id !== topic.id)
            .map((t) => (
              <Link
                key={t.id}
                href={`/guide/${t.id}`}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-[#C0392B] hover:text-[#C0392B] transition-colors"
              >
                {t.icon} {t.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
