import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Eye, EyeOff } from 'lucide-react'

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  disabled: boolean
  showPassword: boolean
  onToggleShow: () => void
}

export const PasswordInput = ({
  value,
  onChange,
  error,
  disabled,
  showPassword,
  onToggleShow,
}: PasswordInputProps) => (
  <div className="space-y-2">
    <Label htmlFor="password">비밀번호</Label>
    <div className="relative">
      <Input
        id="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="••••••••"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={
          error
            ? 'border-destructive focus-visible:ring-destructive pr-10'
            : 'pr-10'
        }
        autoComplete="current-password"
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={onToggleShow}
        disabled={disabled}
        aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보이기'}
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4 text-muted-foreground" />
        ) : (
          <Eye className="h-4 w-4 text-muted-foreground" />
        )}
      </Button>
    </div>
    {error && <p className="text-sm text-destructive">{error}</p>}
  </div>
)
