export interface LoginCredentials {
    email: string
    password: string
  }
  
  export interface RegisterCredentials {
    email: string
    password: string
    name: string
    confirmPassword: string
  }
  
  export interface AuthResponse {
    token: string
    refreshToken: string
    user: AuthUser
    expiresIn: number
  }
  
  export interface AuthUser {
    id: number
    email: string
    name: string
    role: UserRole
    isVerified: boolean
  }
  
  export interface TokenPayload {
    id: number
    email: string
    role: UserRole
    iat: number
    exp: number
  }
  
  export interface RefreshTokenRequest {
    refreshToken: string
  }
  
  export interface PasswordResetRequest {
    email: string
  }
  
  export interface PasswordResetConfirm {
    token: string
    newPassword: string
    confirmPassword: string
  }
  
  export interface EmailVerification {
    token: string
  }
  
  export enum UserRole {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    ADMIN = "ADMIN",
  }
  