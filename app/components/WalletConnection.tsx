"use client";
import { getAuthToken, useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useState, useEffect, useMemo } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import { ChevronDown, LogOut } from "lucide-react"
import { cn } from "@app/utils/cn"
import { formatAddress } from "@app/utils/format"
import { useLocation } from "react-router";
import { isAdmin } from "@app/utils/services/auth";

type Role = "user" | "owner" | "admin";

function roleFromPath(pathname: string): Role {
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/owner")) return "owner";

  return "user";
}

export default function WalletConnection() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [isAdminState, setIsAdminState] = useState(false);
  const { user, setShowAuthFlow, handleLogOut, primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address || null;
  const isConnected = Boolean(primaryWallet);
  const isLoggedIn = useIsLoggedIn();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [role, setRole] = useState<Role>(roleFromPath(pathname));
  const activeRole = useMemo(() => roleFromPath(pathname), [pathname]);
  const token = getAuthToken();
  const disconnect = () => {
    handleLogOut();
    navigate("/");
  };

  useEffect(() => { 
    if(isLoggedIn && token) {
      isAdmin(token).then(isAdmin => {
        setIsAdminState(isAdmin);
      }).catch(err => {
        console.error("Failed to check admin status", err);
      });
    } else {
      setIsAdminState(false);
    }
  }, [isLoggedIn, token]);
  
  
  const roles: Role[] = useMemo(() => {
    const base: Role[] = ["user", "owner"];
    if (isAdminState) base.push("admin");
    return base;
  }, [isAdminState]);
  
  return (
    <>
      {isConnected && address ? (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 transition-colors hover:bg-secondary"
          >
            
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
                  {(roles).map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setRole(r)
                        r === "user" ? navigate("/dashboard") : navigate(`/${r}`);
                      }}
                      className={cn(
                        "flex-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
                        activeRole === r ? "bg-cyan-500/20 text-cyan-400" : "bg-secondary hover:bg-secondary/80",
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