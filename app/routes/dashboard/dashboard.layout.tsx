import { Link, Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r border-slate-800 bg-black/40 px-4 py-6">
        <h2 className="text-lg font-semibold mb-6">ArenaFlow</h2>
        <nav className="space-y-2 text-sm">
          <NavItem to="/dashboard" label="Vue d’ensemble" />
          <NavItem to="/dashboard/events" label="Événements" />
          <NavItem to="/dashboard/tickets" label="Tickets" />
          <NavItem to="/dashboard/loyalty" label="Loyalty Token" />
          <NavItem to="/dashboard/checkin" label="Check-in" />
        </nav>
      </aside>

      <main className="flex-1 p-8 space-y-6">
        <Outlet />
      </main>
    </div>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800 hover:text-white"
    >
      {label}
    </Link>
  );
}
