import { signEmailLogin } from '@/entities/users/api/auth-api'
import type {
  LoginCredentials,
  ValidationErrors,
} from '@/features/auth/model/types'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { LogIn, Shield } from 'lucide-react'
import React, { useState } from 'react'
import { LoginError } from './LoginError'
import { PasswordInput } from './PasswordInput'
import { EmailInput } from './EmailInput'
import { validateForm } from '../lib/validation'

const EmailLoginForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [errors, setErrors] = useState<ValidationErrors>({})

  const loginMutation = useMutation({
    mutationFn: signEmailLogin,
    onSuccess: () => {
      setErrors({})
      router.navigate({ to: '/admin/dashboard' })
    },
    onError: (error: Error) => {
      setErrors({ submit: error })
    },
  })

  const handleInputChange =
    (field: keyof LoginCredentials) =>
    (value: string): void => {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }

  const handleSubmit = (): void => {
    setErrors({})
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }
    loginMutation.mutate(formData)
  }

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const isFormDisabled: boolean = loginMutation.isPending

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">
            주짓수 플러스 관리자 로그인
          </CardTitle>
          <CardDescription className="text-center">
            관리자 계정으로 로그인하여 대시보드에 접근하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <EmailInput
              value={formData.email}
              onChange={handleInputChange('email')}
              error={errors.email}
              disabled={isFormDisabled}
            />

            <div onKeyDown={handleKeyDown}>
              <PasswordInput
                value={formData.password}
                onChange={handleInputChange('password')}
                error={errors.password}
                disabled={isFormDisabled}
                showPassword={showPassword}
                onToggleShow={() => setShowPassword(!showPassword)}
              />
            </div>

            <LoginError error={errors.submit} />

            <Button
              type="button"
              className="w-full"
              disabled={isFormDisabled}
              onClick={handleSubmit}
            >
              {loginMutation.isPending ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-foreground" />
                  로그인 중...
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  로그인
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EmailLoginForm
