import type { Route } from "../+types/dashboard.checkin";
import { CheckInPanel } from "../../features/checkin/components/CheckInPanel";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Check-in • ArenaFlow" }];
}

export default function DashboardCheckIn() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold mb-1">Check-in</h1>
        <p className="text-sm text-slate-300">
          Simule la validation de présence à un match avec un message signé.
        </p>
      </header>

      <CheckInPanel />
    </div>
  );
}
