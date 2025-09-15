import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table'
import type { ExtendedUser } from '@/entities/users/model/types'
import {
  getAttendanceRateColor,
  getBeltColor,
  getMembershipStatusColor,
  getMembershipStatusText,
} from '@/features/dashboard/lib/utils'

interface UsersTableProps {
  users: ExtendedUser[]
  startIndex: number
}

export const UsersTable = ({ users, startIndex }: UsersTableProps) => {
  return (
    <div className="flex-1 overflow-auto">
      <Table>
        <TableHeader className="sticky top-0 bg-white z-10">
          <TableRow>
            <TableHead className="w-[4%] px-2">NO.</TableHead>
            <TableHead className="w-[8%] px-2">이름</TableHead>
            <TableHead className="w-[10%] px-2">생년월일</TableHead>
            <TableHead className="w-[13%] px-2">휴대폰</TableHead>
            <TableHead className="w-[7%] px-2">시간</TableHead>
            <TableHead className="w-[10%] px-2">등록일</TableHead>
            <TableHead className="w-[11%] px-2">회비납부일</TableHead>
            <TableHead className="w-[11%] px-2">회비통보일</TableHead>
            <TableHead className="w-[7%] px-2">벨트</TableHead>
            <TableHead className="w-[8%] px-2">출석률</TableHead>
            <TableHead className="w-[10%] px-2">회원상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((member, index) => (
            <TableRow key={member.id}>
              <TableCell className="font-medium text-gray-900 px-2 text-center py-[13px]">
                {startIndex + index + 1}
              </TableCell>
              <TableCell className="font-medium text-gray-900 px-2">
                {member.name}
              </TableCell>
              <TableCell className="text-gray-500 px-2 text-sm">
                {member.birth_date}
              </TableCell>
              <TableCell className="text-gray-500 px-2 text-sm">
                {member.phone}
              </TableCell>
              <TableCell className="px-2">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-300">
                  {member.user_metadata.time_slot}
                </span>
              </TableCell>
              <TableCell className="text-gray-500 px-2 text-sm">
                {member.join_date}
              </TableCell>
              <TableCell className="text-gray-500 px-2 text-sm">
                {member.created_at.split('T')[0]}
              </TableCell>
              <TableCell className="text-gray-500 px-2 text-sm">
                {member.updated_at?.split('T')[0] || '-'}
              </TableCell>
              <TableCell className="px-2">
                <span
                  className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium border ${getBeltColor(member.current_belt || 'white')}`}
                >
                  {member.current_belt}
                </span>
              </TableCell>
              <TableCell className="px-2 text-center">
                <span
                  className={`font-medium text-sm ${getAttendanceRateColor(member.user_metadata.attendance_rate)}`}
                >
                  {member.user_metadata.attendance_rate}%
                </span>
              </TableCell>
              <TableCell className="px-2">
                <span
                  className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium border ${getMembershipStatusColor(member.status || 'active')}`}
                >
                  {getMembershipStatusText(member.status || 'active')}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
