import type { Route } from "../+types/dashboard.loyalty";
import { LoyaltySummary } from "../../features/loyalty/components/LoyaltySummary";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Loyalty • ArenaFlow" }];
}

export default function DashboardLoyalty() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold mb-1">Loyalty Token</h1>
        <p className="text-sm text-slate-300">
          Points de fidélité dérivés de tes présences et achats.
        </p>
      </header>

      <LoyaltySummary detailed />
    </div>
  );
}
