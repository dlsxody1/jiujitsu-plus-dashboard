import type { User, Session } from '@supabase/supabase-js'
import type { SocialProvider } from '@/shared/lib/auth/config'

export interface AuthSessionResponse {
  user: User | null
  session: Session | null
  error?: string
}

export interface SocialLoginResponse {
  provider: string
  url: string
}

export interface SocialLoginParams {
  provider: SocialProvider
  redirectTo?: string
}

export interface EmailLoginParams {
  email: string
  password: string
}

export interface AuthState {
  user: User | null
  session: Session | null
  isAuthenticated: boolean
  isLoading: boolean
  error: Error | null
}

export interface SocialLoginMutation {
  mutate: (params: SocialLoginParams) => void
  isPending: boolean
  error: Error | null
  isSuccess: boolean
}

export interface ExtendedUser extends User {
  name?: string
  phone?: string
  birth_date?: string
  join_date?: string
  status?: MembershipStatus
  current_belt?: BeltLevel
  current_stripes?: number
  role?: string
  password_hash?: string
  total_attendance_days?: number
}

export type BeltLevel = 'white' | 'blue' | 'purple' | 'brown' | 'black'

export type MembershipStatus = 'active' | 'suspended' | 'inactive'

export type AttendanceStatus = 'present' | 'absent' | 'late'

export { type User, type Session } from '@supabase/supabase-js'
