"use client";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import { ChevronDown, LogOut, LayoutDashboard } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar"
import { cn } from "@app/utils/cn"
import { formatAddress } from "@app/utils/format"
import { Link } from "react-router";


export default function WalletConnection() {
  const navigate = useNavigate();
  const { user, setShowAuthFlow, handleLogOut, primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address || null;
  const isConnected = Boolean(primaryWallet);
  const isLoggedIn = useIsLoggedIn();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [role, setRole] = useState<"user" | "eventProvider" | "admin">("user");
  const switchRole = (newRole: typeof role) => setRole(newRole);
  const disconnect = () => {
    handleLogOut();
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <Button
        type="button"
        onClick={() => { setShowAuthFlow(true); }}
        className="cursor-pointer"
        variant="gradient"
        size="lg"
      >
        Connect Wallet
      </Button>
    );
  }
  return (
    <>
      {isConnected && address ? (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 transition-colors hover:bg-secondary"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src={"/placeholder.svg"} />
              <AvatarFallback className="text-xs">{address.slice(2, 4).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{formatAddress(address)}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card p-2 shadow-xl">
              <div className="px-3 py-2 border-b border-border mb-2">
                <p className="text-xs text-muted-foreground">Connected as</p>
                <p className="text-sm font-medium">{formatAddress(address, 6)}</p>
              </div>
              <div className="px-3 py-2">
                <p className="text-xs text-muted-foreground mb-2">Switch Role</p>
                <div className="flex gap-1">
                  {(["user", "eventProvider", "admin"] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => switchRole(r)}
                      className={cn(
                        "flex-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
                        role === r ? "bg-cyan-500/20 text-cyan-400" : "bg-secondary hover:bg-secondary/80",
                      )}
                    >
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  disconnect()
                  setIsDropdownOpen(false)
                }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="h-4 w-4" />
                Disconnect
              </button>
            </div>
          )}
        </div>
      ) : (<Button
        type="button"
        onClick={() => { setShowAuthFlow(true); }}
        className="cursor-pointer"
        variant="gradient"
        size="lg"
      >
        Connect Wallet
      </Button>
      )}
    </>
  );
}