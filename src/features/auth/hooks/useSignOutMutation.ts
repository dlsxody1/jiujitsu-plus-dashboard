import { signOut } from '@/entities/users/api/auth-api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { toast } from 'sonner'

export const useSignOutMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      // 모든 auth 관련 캐시 제거
      queryClient.removeQueries({ queryKey: ['auth'] })

      toast.success('로그아웃되었습니다.')
      router.navigate({ to: '/' })
    },
    onError: (error: Error) => {
      console.error('로그아웃 실패:', error)
      toast.error(error.message || '로그아웃에 실패했습니다.')
    },
  })
}
