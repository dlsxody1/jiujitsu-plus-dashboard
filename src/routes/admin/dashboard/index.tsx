import { createFileRoute } from '@tanstack/react-router'
import DashboardPage from '@/pages/admin/dashboard/DashboardPage'

export const Route = createFileRoute('/admin/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DashboardPage />
}
