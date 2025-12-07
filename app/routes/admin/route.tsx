import { AdminContent } from "@app/components/admin/admin-content"

export function meta() {
  return [
    { title: "Admin Dashboard - ArenaFlow" },
    { name: "description", content: "Platform administration and analytics" },
  ]
}

export default function AdminPage() {
  return <AdminContent />
}
