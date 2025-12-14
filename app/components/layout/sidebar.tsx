// ============================================
// Sidebar Component
// ============================================

"use client"

import React from "react"
import { Link, useLocation } from "react-router"
import { Home, Ticket, Activity, Settings, Calendar, BarChart3, Users, CreditCard, TrendingUp } from "lucide-react"
import { cn } from "@app/utils/cn"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { DASHBOARD_NAV } from "@app/utils/constants"
import type { UserRole } from "@app/types"

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  ticket: Ticket,
  activity: Activity,
  settings: Settings,
  calendar: Calendar,
  chart: BarChart3,
  users: Users,
  transaction: CreditCard,
  analytics: TrendingUp,
}

interface SidebarProps {
  role?: UserRole
}

export function Sidebar({ role: propRole }: SidebarProps) {
  const location = useLocation();
  const pathname = location.pathname
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

  const navItems = DASHBOARD_NAV["user"]

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-border bg-card hidden lg:block">
      <div className="flex flex-col h-full p-4">
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {role === "admin" ? "Admin Panel" : role === "owner" ? "Owner Dashboard" : "My Account"}
          </span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto pt-4 border-t border-border">
          <div className="rounded-lg bg-linear-to-br from-cyan-500/10 to-blue-500/10 p-4">
            <p className="text-sm font-medium mb-1">Need Help?</p>
            <p className="text-xs text-muted-foreground mb-3">Check our documentation or contact support.</p>
            <Link to="/help" className="text-xs font-medium text-cyan-400 hover:underline">
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
