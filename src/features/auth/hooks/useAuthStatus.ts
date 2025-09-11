import { useCurrentSessionQuery } from './useCurrentSesstionQuery'
import { useCurrentUserQuery } from './useCurrentUserQuery'

/**
 * 인증 상태 확인 Hook
 */
export const useAuthStatus = () => {
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useCurrentUserQuery()
  const {
    data: session,
    isLoading: isSessionLoading,
    error: sessionError,
  } = useCurrentSessionQuery()

  return {
    user,
    session,
    isAuthenticated: !!user && !!session,
    isLoading: isUserLoading || isSessionLoading,
    error: userError || sessionError,
  }
}
