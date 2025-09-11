import { SOCIAL_PROVIDERS } from '@/shared/lib/auth/config'
import { useSocialLoginMutation } from './useSocialLoginMutation'

/**
 *
 * @description 카카오 소셜 로그인을 처리하는 커스텀 훅, 다른 소셜로그인 추가됐을 때 추가 개발
 */
export const useKakaoLogin = () => {
  const socialLogin = useSocialLoginMutation()

  return {
    ...socialLogin,
    loginWithKakao: () =>
      socialLogin.mutate({ provider: SOCIAL_PROVIDERS.KAKAO }),
  }
}
