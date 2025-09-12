import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Trophy } from 'lucide-react'

interface ActiveMembersCardProps {
  activeMembers: number
  description?: string
}

export const ActiveMembersCard: React.FC<ActiveMembersCardProps> = ({
  activeMembers,
  description = '최근 30일 기준',
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          활성 회원
        </CardTitle>
        <div className="p-2 rounded-lg bg-purple-50">
          <Trophy className="h-5 w-5 text-purple-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {activeMembers.toLocaleString()}
        </div>
        <p className="text-xs text-gray-500">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}