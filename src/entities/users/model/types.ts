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

export { type User, type Session } from '@supabase/supabase-js'
