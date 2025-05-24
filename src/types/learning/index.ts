export interface UserProgress {
    id: number
    userId: number
    lessonId: number
    languageId: number
    completed: boolean
    score?: number
    timeSpent: number
    attempts: number
    lastAttemptAt?: Date
    completedAt?: Date
    createdAt: Date
    updatedAt: Date
  }
  
  export interface StudySession {
    id: number
    userId: number
    languageId: number
    startTime: Date
    endTime?: Date
    duration: number
    lessonsCompleted: number
    exercisesCompleted: number
    wordsLearned: number
    accuracy: number
    xpEarned: number
  }
  
  export interface Achievement {
    id: number
    name: string
    description: string
    icon: string
    category: AchievementCategory
    requirement: AchievementRequirement
    xpReward: number
    isActive: boolean
  }
  
  export interface UserAchievement {
    id: number
    userId: number
    achievementId: number
    achievement?: Achievement
    unlockedAt: Date
    progress: number
    isCompleted: boolean
  }
  
  export interface AchievementRequirement {
    type: RequirementType
    target: number
    timeframe?: TimeFrame
    conditions?: Record<string, any>
  }
  
  export interface Streak {
    id: number
    userId: number
    languageId?: number
    currentStreak: number
    longestStreak: number
    lastStudyDate: Date
    streakType: StreakType
  }
  
  export interface LearningPath {
    id: number
    name: string
    description: string
    languageId: number
    lessons: number[]
    estimatedDuration: number
    difficulty: LessonDifficulty
    isRecommended: boolean
  }
  
  export interface UserLearningPath {
    id: number
    userId: number
    learningPathId: number
    currentLessonIndex: number
    progress: number
    startedAt: Date
    completedAt?: Date
  }
  
  export enum AchievementCategory {
    STREAK = "STREAK",
    LESSONS = "LESSONS",
    VOCABULARY = "VOCABULARY",
    ACCURACY = "ACCURACY",
    TIME = "TIME",
    SOCIAL = "SOCIAL",
  }
  
  export enum RequirementType {
    LESSON_COUNT = "LESSON_COUNT",
    STREAK_DAYS = "STREAK_DAYS",
    WORDS_LEARNED = "WORDS_LEARNED",
    ACCURACY_RATE = "ACCURACY_RATE",
    STUDY_TIME = "STUDY_TIME",
  }
  
  export enum TimeFrame {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    ALL_TIME = "ALL_TIME",
  }
  
  export enum StreakType {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    LESSON = "LESSON",
  }
  
  export enum LessonDifficulty {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
  }
  