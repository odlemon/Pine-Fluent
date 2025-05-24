export interface Exercise {
    id: number
    type: ExerciseType
    question: string
    options?: ExerciseOption[]
    correctAnswer: string | string[]
    explanation?: string
    hints?: string[]
    audioUrl?: string
    imageUrl?: string
    difficulty: ExerciseDifficulty
    points: number
    timeLimit?: number
  }
  
  export interface ExerciseOption {
    id: string
    text: string
    isCorrect: boolean
    audioUrl?: string
    imageUrl?: string
  }
  
  export interface Quiz {
    id: number
    title: string
    description?: string
    languageId: number
    lessonId?: number
    exercises: Exercise[]
    timeLimit: number
    passingScore: number
    maxAttempts: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
  }
  
  export interface QuizAttempt {
    id: number
    userId: number
    quizId: number
    answers: QuizAnswer[]
    score: number
    timeSpent: number
    completedAt: Date
    passed: boolean
  }
  
  export interface QuizAnswer {
    exerciseId: number
    userAnswer: string | string[]
    isCorrect: boolean
    timeSpent: number
  }
  
  export interface Flashcard {
    id: number
    front: string
    back: string
    hint?: string
    audioUrl?: string
    imageUrl?: string
    difficulty: FlashcardDifficulty
    tags: string[]
    languageId: number
    createdBy: number
    createdAt: Date
    updatedAt: Date
  }
  
  export interface FlashcardDeck {
    id: number
    name: string
    description?: string
    languageId: number
    flashcards: Flashcard[]
    isPublic: boolean
    createdBy: number
    createdAt: Date
    updatedAt: Date
  }
  
  export interface FlashcardReview {
    id: number
    userId: number
    flashcardId: number
    difficulty: ReviewDifficulty
    nextReviewDate: Date
    reviewCount: number
    lastReviewedAt: Date
  }
  
  export enum ExerciseType {
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    TRUE_FALSE = "TRUE_FALSE",
    FILL_IN_BLANK = "FILL_IN_BLANK",
    MATCHING = "MATCHING",
    ORDERING = "ORDERING",
    TRANSLATION = "TRANSLATION",
    LISTENING = "LISTENING",
    SPEAKING = "SPEAKING",
    WRITING = "WRITING",
  }
  
  export enum ExerciseDifficulty {
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD",
  }
  
  export enum FlashcardDifficulty {
    NEW = "NEW",
    LEARNING = "LEARNING",
    REVIEW = "REVIEW",
    MASTERED = "MASTERED",
  }
  
  export enum ReviewDifficulty {
    AGAIN = "AGAIN",
    HARD = "HARD",
    GOOD = "GOOD",
    EASY = "EASY",
  }
  