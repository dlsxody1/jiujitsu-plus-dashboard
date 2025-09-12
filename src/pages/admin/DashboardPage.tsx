import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { Users, Calendar, Trophy, Settings, LogOut } from 'lucide-react'
import { signOut } from '@/entities/users/api/auth-api'
import { useMutation } from '@tanstack/react-query'
import { useRouter, Link } from '@tanstack/react-router'
import { TotalMembersCard } from '@/entities/users/ui/TotalMembersCard'
import { ActiveMembersCard } from '@/entities/users/ui/ActiveMembersCard'
import { MonthlyAttendanceCard } from '@/entities/attendance/ui/MonthlyAttendanceCard'

const DashboardPage = () => {
  const router = useRouter()

  const logoutMutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      router.navigate({ to: '/' })
    },
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  // Mock data - 실제로는 API에서 받아올 데이터
  const statsData = {
    totalMembers: 124,
    monthlyIncrease: 12,
    attendanceRate: 89,
    previousMonthDifference: 5,
    activeMembers: 98,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                주짓수플러스 관리자 대시보드
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {logoutMutation.isPending ? '로그아웃 중...' : '로그아웃'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              환영합니다! 👋
            </h2>
            <p className="text-gray-600">
              오늘도 체육관 관리를 위해 수고하고 계시네요. 현재 상황을
              확인해보세요.
            </p>
          </div>

          {/* Stats Grid - 가로 한 줄 배치 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TotalMembersCard
              totalMembers={statsData.totalMembers}
              monthlyIncrease={statsData.monthlyIncrease}
            />
            <MonthlyAttendanceCard
              attendanceRate={statsData.attendanceRate}
              previousMonthDifference={statsData.previousMonthDifference}
            />
            <ActiveMembersCard activeMembers={statsData.activeMembers} />
          </div>

          {/* Quick Actions - 가로 한 줄 배치 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  회원 관리
                </CardTitle>
                <CardDescription>
                  회원 정보를 조회하고 관리할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/admin/users">
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      전체 회원 보기
                    </Button>
                  </Link>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    출석 현황 보기
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-purple-600" />
                  시스템 관리
                </CardTitle>
                <CardDescription>
                  시스템 설정과 관리 기능을 사용할 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/admin/settings">
                    <Button className="w-full justify-start" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      시스템 설정
                    </Button>
                  </Link>
                  <Button className="w-full justify-start" variant="outline">
                    <Trophy className="h-4 w-4 mr-2" />
                    통계 보고서
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
