// ============================================
// Header Component
// ============================================

"use client"

import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import { useDynamicContext, getAuthToken, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { NAVIGATION_LINKS } from "@app/utils/constants"
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router";
import { isAdmin } from "@app/utils/services/auth";
import HydrationBoundary from "../hydratationBundary";
import WalletConnection from "../WalletConnection";

export function Header() {
  const {
    primaryWallet,
  } = useDynamicContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppLaunched, setIsAppLaunched] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    setIsHydrated(true);
  }, []);
    
  useEffect(() => {
    if (!isHydrated) return; // Attendre l'hydratation
    
    // Détecter si l'utilisateur est dans l'application (pas sur les pages marketing)
    const appPaths = ["/app", "/admin"];
    const isInApp = appPaths.some(path => pathname.includes(path));
    
    // Ou si c'est la page d'accueil, considérer que l'app n'est pas lancée
    const isHomePage = pathname === "/";
    
    setIsAppLaunched(isInApp && !isHomePage);
  }, [isHydrated]);
  

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-blue-600">
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
            {Boolean(primaryWallet) && (
                <Link
                  to={"/dashboard"}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                )
              }
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <HydrationBoundary>
              <WalletConnection/>
            </HydrationBoundary>
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
              {Boolean(primaryWallet) && (
                <Link
                  to={"/dashboard"}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                )
              }
              <HydrationBoundary>
                <WalletConnection />
              </HydrationBoundary>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
