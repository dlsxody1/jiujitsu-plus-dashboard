import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'

interface EmailInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  disabled: boolean
}
export const EmailInput = ({
  value,
  onChange,
  error,
  disabled,
}: EmailInputProps) => (
  <div className="space-y-2">
    <Label htmlFor="email">이메일</Label>
    <Input
      id="email"
      type="email"
      placeholder="admin@company.com"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={
        error ? 'border-destructive focus-visible:ring-destructive' : ''
      }
      autoComplete="email"
    />
    {error && <p className="text-sm text-destructive">{error}</p>}
  </div>
)
