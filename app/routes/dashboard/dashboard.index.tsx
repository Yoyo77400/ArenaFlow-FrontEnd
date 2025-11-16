import type { Route } from "../+types/dashboard.index";
import { LoyaltySummary } from "../../features/loyalty/components/LoyaltySummary";
import { TicketList } from "../../features/tickets/components/TicketList";
import { CheckInPanel } from "../../features/checkin/components/CheckInPanel";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard • ArenaFlow" }];
}

export default function DashboardIndex() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-sm text-slate-300">
          Vue d’ensemble de ton activité fan (tickets, points, check-ins).
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <LoyaltySummary />
        <CheckInPanel compact />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Derniers tickets</h2>
        <TicketList limit={3} />
      </section>
    </div>
  );
}
