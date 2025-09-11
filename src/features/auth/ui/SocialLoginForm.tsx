import React from 'react'
import { Button } from '@/shared/ui/button'
import { Alert, AlertDescription } from '@/shared/ui/alert'
import { AlertCircle, MessageCircle, Loader2 } from 'lucide-react'
import { useKakaoLogin } from '../hooks/useSocialLogin'

interface SocialLoginFormProps {
  className?: string
}

export const SocialLoginForm: React.FC<SocialLoginFormProps> = ({
  className,
}) => {
  const kakaoLogin = useKakaoLogin()

  const socialProviders = [
    {
      name: 'Kakao',
      handler: kakaoLogin.loginWithKakao,
      isLoading: kakaoLogin.isPending,
      icon: <MessageCircle className="w-5 h-5" />,
      color:
        'bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-300',
    },
  ]

  return (
    <div className={className}>
      {kakaoLogin.error && (
        <Alert
          variant="destructive"
          className="mb-4 border-red-200 bg-red-50 dark:bg-red-950/20"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            {kakaoLogin.error.message ||
              '로그인에 실패했습니다. 다시 시도해주세요.'}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-3">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            variant="outline"
            onClick={provider.handler}
            disabled={provider.isLoading}
            className={`w-full h-12 text-base font-medium transition-all duration-200 border-2 ${provider.color} ${
              provider.isLoading
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {provider.isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>카카오 연결 중...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-3">
                {provider.icon}
                <span>{provider.name}로 시작하기</span>
              </div>
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
