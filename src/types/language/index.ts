export interface Language {
    id: number
    name: string
    code: string
    nativeName: string
    flag: string
    description?: string
    isActive: boolean
    totalLessons: number
    totalWords: number
    createdAt: Date
    updatedAt: Date
  }
  
  export interface Lesson {
    id: number
    title: string
    description?: string
    content: LessonContent
    languageId: number
    language?: Language
    level: number
    difficulty: LessonDifficulty
    duration: number
    order: number
    isPublished: boolean
    tags: string[]
    prerequisites: number[]
    createdBy: number
    createdAt: Date
    updatedAt: Date
  }
  
  export interface LessonContent {
    introduction?: string
    vocabulary: VocabularyItem[]
    grammar?: GrammarPoint[]
    exercises: any[] // Placeholder for Exercise type
    audio?: AudioContent[]
    video?: VideoContent[]
  }
  
  export interface VocabularyItem {
    id: number
    word: string
    translation: string
    pronunciation?: string
    audioUrl?: string
    imageUrl?: string
    partOfSpeech: PartOfSpeech
    difficulty: WordDifficulty
    examples: ExampleSentence[]
    tags: string[]
  }
  
  export interface GrammarPoint {
    id: number
    title: string
    explanation: string
    examples: ExampleSentence[]
    rules: string[]
  }
  
  export interface ExampleSentence {
    id: number
    sentence: string
    translation: string
    audioUrl?: string
    context?: string
  }
  
  export interface AudioContent {
    id: number
    url: string
    duration: number
    transcript?: string
    speaker?: string
  }
  
  export interface VideoContent {
    id: number
    url: string
    duration: number
    thumbnail: string
    subtitles?: Subtitle[]
  }
  
  export interface Subtitle {
    start: number
    end: number
    text: string
    translation?: string
  }
  
  export enum LessonDifficulty {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
  }
  
  export enum PartOfSpeech {
    NOUN = "NOUN",
    VERB = "VERB",
    ADJECTIVE = "ADJECTIVE",
    ADVERB = "ADVERB",
    PRONOUN = "PRONOUN",
    PREPOSITION = "PREPOSITION",
    CONJUNCTION = "CONJUNCTION",
    INTERJECTION = "INTERJECTION",
  }
  
  export enum WordDifficulty {
    BASIC = "BASIC",
    COMMON = "COMMON",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
    RARE = "RARE",
  }
  
  export type Exercise = {}
  