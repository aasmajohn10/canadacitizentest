'use client';

import { Question } from '@/lib/questions';

interface QuizCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
}

export default function QuizCard({ question, selectedAnswer, onAnswer }: QuizCardProps) {
  const answered = selectedAnswer !== null;

  function getButtonClass(index: number) {
    if (!answered) {
      return 'border border-gray-200 bg-white text-gray-800 hover:border-[#C0392B] hover:bg-red-50 cursor-pointer';
    }
    if (index === question.ans) return 'border-2 border-green-500 bg-green-50 text-green-800';
    if (index === selectedAnswer) return 'border-2 border-red-400 bg-red-50 text-red-800';
    return 'border border-gray-200 bg-gray-50 text-gray-400';
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-semibold text-gray-900 leading-snug">{question.q}</p>
      <div className="flex flex-col gap-2">
        {question.opts.map((opt, i) => (
          <button
            key={i}
            onClick={() => !answered && onAnswer(i)}
            disabled={answered}
            className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${getButtonClass(i)}`}
          >
            <span className="inline-block w-5 font-bold text-gray-400 mr-2">
              {String.fromCharCode(65 + i)}.
            </span>
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div className="mt-1 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-900">
          <span className="font-semibold">Explanation: </span>
          {question.exp}
        </div>
      )}
    </div>
  );
}
