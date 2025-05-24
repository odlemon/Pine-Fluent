export interface CreateUserDto {
    email: string
    password: string
    name: string
    role?: string
  }
  
  export interface UpdateUserDto {
    email?: string
    name?: string
    isVerified?: boolean
  }
  
  export interface CreateUserProfileDto {
    userId: number
    avatar?: string
    bio?: string
    nativeLanguage: string
    learningLanguages: string[]
    currentLevel: string
    dailyGoal: number
    timezone: string
  }
  
  export interface UpdateUserProfileDto {
    avatar?: string
    bio?: string
    nativeLanguage?: string
    learningLanguages?: string[]
    currentLevel?: string
    dailyGoal?: number
    timezone?: string
  }
  
  export interface CreateLanguageDto {
    name: string
    code: string
    nativeName: string
    flag: string
    description?: string
  }
  
  export interface UpdateLanguageDto {
    name?: string
    code?: string
    nativeName?: string
    flag?: string
    description?: string
    isActive?: boolean
  }
  
  export interface CreateLessonDto {
    title: string
    description?: string
    content: any
    languageId: number
    level: number
    difficulty: string
    duration: number
    order: number
    tags: string[]
    prerequisites: number[]
    createdBy: number
  }
  
  export interface UpdateLessonDto {
    title?: string
    description?: string
    content?: any
    level?: number
    difficulty?: string
    duration?: number
    order?: number
    tags?: string[]
    prerequisites?: number[]
    isPublished?: boolean
  }
  
  export interface CreateProgressDto {
    userId: number
    lessonId: number
    languageId: number
    completed?: boolean
    score?: number
    timeSpent: number
  }
  
  export interface UpdateProgressDto {
    completed?: boolean
    score?: number
    timeSpent?: number
    attempts?: number
  }
  
  export interface CreateQuizDto {
    title: string
    description?: string
    languageId: number
    lessonId?: number
    exercises: any[]
    timeLimit: number
    passingScore: number
    maxAttempts: number
  }
  
  export interface UpdateQuizDto {
    title?: string
    description?: string
    exercises?: any[]
    timeLimit?: number
    passingScore?: number
    maxAttempts?: number
    isPublished?: boolean
  }
  
  export interface CreateFlashcardDto {
    front: string
    back: string
    hint?: string
    audioUrl?: string
    imageUrl?: string
    difficulty: string
    tags: string[]
    languageId: number
    createdBy: number
  }
  
  export interface UpdateFlashcardDto {
    front?: string
    back?: string
    hint?: string
    audioUrl?: string
    imageUrl?: string
    difficulty?: string
    tags?: string[]
  }
  
  export interface CreateStudySessionDto {
    userId: number
    languageId: number
    startTime: Date
  }
  
  export interface UpdateStudySessionDto {
    endTime?: Date
    duration?: number
    lessonsCompleted?: number
    exercisesCompleted?: number
    wordsLearned?: number
    accuracy?: number
    xpEarned?: number
  }
  