import * as React from "react";
import { Wallet, Loader2 } from "lucide-react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription } from "@app/components/ui/modal";
import { Button } from "@app/components/ui/button";

// Define wallet options directly or import from appropriate module
const walletOptions = [
  { id: "metamask", name: "MetaMask", icon: "🦊" },
  { id: "walletconnect", name: "WalletConnect", icon: "🔗" },
  { id: "coinbase", name: "Coinbase Wallet", icon: "🔵" },
];

type ConnectModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ConnectModal({ open, onOpenChange }: ConnectModalProps) {
  const { setShowAuthFlow, sdkHasLoaded } = useDynamicContext();

  const [selectedWallet, setSelectedWallet] = React.useState<string | null>(null);
  const [isConnecting, setIsConnecting] = React.useState(false);

  const handleConnect = (walletId: string) => {
    setSelectedWallet(walletId);
    setIsConnecting(true);

    // Ouvre la flow Dynamic (choix du wallet + login)
    setShowAuthFlow(true);

    // Tu peux choisir de fermer ta modale ici ou non.
    // Si tu veux garder exactement ton ancien comportement :
    onOpenChange(false);
  };

  // Quand la modale se ferme (par toi ou de l’extérieur), on reset l’état local
  React.useEffect(() => {
    if (!open) {
      setIsConnecting(false);
      setSelectedWallet(null);
    }
  }, [open]);

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="sm:max-w-md">
        <ModalHeader>
          <ModalTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-cyan-400" />
            Connect Wallet
          </ModalTitle>
          <ModalDescription>
            Choose your preferred wallet to connect to ArenaFlow.
          </ModalDescription>
        </ModalHeader>

        <div className="grid gap-3 py-4">
          {walletOptions.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="h-14 justify-start gap-4 text-left bg-transparent"
              onClick={() => handleConnect(wallet.id)}
              disabled={isConnecting || !sdkHasLoaded}
            >
              <span className="text-2xl">{wallet.icon}</span>
              <span className="flex-1 font-medium">{wallet.name}</span>
              {isConnecting && selectedWallet === wallet.id && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
            </Button>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground">
          By connecting, you agree to our Terms of Service and Privacy Policy.
        </p>
      </ModalContent>
    </Modal>
  );
}
