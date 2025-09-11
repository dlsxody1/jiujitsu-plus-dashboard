import { signInWithSocial } from '@/entities/users/api/auth-api'
import type { SocialLoginParams } from '@/entities/users/model/types'
import { AUTH_QUERY_KEYS } from '@/shared/lib/auth/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useSocialLoginMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (params: SocialLoginParams) => signInWithSocial(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.user })
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.session })

      toast.success('로그인이 완료되었습니다.')
    },
    onError: (error: Error) => {
      toast.error(error.message || '로그인에 실패했습니다.')
    },
  })
}
