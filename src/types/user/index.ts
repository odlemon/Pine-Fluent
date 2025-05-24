import type { UserRole } from "../auth"

export interface User {
  id: number
  email: string
  name: string
  role: UserRole
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
  profile?: UserProfile
}

export interface UserProfile {
  id: number
  userId: number
  avatar?: string
  bio?: string
  nativeLanguage: string
  learningLanguages: string[]
  currentLevel: LanguageLevel
  dailyGoal: number
  timezone: string
  preferences: UserPreferences
  stats: UserStats
  createdAt: Date
  updatedAt: Date
}

export interface UserPreferences {
  notifications: NotificationSettings
  privacy: PrivacySettings
  learning: LearningSettings
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  dailyReminder: boolean
  weeklyReport: boolean
  achievementAlerts: boolean
}

export interface PrivacySettings {
  profileVisibility: ProfileVisibility
  showProgress: boolean
  showStreak: boolean
}

export interface LearningSettings {
  autoPlay: boolean
  showTranslations: boolean
  difficultyLevel: DifficultyLevel
  studyReminders: boolean
}

export interface UserStats {
  totalLessonsCompleted: number
  currentStreak: number
  longestStreak: number
  totalStudyTime: number
  averageSessionTime: number
  wordsLearned: number
  accuracy: number
}

export enum LanguageLevel {
  BEGINNER = "BEGINNER",
  ELEMENTARY = "ELEMENTARY",
  INTERMEDIATE = "INTERMEDIATE",
  UPPER_INTERMEDIATE = "UPPER_INTERMEDIATE",
  ADVANCED = "ADVANCED",
  PROFICIENT = "PROFICIENT",
}

export enum ProfileVisibility {
  PUBLIC = "PUBLIC",
  FRIENDS = "FRIENDS",
  PRIVATE = "PRIVATE",
}

export enum DifficultyLevel {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  ADAPTIVE = "ADAPTIVE",
}
