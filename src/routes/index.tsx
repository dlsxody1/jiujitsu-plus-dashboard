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
import { Separator } from '@/shared/ui/separator'
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
              로그인
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

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <Separator className="bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-900 px-3 text-gray-500 dark:text-gray-400 font-medium">
                  또는
                </span>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full h-12 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
              onClick={() => alert('이메일 로그인 기능은 준비중입니다.')}
            >
              이메일로 로그인
            </Button>

            <div className="pt-4 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                계속 진행하면{' '}
                <Button
                  variant="link"
                  className="p-0 h-auto text-xs text-blue-600 dark:text-blue-400"
                  onClick={() => alert('서비스 이용약관 페이지로 이동합니다.')}
                >
                  서비스 이용약관
                </Button>{' '}
                및{' '}
                <Button
                  variant="link"
                  className="p-0 h-auto text-xs text-blue-600 dark:text-blue-400"
                  onClick={() =>
                    alert('개인정보 처리방침 페이지로 이동합니다.')
                  }
                >
                  개인정보 처리방침
                </Button>
                에<br />
                동의하는 것으로 간주됩니다.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 모바일 전용 하단 텍스트 */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            문제가 발생했나요?{' '}
            <Button
              variant="link"
              className="p-0 h-auto text-sm text-blue-600 dark:text-blue-400"
              onClick={() => alert('고객지원 페이지로 이동합니다.')}
            >
              고객지원
            </Button>
          </p>
        </div>
      </div>
    </div>
  )
}
