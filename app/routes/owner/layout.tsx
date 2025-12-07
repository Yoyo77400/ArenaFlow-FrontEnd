import { Outlet } from "react-router"
import { Header } from "@app/components/layout/header"
import { Sidebar } from "@app/components/layout/sidebar"

export default function OwnerLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 pt-16">
        <Sidebar role="owner" />
        <main className="flex-1 p-6 lg:p-8 lg:ml-64 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
