export type Lang = 'en' | 'fr';

// ── Category translations ─────────────────────────────────────────────────────

export const CATEGORY_FR: Record<string, string> = {
  'Rights & Responsibilities': 'Droits et responsabilités',
  'Who We Are': 'Qui sommes-nous?',
  "Canada's History": "L'histoire du Canada",
  'Modern Canada': 'Le Canada moderne',
  'How Canadians Govern Themselves': 'Les Canadiens et leur gouvernement',
  'Federal Elections': 'Les élections fédérales',
  'The Justice System': 'Le système de justice',
  'Canadian Symbols': 'Symboles canadiens',
  "Canada's Economy": "L'économie du Canada",
  "Canada's Regions": 'Les régions du Canada',
};

export function categoryLabel(cat: string, lang: Lang): string {
  if (lang === 'fr') return CATEGORY_FR[cat] ?? cat;
  return cat;
}

// ── UI string translations ────────────────────────────────────────────────────

const strings = {
  // Navbar
  nav_home: { en: 'Home', fr: 'Accueil' },
  nav_quiz: { en: 'Quiz', fr: 'Quiz' },
  nav_flashcards: { en: 'Flashcards', fr: 'Fiches' },
  nav_guide: { en: 'Study Guide', fr: "Guide d'étude" },
  nav_mock: { en: 'Mock Exam', fr: 'Examen simulé' },

  // Quiz page
  quiz_title: { en: 'Practice Quiz', fr: "Quiz d'entraînement" },
  quiz_all: { en: 'All', fr: 'Tout' },
  quiz_easy: { en: 'Easy', fr: 'Facile' },
  quiz_medium: { en: 'Medium', fr: 'Moyen' },
  quiz_hard: { en: 'Hard', fr: 'Difficile' },
  quiz_question_of: { en: 'Question {n} of {total}', fr: 'Question {n} sur {total}' },
  quiz_score: { en: 'Score: {score}/{n}', fr: 'Score\u00a0: {score}/{n}' },
  quiz_pass: { en: 'PASS — Great work!', fr: 'RÉUSSI — Excellent travail\u00a0!' },
  quiz_fail: { en: 'FAIL — Keep studying!', fr: 'ÉCHOUÉ — Continuez à étudier\u00a0!' },
  quiz_pct_correct: { en: '% correct', fr: '% correct' },
  quiz_try_again: { en: 'Try Again', fr: 'Réessayer' },
  quiz_next: { en: 'Next Question', fr: 'Question suivante' },
  quiz_see_results: { en: 'See Results', fr: 'Voir les résultats' },
  quiz_no_match: {
    en: 'No questions match these filters. Try a different combination.',
    fr: 'Aucune question ne correspond à ces filtres. Essayez une autre combinaison.',
  },

  // QuizCard
  card_explanation: { en: 'Explanation: ', fr: 'Explication\u00a0: ' },

  // Flashcards page
  flash_title: { en: 'Flashcards', fr: 'Fiches' },
  flash_all_categories: { en: 'All Categories', fr: 'Toutes les catégories' },
  flash_shuffle: { en: 'Shuffle', fr: 'Mélanger' },
  flash_marked_known: { en: '{n} marked as known', fr: '{n} marquée(s) comme connue(s)' },
  flash_card_of: { en: 'Card {n} of {total}', fr: 'Fiche {n} sur {total}' },
  flash_tap: { en: 'Tap to reveal answer', fr: 'Appuyez pour révéler la réponse' },
  flash_know_all: { en: 'You know them all!', fr: 'Vous les connaissez toutes\u00a0!' },
  flash_know_all_sub: {
    en: 'All cards in this deck are marked as known.',
    fr: 'Toutes les fiches de ce jeu sont marquées comme connues.',
  },
  flash_reset: { en: 'Reset Deck', fr: 'Réinitialiser' },
  flash_prev: { en: '← Previous', fr: '← Précédent' },
  flash_mark_known: { en: '✓ Mark as Known', fr: '✓ Marquer comme connue' },
  flash_next: { en: 'Next →', fr: 'Suivant →' },

  // Mock exam page
  mock_title: { en: 'Mock Exams', fr: 'Examens simulés' },
  mock_subtitle: {
    en: 'Choose an exam below. No feedback shown during the exam — just like the real thing. Score 75% or higher to pass.',
    fr: "Choisissez un examen ci-dessous. Aucun commentaire n'est affiché pendant l'examen, comme lors du vrai examen. Obtenez 75\u00a0% ou plus pour réussir.",
  },
  mock_exam_label: { en: 'Mock Exam {n}', fr: 'Examen simulé {n}' },
  mock_questions: { en: 'questions', fr: 'questions' },
  mock_minutes: { en: 'minutes', fr: 'minutes' },
  mock_to_pass: { en: '75% to pass', fr: '75\u00a0% pour réussir' },
  mock_start: { en: 'Start Exam', fr: "Commencer l'examen" },
  mock_submit_early: { en: 'Submit Early', fr: 'Soumettre maintenant' },
  mock_submit: { en: 'Submit', fr: 'Soumettre' },
  mock_next: { en: 'Next →', fr: 'Suivant →' },
  mock_pct_correct: { en: '% correct', fr: '% correct' },
  mock_time_taken: { en: 'Time taken: {t}', fr: 'Temps écoulé\u00a0: {t}' },
  mock_breakdown: { en: 'Breakdown by Category', fr: 'Répartition par catégorie' },
  mock_review: { en: 'Review Answers', fr: 'Réviser les réponses' },
  mock_try_again: { en: 'Try Again', fr: 'Réessayer' },
  mock_all_exams: { en: 'All Exams', fr: 'Tous les examens' },
  mock_answer_review: { en: 'Answer Review', fr: 'Révision des réponses' },
  mock_back_results: { en: '← Back to Results', fr: '← Retour aux résultats' },
  mock_your_answer: { en: 'Your answer: ', fr: 'Votre réponse\u00a0: ' },
  mock_correct: { en: 'Correct: ', fr: 'Correct\u00a0: ' },
  mock_not_answered: { en: 'Not answered', fr: 'Sans réponse' },
  mock_pass: { en: '✓ PASS', fr: '✓ RÉUSSI' },
  mock_fail: { en: '✗ FAIL', fr: '✗ ÉCHOUÉ' },
} as const;

