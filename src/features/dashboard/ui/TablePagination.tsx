import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TablePaginationProps {
  currentPage: number
  totalPages: number
  startIndex: number
  endIndex: number
  totalItems: number
  hasNext: boolean
  hasPrevious: boolean
  onNext: () => void
  onPrevious: () => void
}

export const TablePagination = ({
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  totalItems,
  hasNext,
  hasPrevious,
  onNext,
  onPrevious,
}: TablePaginationProps) => {
  return (
    <div className="px-4 py-3 border-t bg-white flex-shrink-0 flex items-center justify-between">
      <div className="text-sm text-gray-500">
        총 {totalItems}명 중 {startIndex + 1}-{endIndex}명 표시
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onPrevious}
          disabled={!hasPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm text-gray-700">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onNext}
          disabled={!hasNext}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
