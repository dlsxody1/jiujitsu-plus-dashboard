import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Chrome } from 'lucide-react'
import { SocialLoginForm } from '@/features/auth/ui/SocialLoginForm'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader className="space-y-3 text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-2">
              <Chrome className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              주짓수플러스 출석부 로그인
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
              소셜 계정으로 간편하게
              <br />
              서비스를 시작해보세요
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 px-6 pb-8">
            {/* 소셜 로그인 폼 */}
            <SocialLoginForm />
          </CardContent>
        </Card>

        {/* 모바일 전용 하단 텍스트 */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            문제가 발생했나요?{' '}
            <Button
              variant="link"
              className="p-0 h-auto text-sm text-blue-600 dark:text-blue-400"
              onClick={() => alert('dlsxody1@gmail.com으로 문의해주세요!')}
            >
              고객지원
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}