type StringKey = keyof typeof strings;

export function t(key: StringKey, lang: Lang, vars?: Record<string, string | number>): string {
  let str = strings[key][lang] as string;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, String(v));
    }
  }
  return str;
}

// ── Mock exam definitions (bilingual) ────────────────────────────────────────

export const EXAM_NAMES: Record<number, { en: string; fr: string }> = {
  1: { en: 'General Mix', fr: 'Mélange général' },
  2: { en: 'History & Identity', fr: 'Histoire et identité' },
  3: { en: 'Government & Law', fr: 'Gouvernement et droit' },
  4: { en: 'Rights & Culture', fr: 'Droits et culture' },
  5: { en: 'Full Simulation', fr: 'Simulation complète' },
};

export const EXAM_SUBTITLES: Record<number, { en: string; fr: string }> = {
  1: {
    en: 'Random questions from all categories',
    fr: 'Questions aléatoires de toutes les catégories',
  },
  2: {
    en: "Canada's History, Who We Are, Modern Canada",
    fr: "L'histoire du Canada, Qui sommes-nous?, Le Canada moderne",
  },
  3: {
    en: 'How Canadians Govern Themselves, Federal Elections, The Justice System',
    fr: 'Les Canadiens et leur gouvernement, Les élections fédérales, Le système de justice',
  },
  4: {
    en: "Rights & Responsibilities, Canadian Symbols, Canada's Economy",
    fr: "Droits et responsabilités, Symboles canadiens, L'économie du Canada",
  },
  5: {
    en: '30 questions from all categories, harder simulation',
    fr: '30 questions de toutes les catégories, simulation plus difficile',
  },
};
