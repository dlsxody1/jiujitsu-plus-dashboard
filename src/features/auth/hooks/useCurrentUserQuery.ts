import { getCurrentUser } from '@/entities/users/api/auth-api'
import { AUTH_QUERY_KEYS } from '@/shared/lib/auth/config'
import { useQuery } from '@tanstack/react-query'

export const useCurrentUserQuery = () => {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.user,
    queryFn: getCurrentUser,
    staleTime: 5 * 60 * 1000, // 5분
    retry: (failureCount, error) => {
      if (error.message.includes('unauthorized')) {
        return false
      }
      return failureCount < 3
    },
  })
}
