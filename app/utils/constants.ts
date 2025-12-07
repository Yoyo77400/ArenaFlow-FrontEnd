// ============================================
// Application Constants
// ============================================

export const APP_NAME = "ArenaFlow"
export const APP_DESCRIPTION = "Web3 Ticketing Platform - NFT Tickets for the Future"

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How it Works", href: "/#how-it-works" },
] as const

export const DASHBOARD_NAV = {
  user: [
    { label: "Overview", href: "/dashboard", icon: "home" },
    { label: "My Tickets", href: "/dashboard/tickets", icon: "ticket" },
    { label: "Activity", href: "/dashboard/activity", icon: "activity" },
    { label: "Settings", href: "/dashboard/settings", icon: "settings" },
  ],
  owner: [
    { label: "Overview", href: "/owner", icon: "home" },
    { label: "My Events", href: "/owner/events", icon: "calendar" },
    { label: "Sales", href: "/owner/sales", icon: "chart" },
    { label: "Analytics", href: "/owner/analytics", icon: "analytics" },
  ],
  admin: [
    { label: "Overview", href: "/admin", icon: "home" },
    { label: "Users", href: "/admin/users", icon: "users" },
    { label: "Events", href: "/admin/events", icon: "calendar" },
    { label: "Transactions", href: "/admin/transactions", icon: "transaction" },
    { label: "Settings", href: "/admin/settings", icon: "settings" },
  ],
} as const

export const TICKET_TIERS = {
  general: { label: "General Admission", color: "bg-slate-500" },
  vip: { label: "VIP", color: "bg-amber-500" },
  platinum: { label: "Platinum", color: "bg-cyan-500" },
  backstage: { label: "Backstage", color: "bg-rose-500" },
} as const

export const EVENT_CATEGORIES = {
  concert: { label: "Concert", icon: "music" },
  sports: { label: "Sports", icon: "trophy" },
  theater: { label: "Theater", icon: "theater" },
  festival: { label: "Festival", icon: "sparkles" },
  conference: { label: "Conference", icon: "users" },
  other: { label: "Other", icon: "grid" },
} as const
