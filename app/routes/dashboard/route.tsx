import { DashboardContent } from "@app/components/dashboard/dashboard-content"

export function meta() {
  return [
    { title: "Dashboard - ArenaFlow" },
    { name: "description", content: "Manage your NFT tickets and view your activity" },
  ]
}

export default function DashboardPage() {
  return <DashboardContent />
}
