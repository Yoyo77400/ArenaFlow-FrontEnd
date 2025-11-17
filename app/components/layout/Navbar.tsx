import { Link } from "react-router";
import { DynamicConnectButton } from "../wallet/DynamicConnectButton";
import { Button } from "../UI-UX/Button";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export function Navbar() {
  const { primaryWallet, user } = useDynamicContext();

  return (
    <header className="w-full border-b border-slate-800 bg-black/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-500" />
          <span className="text-sm font-semibold tracking-tight">
            ArenaFlow
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          {primaryWallet && (
            <Link to="/dashboard">
              <Button variant="ghost" className="px-4 py-1.5">
                Dashboard
              </Button>
            </Link>
          )}

          <Link
            to="/about"
            className="text-sm text-slate-200 hover:text-white"
          >
            About us
          </Link>
          <DynamicConnectButton />
        </nav>
      </div>
    </header>
  );
}
