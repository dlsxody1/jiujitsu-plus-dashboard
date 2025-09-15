import { USER_MOCK_DATA } from '@/features/dashboard/const/dashboard-mockdata'
import usePagination from '@/features/dashboard/hooks/usePagination'
import { MEMBERS_PER_PAGE } from '@/features/dashboard/const/pagination'
import type { ExtendedUser } from '@/entities/users/model/types'
import {
  DashboardHeader,
  UsersTable,
  TablePagination,
} from '@/features/dashboard/ui'

const UsersDashboardPage = () => {
  const {
    currentPage,
    totalPages,
    currentItems: currentMembers,
    goToNext,
    goToPrevious,
    hasNext,
    hasPrevious,
    startIndex,
    endIndex,
    totalItems,
  } = usePagination<ExtendedUser>({
    data: USER_MOCK_DATA,
    itemsPerPage: MEMBERS_PER_PAGE,
  })

  const handleBackClick = () => {
    // TODO: 대시보드로 이동 로직
    console.log('대시보드로 이동')
  }

  const handleSearchClick = () => {
    // TODO: 검색 로직
    console.log('검색')
  }

  const handleFilterClick = () => {
    // TODO: 필터 로직
    console.log('필터')
  }

  const handleExportClick = () => {
    // TODO: 내보내기 로직
    console.log('내보내기')
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <DashboardHeader
        title="회원 관리"
        onBackClick={handleBackClick}
        onSearchClick={handleSearchClick}
        onFilterClick={handleFilterClick}
        onExportClick={handleExportClick}
      />

      <div className="flex-1 p-6 min-h-0">
        <div className="h-full bg-white rounded-lg border flex flex-col">
          <div className="px-4 py-3 border-b flex-shrink-0">
            <h3 className="text-sm font-medium text-gray-900">
              전체 회원 목록
            </h3>
          </div>

          <UsersTable users={currentMembers} startIndex={startIndex} />

          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            endIndex={endIndex}
            totalItems={totalItems}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
            onNext={goToNext}
            onPrevious={goToPrevious}
          />
        </div>
      </div>
    </div>
  )
}

export default UsersDashboardPage
