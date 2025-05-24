export interface Friend {
    id: number
    userId: number
    friendId: number
    status: FriendshipStatus
    createdAt: Date
    updatedAt: Date
    friend?: User
  }
  
  export interface FriendRequest {
    id: number
    senderId: number
    receiverId: number
    message?: string
    status: FriendRequestStatus
    sentAt: Date
    respondedAt?: Date
    sender?: User
    receiver?: User
  }
  
  export interface Leaderboard {
    id: number
    name: string
    type: LeaderboardType
    period: LeaderboardPeriod
    languageId?: number
    entries: LeaderboardEntry[]
    updatedAt: Date
  }
  
  export interface LeaderboardEntry {
    id: number
    userId: number
    rank: number
    score: number
    change: number
    user?: User
  }
  
  export interface StudyGroup {
    id: number
    name: string
    description?: string
    languageId: number
    createdBy: number
    isPrivate: boolean
    maxMembers: number
    currentMembers: number
    inviteCode?: string
    createdAt: Date
    updatedAt: Date
  }
  
  export interface StudyGroupMember {
    id: number
    groupId: number
    userId: number
    role: GroupRole
    joinedAt: Date
    user?: User
  }
  
  export interface GroupActivity {
    id: number
    groupId: number
    userId: number
    type: ActivityType
    description: string
    data?: Record<string, any>
    createdAt: Date
    user?: User
  }
  
  export interface Challenge {
    id: number
    title: string
    description: string
    type: ChallengeType
    languageId?: number
    startDate: Date
    endDate: Date
    requirements: ChallengeRequirement[]
    rewards: ChallengeReward[]
    isActive: boolean
    participantCount: number
  }
  
  export interface ChallengeParticipant {
    id: number
    challengeId: number
    userId: number
    progress: number
    completed: boolean
    joinedAt: Date
    completedAt?: Date
    user?: User
  }
  
  export interface ChallengeRequirement {
    type: string
    target: number
    description: string
  }
  
  export interface ChallengeReward {
    type: RewardType
    value: number
    description: string
  }
  
  export enum FriendshipStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    BLOCKED = "BLOCKED",
  }
  
  export enum FriendRequestStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED",
    CANCELLED = "CANCELLED",
  }
  
  export enum LeaderboardType {
    XP = "XP",
    STREAK = "STREAK",
    LESSONS = "LESSONS",
    ACCURACY = "ACCURACY",
  }
  
  export enum LeaderboardPeriod {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    ALL_TIME = "ALL_TIME",
  }
  
  export enum GroupRole {
    MEMBER = "MEMBER",
    MODERATOR = "MODERATOR",
    ADMIN = "ADMIN",
  }
  
  export enum ActivityType {
    LESSON_COMPLETED = "LESSON_COMPLETED",
    ACHIEVEMENT_UNLOCKED = "ACHIEVEMENT_UNLOCKED",
    STREAK_MILESTONE = "STREAK_MILESTONE",
    CHALLENGE_JOINED = "CHALLENGE_JOINED",
    CHALLENGE_COMPLETED = "CHALLENGE_COMPLETED",
  }
  
  export enum ChallengeType {
    INDIVIDUAL = "INDIVIDUAL",
    GROUP = "GROUP",
    GLOBAL = "GLOBAL",
  }
  
  export enum RewardType {
    XP = "XP",
    BADGE = "BADGE",
    STREAK_FREEZE = "STREAK_FREEZE",
    PREMIUM_DAYS = "PREMIUM_DAYS",
  }
  
  import type { User } from "../user"
  