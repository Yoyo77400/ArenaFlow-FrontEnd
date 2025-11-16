import type { Route } from "../+types/dashboard.events";
import { mockEvents } from "../../features/tickets/api/mockTickets";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Événements • ArenaFlow" }];
}

export default function DashboardEvents() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold mb-1">Événements</h1>
        <p className="text-sm text-slate-300">
          Liste des prochains matchs / événements disponibles dans ArenaFlow.
        </p>
      </header>

      <div className="space-y-3">
        {mockEvents.map((event) => (
          <div key={event.id} className="card flex justify-between items-center">
            <div>
              <h2 className="font-medium">{event.name}</h2>
              <p className="text-xs text-slate-400">
                {event.date} · {event.venue}
              </p>
            </div>
            <p className="text-xs text-slate-300">
              {event.availableTickets} places disponibles
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
