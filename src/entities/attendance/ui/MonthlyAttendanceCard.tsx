import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Calendar } from 'lucide-react'

interface MonthlyAttendanceCardProps {
  attendanceRate: number
  previousMonthDifference: number
}

export const MonthlyAttendanceCard: React.FC<MonthlyAttendanceCardProps> = ({
  attendanceRate,
  previousMonthDifference,
}) => {
  const isPositive = previousMonthDifference >= 0
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          이번 달 출석률
        </CardTitle>
        <div className="p-2 rounded-lg bg-green-50">
          <Calendar className="h-5 w-5 text-green-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {attendanceRate}%
        </div>
        <p className="text-xs text-gray-500">
          지난 달보다 {isPositive ? '+' : ''}{previousMonthDifference}%
        </p>
      </CardContent>
    </Card>
  )
}