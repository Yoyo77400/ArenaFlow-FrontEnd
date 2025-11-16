import { useState } from "react";
import type { CheckInState } from "../api/mockCheckIn";
import { simulateCheckIn } from "../api/mockCheckIn";

interface Props {
  compact?: boolean;
}

export function CheckInPanel({ compact }: Props) {
  const [state, setState] = useState<CheckInState | null>(null);

  function handleCheckIn(mode: "wallet" | "qrcode") {
    const result = simulateCheckIn(mode);
    setState(result);
  }

  return (
    <section className="card space-y-3 text-sm">
      <header className="flex items-center justify-between gap-2">
        <div>
          <h2 className="font-semibold">Check-in</h2>
          <p className="text-xs text-slate-400">
            Simulation de validation de présence.
          </p>
        </div>
      </header>

      <div className="flex gap-2 text-xs">
        <button
          type="button"
          onClick={() => handleCheckIn("wallet")}
          className="flex-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 py-2 font-medium"
        >
          Signer via wallet (mock)
        </button>
        {!compact && (
          <button
            type="button"
            onClick={() => handleCheckIn("qrcode")}
            className="flex-1 rounded-lg bg-slate-800 hover:bg-slate-700 py-2 font-medium"
          >
            Scanner un QR (mock)
          </button>
        )}
      </div>

      {state && (
        <div className="text-xs rounded-lg bg-slate-900 px-3 py-2 space-y-1">
          <p className="font-medium">
            Dernier événement : {state.lastEvent ?? "—"}
          </p>
          <p
            className={
              state.lastStatus === "success"
                ? "text-emerald-400"
                : "text-red-400"
            }
          >
            {state.lastMessage}
          </p>
        </div>
      )}
    </section>
  );
}
