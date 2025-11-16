import type { Route } from "../+types/dashboard.tickets";
import { TicketList } from "../../features/tickets/components/TicketList";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Tickets • ArenaFlow" }];
}

export default function DashboardTickets() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold mb-1">Mes tickets</h1>
        <p className="text-sm text-slate-300">
          Historique des tickets NFT liés à ton wallet.
        </p>
      </header>

      <TicketList />
    </div>
  );
}
