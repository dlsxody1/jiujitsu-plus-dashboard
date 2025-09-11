import { supabase } from '@/shared/api/supabase'
import { AUTH_CONFIG } from '@/shared/lib/auth/config'
import type {
  AuthSessionResponse,
  SocialLoginParams,
  SocialLoginResponse,
} from '../model/types'

/**
 * 소셜 로그인 시작 (OAuth URL 생성)
 */
export const signInWithSocial = async ({
  provider,
  redirectTo = AUTH_CONFIG.redirectTo,
}: SocialLoginParams): Promise<SocialLoginResponse> => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
        queryParams: AUTH_CONFIG.queryParams,
      },
    })

    if (error) {
      throw new Error(error.message)
    }

    return {
      provider: data.provider,
      url: data.url,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : '로그인에 실패했습니다.'
    throw new Error(errorMessage)
  }
}

/**
 * 현재 사용자 세션 가져오기
 */
export const getCurrentSession = async (): Promise<AuthSessionResponse> => {
  try {
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      throw new Error(error.message)
    }

    return {
      user: data.session?.user ?? null,
      session: data.session,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : '세션을 가져올 수 없습니다.'

    return {
      user: null,
      session: null,
      error: errorMessage,
    }
  }
}

/**
 * 로그아웃
 */
export const signOut = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : '로그아웃에 실패했습니다.'
    throw new Error(errorMessage)
  }
}

/**
 * 현재 사용자 정보 가져오기
 */
export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      throw new Error(error.message)
    }

    return data.user
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : '사용자 정보를 가져올 수 없습니다.'
    throw new Error(errorMessage)
  }
}

/**
 * 인증 상태 변화 구독
 */
export const onAuthStateChange = (callback: (session: any) => void) => {
  return supabase.auth.onAuthStateChange((_, session) => {
    callback(session)
  })
}
