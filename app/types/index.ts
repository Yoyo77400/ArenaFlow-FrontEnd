// ============================================
// ARENAFLOW - Type Definitions
// ============================================

export type UserRole = "user" | "owner" | "admin"

export interface User {
  id: string
  walletAddress: string
  username?: string
  avatar?: string
  role: UserRole
  createdAt: Date
}

export interface Event {
  id: string
  title: string
  description: string
  date: Date
  venue: string
  location: string
  image: string
  category: EventCategory
  totalTickets: number
  soldTickets: number
  price: number
  currency: "ETH" | "MATIC" | "USD"
  organizer: string
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
}

export type EventCategory = "concert" | "sports" | "theater" | "festival" | "conference" | "other"

export interface Ticket {
  id: string
  eventId: string
  event?: Event
  tokenId: string
  owner: string
  originalPrice: number
  currentPrice?: number
  tier: TicketTier
  seat?: string
  section?: string
  status: "valid" | "used" | "expired" | "listed"
  purchasedAt: Date
  qrCode?: string
}

export type TicketTier = "general" | "vip" | "platinum" | "backstage"

export interface MarketplaceListing {
  id: string
  ticket: Ticket
  seller: string
  price: number
  listedAt: Date
  expiresAt?: Date
}

export interface Transaction {
  id: string
  type: "purchase" | "sale" | "transfer" | "mint"
  ticketId: string
  from: string
  to: string
  price: number
  timestamp: Date
  txHash: string
}

export interface DashboardStats {
  totalTickets: number
  activeListings: number
  totalSpent: number
  totalEarned: number
}

export interface AdminStats {
  totalUsers: number
  totalEvents: number
  totalTicketsSold: number
  totalRevenue: number
  platformFees: number
}
