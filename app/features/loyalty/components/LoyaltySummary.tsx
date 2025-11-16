import { mockLoyalty } from "../api/mockLoyalty";

interface Props {
  detailed?: boolean;
}

export function LoyaltySummary({ detailed }: Props) {
  return (
    <section className="card space-y-3 text-sm">
      <header className="flex justify-between items-center">
        <h2 className="font-semibold">Loyalty Token</h2>
        <span className="text-[11px] text-slate-400">
          {mockLoyalty.lastUpdated}
        </span>
      </header>

      <p className="text-xs text-slate-300">
        Adresse (mock) :{" "}
        <span className="font-mono text-[11px]">
          {mockLoyalty.address}
        </span>
      </p>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold">{mockLoyalty.balance}</span>
        <span className="text-xs text-slate-400">pts</span>
      </div>

      <p className="text-xs text-emerald-400">
        +{mockLoyalty.pendingPoints} pts en attente de validation (check-ins,
        achats, missions…)
      </p>

      {detailed && (
        <p className="text-xs text-slate-400">
          Plus tard, ce composant consommera les données on-chain (ERC‑20)
          via ton provider EVM (Alchemy, Infura, RPC club, etc.).
        </p>
      )}
    </section>
  );
}
