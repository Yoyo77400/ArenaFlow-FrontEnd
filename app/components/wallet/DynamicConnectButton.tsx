import { Button } from "../UI-UX/Button";
import {
  DynamicConnectButton as DynamicConnectButtonInner,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";

function shortenAddress(address?: string) {
  if (!address) return "";
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function DynamicConnectButton() {
  const { user, primaryWallet, handleLogOut } = useDynamicContext();

  const address = primaryWallet?.address;

  // PAS connecté → bouton qui ouvre le flow Dynamic
  if (!user) {
    return (
      <DynamicConnectButtonInner>
        <Button type="button" variant="primary">
          Connexion Dynamic Wallet
        </Button>
      </DynamicConnectButtonInner>
    );
  }

  // 🔐 Connecté → afficher l’adresse + bouton de déconnexion
  return (
    <div className="flex items-center gap-2">
      {address && (
        <span className="hidden sm:inline-block text-xs font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded-full">
          {shortenAddress(address)}
        </span>
      )}
      <Button
        type="button"
        variant="ghost"
        onClick={() => {
          void handleLogOut();
        }}
      >
        Déconnexion
      </Button>
    </div>
  );
}