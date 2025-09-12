import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Users } from 'lucide-react'

interface TotalMembersCardProps {
  totalMembers: number
  monthlyIncrease: number
}

export const TotalMembersCard: React.FC<TotalMembersCardProps> = ({
  totalMembers,
  monthlyIncrease,
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          총 회원수
        </CardTitle>
        <div className="p-2 rounded-lg bg-blue-50">
          <Users className="h-5 w-5 text-blue-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {totalMembers.toLocaleString()}
        </div>
        <p className="text-xs text-gray-500">
          이번 달 +{monthlyIncrease}명
        </p>
      </CardContent>
    </Card>
  )
}