import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { supabase } from '@/shared/api/supabase'
import { Loader2 } from 'lucide-react'

export const Route = createFileRoute('/auth/callback')({
  component: AuthCallback,
})

function AuthCallback() {
  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // URL에서 해시 파라미터 추출
        const hashParams = new URLSearchParams(
          window.location.hash.substring(1),
        )

        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')

        if (accessToken && refreshToken) {
          // Supabase 세션 설정
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })

          if (error) {
            console.error('Authentication error:', error)
            window.location.href = '/?error=auth_failed'
            return
          }

          // 인증 성공 시 대시보드로 리다이렉트
          window.location.href = '/dashboard'
        } else {
          // 토큰이 없으면 로그인 페이지로 리다이렉트
          window.location.href = '/?error=no_tokens'
        }
      } catch (error) {
        console.error('Callback processing error:', error)
        window.location.href = '/?error=callback_failed'
      }
    }

    handleAuthCallback()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400">로그인 처리 중...</p>
      </div>
    </div>
  )
}
