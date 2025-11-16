import { Button } from "../UI-UX/Button";
import { useWallet } from "../../features/wallet/context";

function shortenAddress(address?: string) {
  if (!address) return "";
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function DynamicConnectButton() {
  const { connected, address, connect, disconnect } = useWallet();

  // TODO : remplacer ce handler par l'intégration réelle Dynamic
  function handleConnectClick() {
    // Exemple plus tard :
    // dynamicSdk.showAuthFlow();
    connect();
  }

  if (!connected) {
    return (
      <Button type="button" variant="primary" onClick={handleConnectClick}>
        Connexion Dynamic Wallet
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="hidden sm:inline-block text-xs font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded-full">
        {shortenAddress(address)}
      </span>
      <Button type="button" variant="ghost" onClick={disconnect}>
        Déconnexion
      </Button>
    </div>
  );
}
