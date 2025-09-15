import { Alert, AlertDescription } from '@/shared/ui/alert'

interface LoginErrorProps {
  error?: Error
}

export const LoginError = ({ error }: LoginErrorProps) => {
  if (!error) return null

  const getErrorMessage = () => {
    const errorCode = error.message || error.toString()
    const errorMessages: Record<string, string> = {
      'Invalid login credentials': '이메일 또는 비밀번호가 올바르지 않습니다.',
      'Email not confirmed': '이메일 인증이 필요합니다.',
      'Too many requests':
        '너무 많은 로그인 시도입니다. 잠시 후 다시 시도해주세요.',
      'User not found': '존재하지 않는 사용자입니다.',
    }

    return (
      errorMessages[errorCode] ||
      '로그인 중 오류가 발생했습니다. 다시 시도해주세요.'
    )
  }

  return (
    <Alert variant="destructive">
      <AlertDescription>{getErrorMessage()}</AlertDescription>
    </Alert>
  )
}
