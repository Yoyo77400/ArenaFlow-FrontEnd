// ============================================
// Marketplace Content
// ============================================

"use client"

import * as React from "react"
import { Search, Filter, ArrowUpDown, Clock } from "lucide-react"
import { Card, CardContent } from "@app/components/ui/card"
import { Button } from "@app/components/ui/button"
import { Badge } from "@app/components/ui/badge"
import { Input } from "@app/components/ui/input"
import { mockEvents } from "@app/features/data/mock-events"
import { formatDate, formatCurrency } from "@app/utils/format"
import { TICKET_TIERS } from "@app/utils/constants"
import type { TicketTier } from "@app/types"

// Mock marketplace listings
const mockListings = [
  {
    id: "l1",
    eventId: "1",
    tokenId: "1042",
    tier: "vip" as TicketTier,
    price: 0.22,
    originalPrice: 0.15,
    seller: "0xabc...def",
    listedAt: new Date("2025-01-05"),
  },
  {
    id: "l2",
    eventId: "2",
    tokenId: "2156",
    tier: "platinum" as TicketTier,
    price: 0.35,
    originalPrice: 0.25,
    seller: "0x123...456",
    listedAt: new Date("2025-01-08"),
  },
  {
    id: "l3",
    eventId: "5",
    tokenId: "5089",
    tier: "general" as TicketTier,
    price: 0.55,
    originalPrice: 0.4,
    seller: "0x789...abc",
    listedAt: new Date("2025-01-10"),
  },
  {
    id: "l4",
    eventId: "3",
    tokenId: "3201",
    tier: "vip" as TicketTier,
    price: 0.45,
    originalPrice: 0.35,
    seller: "0xdef...123",
    listedAt: new Date("2025-01-12"),
  },
]

export function MarketplaceContent() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const listingsWithEvents = mockListings.map((listing) => ({
    ...listing,
    event: mockEvents.find((e) => e.id === listing.eventId),
  }))

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">Buy and sell NFT tickets on the secondary market.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listingsWithEvents.map((listing) => (
            <Card key={listing.id} className="overflow-hidden group">
              <div className="relative aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-5xl">🎫</span>
                <Badge className={`absolute top-3 left-3 ${TICKET_TIERS[listing.tier].color} text-white border-0`}>
                  {TICKET_TIERS[listing.tier].label}
                </Badge>
                <Badge variant="secondary" className="absolute top-3 right-3">
                  Resale
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-1 line-clamp-1">{listing.event?.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {listing.event ? formatDate(listing.event.date) : "N/A"}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Token ID</p>
                    <p className="font-mono text-sm text-cyan-400">#{listing.tokenId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Seller</p>
                    <p className="font-mono text-sm">{listing.seller}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground line-through">
                      {formatCurrency(listing.originalPrice, "ETH")}
                    </p>
                    <p className="text-lg font-bold text-cyan-400">{formatCurrency(listing.price, "ETH")}</p>
                  </div>
                  <Button size="sm" variant="gradient">
                    Buy Now
                  </Button>
                </div>

                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Listed {formatDate(listing.listedAt)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
