// ============================================
// User Tickets Content
// ============================================

"use client"

import { QrCode, ExternalLink, Tag, Ticket } from "lucide-react"
import { Card, CardContent } from "@app/components/ui/card"
import { Badge } from "@app/components/ui/badge"
import { Button } from "@app/components/ui/button"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { mockTickets } from "@app/features/data/mock-tickets"
import { mockEvents } from "@app/features/data/mock-events"
import { formatDate, formatCurrency } from "@app/utils/format"
import { TICKET_TIERS } from "@app/utils/constants"

export function TicketsContent() {
  const { primaryWallet, user } = useDynamicContext();

  const userTickets = mockTickets.filter((t) => t.owner === primaryWallet?.address)
  const ticketsWithEvents = userTickets.map((ticket) => ({
    ...ticket,
    event: mockEvents.find((e) => e.id === ticket.eventId),
  }))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Tickets</h1>
        <p className="text-muted-foreground">View and manage your NFT tickets.</p>
      </div>

      {ticketsWithEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ticketsWithEvents.map((ticket) => (
            <Card key={ticket.id} className="overflow-hidden">
              <div className="relative aspect-video bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-6xl">🎫</span>
                <Badge className={`absolute top-3 right-3 ${TICKET_TIERS[ticket.tier].color} text-white border-0`}>
                  {TICKET_TIERS[ticket.tier].label}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{ticket.event?.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {ticket.event ? formatDate(ticket.event.date) : "N/A"}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Token ID</p>
                    <p className="font-mono text-cyan-400">#{ticket.tokenId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Purchase Price</p>
                    <p className="font-semibold">{formatCurrency(ticket.originalPrice, "ETH")}</p>
                  </div>
                </div>

                {ticket.section && (
                  <div className="text-sm text-muted-foreground mb-4">
                    Section {ticket.section} {ticket.seat && `• Seat ${ticket.seat}`}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <QrCode className="h-4 w-4" />
                    QR Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Tag className="h-4 w-4" />
                    List for Sale
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Ticket className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-xl font-semibold mb-2">No Tickets Yet</h3>
          <p className="text-muted-foreground mb-4">Browse events and get your first NFT ticket!</p>
          <Button variant="gradient">Explore Events</Button>
        </div>
      )}
    </div>
  )
}
