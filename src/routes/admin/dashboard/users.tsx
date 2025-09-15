import { createFileRoute } from '@tanstack/react-router'
import UsersDashboardPage from '@/pages/admin/dashboard/UsersDashboardPage'

export const Route = createFileRoute('/admin/dashboard/users')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UsersDashboardPage />
}
