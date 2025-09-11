import { getCurrentSession } from '@/entities/users/api/auth-api'
import { AUTH_QUERY_KEYS } from '@/shared/lib/auth/config'
import { useQuery } from '@tanstack/react-query'

export const useCurrentSessionQuery = () => {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.session,
    queryFn: getCurrentSession,
    staleTime: 5 * 60 * 1000,
    retry: (failureCount, error) => {
      if (error.message.includes('unauthorized')) {
        return false
      }
      return failureCount < 3
    },
  })
}
