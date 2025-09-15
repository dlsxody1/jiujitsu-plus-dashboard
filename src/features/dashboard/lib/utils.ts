import type {
  AttendanceStatus,
  BeltLevel,
  MembershipStatus,
} from '@/entities/users/model/types'

export const getBeltColor = (belt: BeltLevel): string => {
  const colors = {
    white: 'bg-gray-100 text-gray-800 border-gray-300',
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    purple: 'bg-purple-100 text-purple-800 border-purple-300',
    brown: 'bg-amber-100 text-amber-800 border-amber-300',
    black: 'bg-gray-900 text-white border-gray-700',
  }
  return colors[belt]
}

// 출석 상태 아이콘
export const getAttendanceIcon = (status: AttendanceStatus): string => {
  const icons = {
    present: '●',
    absent: '○',
    late: '◐',
  }
  return icons[status]
}

// 출석 상태 색상
export const getAttendanceColor = (status: AttendanceStatus): string => {
  const colors = {
    present: 'text-green-600',
    absent: 'text-red-600',
    late: 'text-yellow-600',
  }
  return colors[status]
}

// 출석률 색상
export const getAttendanceRateColor = (rate: number): string => {
  if (rate >= 90) return 'text-green-600'
  if (rate >= 70) return 'text-yellow-600'
  return 'text-red-600'
}

export const getMembershipStatusColor = (status: MembershipStatus) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800 border-green-300'
    case 'suspended':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    case 'inactive':
      return 'bg-red-100 text-red-800 border-red-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

export const getMembershipStatusText = (status: MembershipStatus) => {
  switch (status) {
    case 'active':
      return '활동중'
    case 'suspended':
      return '중지'
    case 'inactive':
      return '비활성'
    default:
      return '알 수 없음'
  }
}
