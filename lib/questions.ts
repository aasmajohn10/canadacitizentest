import questionsData from '@/data/questions.json';

export interface Question {
  id: string;
  category: string;
  difficulty: string;
  q: string;
  opts: string[];
  ans: number;
  exp: string;
  q_fr?: string;
  opts_fr?: string[];
  exp_fr?: string;
}

export const CATEGORIES = [
  'Rights & Responsibilities',
  'Who We Are',
  "Canada's History",
  'Modern Canada',
  'How Canadians Govern Themselves',
  'Federal Elections',
  'The Justice System',
  'Canadian Symbols',
  "Canada's Economy",
  "Canada's Regions",
];

export const DIFFICULTIES = ['easy', 'medium', 'hard'];

const allQuestions: Question[] = questionsData as Question[];

export function getAllQuestions(): Question[] {
  return allQuestions;
}

export function getQuestionsByCategory(category: string): Question[] {
  if (category === 'All') return allQuestions;
  return allQuestions.filter((q) => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: string): Question[] {
  if (difficulty === 'All') return allQuestions;
  return allQuestions.filter((q) => q.difficulty === difficulty);
}

export function getQuestionsByCategoryAndDifficulty(
  category: string,
  difficulty: string
): Question[] {
  return allQuestions.filter((q) => {
    const catMatch = category === 'All' || q.category === category;
    const diffMatch = difficulty === 'All' || q.difficulty === difficulty;
    return catMatch && diffMatch;
  });
}

export function getRandomQuestions(count: number): Question[] {
  const shuffled = shuffleQuestions([...allQuestions]);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function shuffleQuestions(questions: Question[]): Question[] {
  const arr = [...questions];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
