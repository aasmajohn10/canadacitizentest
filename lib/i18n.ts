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

  // Home page
  home_hero_title: {
    en: 'Prepare for your Canadian Citizenship Test',
    fr: 'Préparez-vous à votre test de citoyenneté canadienne',
  },
  home_hero_sub: {
    en: 'Free practice questions, flashcards, study guides, and mock exams — everything you need to pass with confidence.',
    fr: 'Questions d\'entraînement gratuites, fiches, guides d\'étude et examens simulés — tout ce qu\'il vous faut pour réussir avec confiance.',
  },
  home_stat_questions: { en: 'Questions', fr: 'Questions' },
  home_stat_categories: { en: 'Categories', fr: 'Catégories' },
  home_stat_free: { en: 'Free', fr: 'Gratuit' },
  home_stat_forever: { en: 'Forever', fr: 'À vie' },
  home_card_quiz_title: { en: 'Practice Quiz', fr: "Quiz d'entraînement" },
  home_card_quiz_desc: {
    en: 'Answer questions by category and difficulty with instant feedback.',
    fr: 'Répondez aux questions par catégorie et difficulté avec des retours instantanés.',
  },
  home_card_flash_title: { en: 'Flashcards', fr: 'Fiches' },
  home_card_flash_desc: {
    en: 'Flip through every question and mark what you already know.',
    fr: 'Parcourez toutes les questions et marquez ce que vous savez déjà.',
  },
  home_card_guide_title: { en: 'Study Guide', fr: "Guide d'étude" },
  home_card_guide_desc: {
    en: 'Structured notes, key facts, and important dates by topic.',
    fr: 'Notes structurées, faits clés et dates importantes par sujet.',
  },
  home_card_mock_title: { en: 'Mock Exam', fr: 'Examen simulé' },
  home_card_mock_desc: {
    en: '20 timed questions — just like the real test. Score 75% to pass.',
    fr: '20 questions chronométrées — comme le vrai examen. Obtenez 75\u00a0% pour réussir.',
  },
  home_how_title: { en: 'How It Works', fr: 'Comment ça fonctionne' },
  home_step_study_title: { en: 'Study', fr: 'Étudier' },
  home_step_study_desc: {
    en: 'Read the study guide and learn key facts by topic.',
    fr: 'Lisez le guide d\'étude et apprenez les faits clés par sujet.',
  },
  home_step_practice_title: { en: 'Practice', fr: 'Pratiquer' },
  home_step_practice_desc: {
    en: 'Quiz yourself and flip flashcards until you feel confident.',
    fr: 'Testez-vous et parcourez les fiches jusqu\'à vous sentir confiant.',
  },
  home_step_pass_title: { en: 'Pass', fr: 'Réussir' },
  home_step_pass_desc: {
    en: 'Take the mock exam to simulate test-day conditions.',
    fr: 'Passez l\'examen simulé pour reproduire les conditions du vrai test.',
  },
  home_cta_title: { en: 'Ready to start studying?', fr: 'Prêt à commencer à étudier\u00a0?' },
  home_cta_sub: {
    en: 'Take a quick practice quiz and see where you stand.',
    fr: 'Faites un quiz d\'entraînement rapide et voyez où vous en êtes.',
  },
  home_cta_btn: { en: 'Start Practicing', fr: 'Commencer à pratiquer' },

  // Footer
  footer_disclaimer: {
    en: 'Study content adapted from',
    fr: 'Contenu d\'étude adapté de',
  },
  footer_note_label: { en: 'Note:', fr: 'Remarque\u00a0:' },
  footer_note_body: {
    en: 'Questions and study content on this site are based on the official Discover Canada study guide (2012 edition). While we have worked to ensure accuracy, always verify information with the official Government of Canada resource at',
    fr: 'Les questions et le contenu d\'étude de ce site sont tirés du guide officiel Découvrir le Canada (édition 2012). Bien que nous ayons travaillé à en assurer l\'exactitude, veuillez toujours vérifier les informations auprès de la ressource officielle du gouvernement du Canada à',
  },
  footer_privacy: { en: 'Privacy Policy', fr: 'Politique de confidentialité' },

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
