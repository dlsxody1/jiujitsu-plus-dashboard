import type {
  LoginCredentials,
  ValidationErrors,
  ValidationResult,
} from '@/features/auth/model/types'

export const validateForm = ({
  email,
  password,
}: LoginCredentials): ValidationResult => {
  const errors: Omit<ValidationErrors, 'submit'> = {}

  if (!email) {
    errors.email = '이메일을 입력해주세요.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = '올바른 이메일 형식을 입력해주세요.'
  }

  if (!password) {
    errors.password = '비밀번호를 입력해주세요.'
  } else if (password.length < 6) {
    errors.password = '비밀번호는 최소 6자 이상이어야 합니다.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
