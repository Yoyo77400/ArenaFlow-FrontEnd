// ============================================
// Mock Tickets Data
// ============================================

import type { Ticket } from "@app/types"

export const mockTickets: Ticket[] = [
  {
    id: "t1",
    eventId: "1",
    tokenId: "1001",
    owner: "0x742d35Cc6634C0532925a3b844Bc9e7595f5bA21",
    originalPrice: 0.15,
    tier: "vip",
    section: "A",
    seat: "15",
    status: "valid",
    purchasedAt: new Date("2025-01-10"),
  },
  {
    id: "t2",
    eventId: "2",
    tokenId: "2001",
    owner: "0x742d35Cc6634C0532925a3b844Bc9e7595f5bA21",
    originalPrice: 0.25,
    tier: "platinum",
    section: "Floor",
    seat: "22",
    status: "valid",
    purchasedAt: new Date("2025-01-15"),
  },
  {
    id: "t3",
    eventId: "4",
    tokenId: "4001",
    owner: "0x742d35Cc6634C0532925a3b844Bc9e7595f5bA21",
    originalPrice: 0.5,
    tier: "general",
    status: "valid",
    purchasedAt: new Date("2025-01-20"),
  },
]
