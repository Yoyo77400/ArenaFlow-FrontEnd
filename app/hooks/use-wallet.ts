// ============================================
// Wallet Hook (Dynamic Integration)
// ============================================

"use client"

import { createContext, useContext } from "react"
import type { User, UserRole } from "@app/types"

interface WalletContextType {
  isConnected: boolean
  isConnecting: boolean
  address: string | null
  user: User | null
  role: UserRole
  connect: () => Promise<void>
  disconnect: () => void
  switchRole: (role: UserRole) => void
}

const WalletContext = createContext<WalletContextType | null>(null)

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

export { WalletContext }
export type { WalletContextType }
