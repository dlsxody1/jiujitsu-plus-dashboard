export interface LoginCredentials {
  email: string
  password: string
}

export interface ValidationErrors {
  email?: string
  password?: string
  submit?: Error
}

export interface ValidationResult {
  isValid: boolean
  errors: Omit<ValidationErrors, 'submit'>
}

export interface EmailInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  disabled: boolean
}
