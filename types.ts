
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export type ViewState = 'ENTRY' | 'QUIZ' | 'RESULT' | 'MAIN_SITE';

export interface QuizAnswers {
  [key: number]: string;
}
