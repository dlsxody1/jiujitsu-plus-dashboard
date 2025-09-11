export const AUTH_CONFIG = {
  redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`,
  queryParams: {
    access_type: 'offline',
    prompt: 'consent',
  },
} as const

export const AUTH_QUERY_KEYS = {
  user: ['auth', 'user'] as const,
  session: ['auth', 'session'] as const,
} as const

export type SocialProvider = 'kakao'

export const SOCIAL_PROVIDERS = {
  KAKAO: 'kakao' as const,
  NAVER: 'naver' as const,
} as const
