'use client';

import { useState } from 'react';
import AdBanner from '@/components/AdBanner';
import guideData from '@/data/study_guide.json';

interface ImportantDate {
  year: string;
  event: string;
}

interface Section {
  heading: string;
  content: string;
}

interface Topic {
  id: string;
  title: string;
  icon: string;
  summary: string;
  sections: Section[];
  key_facts: string[];
  important_dates: ImportantDate[];
}

const topics = guideData as Topic[];

export default function GuideClient() {
  const [selected, setSelected] = useState<Topic | null>(null);

  if (selected) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
        >
          ← Back to Study Guide
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{selected.icon}</span>
          <h1 className="text-2xl font-bold text-gray-900">{selected.title}</h1>
        </div>

        <p className="text-gray-500 leading-relaxed mb-8">{selected.summary}</p>

        {/* Sections */}
        <div className="flex flex-col gap-6 mb-8">
          {selected.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-sm font-semibold text-gray-900 mb-2">{section.heading}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Key Facts */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Key Facts</h2>
          <ul className="flex flex-col gap-2">
            {selected.key_facts.map((fact, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="text-[#C0392B] font-bold mt-0.5 flex-shrink-0">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Dates */}
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Important Dates</h2>
          <div className="flex flex-col gap-2">
            {selected.important_dates.map((d, i) => (
              <div key={i} className="grid text-sm" style={{ gridTemplateColumns: '7rem 1fr', gap: '0.75rem' }}>
                <span className="font-mono text-[#C0392B] font-semibold whitespace-nowrap">
                  {d.year}
                </span>
                <span className="text-gray-700">{d.event}</span>
              </div>
            ))}
          </div>
        </div>

        <AdBanner />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Study Guide</h1>
      <p className="text-gray-500 mb-8">Select a topic to review key facts and important dates.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setSelected(topic)}
            className="text-left p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#C0392B] hover:shadow-md transition-all group"
          >
            <div className="text-3xl mb-3">{topic.icon}</div>
            <h2 className="font-semibold text-gray-900 group-hover:text-[#C0392B] transition-colors mb-1">
              {topic.title}
            </h2>
            <p className="text-xs text-gray-400">
              {topic.key_facts.length} key facts · {topic.important_dates.length} important dates
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
