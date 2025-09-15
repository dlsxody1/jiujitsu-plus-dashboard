import {
  ArrowLeft,
  Search,
  Filter,
  Download,
} from 'lucide-react'

interface DashboardHeaderProps {
  title: string
  onBackClick?: () => void
  onSearchClick?: () => void
  onFilterClick?: () => void
  onExportClick?: () => void
}

export const DashboardHeader = ({
  title,
  onBackClick,
  onSearchClick,
  onFilterClick,
  onExportClick,
}: DashboardHeaderProps) => {
  return (
    <header className="bg-white border-b px-6 py-3 flex-shrink-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackClick}
            className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            대시보드로 돌아가기
          </button>
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onSearchClick}
            className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Search className="h-4 w-4 mr-1" />
            검색
          </button>
          <button
            onClick={onFilterClick}
            className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-1" />
            필터
          </button>
          <button
            onClick={onExportClick}
            className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-1" />
            내보내기
          </button>
        </div>
      </div>
    </header>
  )
}