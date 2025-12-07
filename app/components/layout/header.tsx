// ============================================
// Header Component
// ============================================

"use client"

import * as React from "react"
import { Link } from "react-router"
import { Menu, X, Wallet, ChevronDown, LogOut, LayoutDashboard } from "lucide-react"
import { Button } from "@app/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { formatAddress } from "@app/utils/format"
import { NAVIGATION_LINKS } from "@app/utils/constants"
import { cn } from "@app/utils/cn"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  const {
    primaryWallet,
    user,
    setShowAuthFlow,
    handleLogOut,
  } = useDynamicContext();


  // connecté ?
  const isConnected = Boolean(primaryWallet);

  // adresse
  const address = primaryWallet?.address || null;

  // utilisateur Dynamic (email / socials / wallet info)
  const dynamicUser = user;

  // ouvrir la modale de connexion
  const connect = () => setShowAuthFlow(true);

  // déconnexion
  const disconnect = () => handleLogOut();

  // Dynamic n'a PAS de roles -> on crée un système local si tu en avais un
  const [role, setRole] = React.useState<"user" | "owner" | "admin" >("user");
  const switchRole = (newRole: typeof role) => setRole(newRole);

  const dashboardLink = role === "admin" ? "/admin" : role === "owner" ? "/owner" : "/dashboard"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">ArenaFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
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

                    <Link
                      to={dashboardLink}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>

                    <div className="px-3 py-2">
                      <p className="text-xs text-muted-foreground mb-2">Switch Role</p>
                      <div className="flex gap-1">
                        {(["user", "owner", "admin"] as const).map((r) => (
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
            ) : (
              <Button variant="gradient" onClick={connect}>
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {isConnected ? (
                <Link to={dashboardLink} onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full bg-transparent">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Button variant="gradient" onClick={connect} className="w-full">
                  <Wallet className="h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
