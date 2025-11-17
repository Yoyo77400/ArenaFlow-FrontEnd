// app/features/wallet/context.tsx
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface WalletState {
  address?: string;
  connected: boolean;
}

interface WalletContextValue extends WalletState {
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WalletState>({
    address: undefined,
    connected: false,
  });

  function connect() {
    // Ici tu pluggeras plus tard Dynamic, Wagmi, etc.
    setState({
      address: "0x1234...ABCD",
      connected: true,
    });
  }

  function disconnect() {
    setState({
      address: undefined,
      connected: false,
    });
  }

  const value: WalletContextValue = {
    ...state,
    connect,
    disconnect,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    throw new Error("useWallet must be used within <WalletProvider>");
  }
  return ctx;
}
