// ============================================
// User Tickets Content
// ============================================

"use client"

import { QrCode, ExternalLink, Tag, Ticket } from "lucide-react"
import { Card, CardContent } from "@app/components/ui/card"
import { Badge } from "@app/components/ui/badge"
import { Button } from "@app/components/ui/button"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { formatDate, formatCurrency } from "@app/utils/format"
import { TICKET_TIERS } from "@app/utils/constants"
import { useTicketsWithEvents } from "@app/utils/queries/useTicketsWithEvents";
import { useEffect, useState } from "react";

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function TicketsContent() {
  
  const mounted = useMounted();
  const { user } = useDynamicContext();
  const dynamicUserId = user?.userId;

  const { data: ticketsWithEvents = [], isPending, error } =
    useTicketsWithEvents(dynamicUserId, { enabled: mounted });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Tickets</h1>
        <p className="text-muted-foreground">View and manage your NFT tickets.</p>
      </div>
      {isPending ? (
        <div className="text-muted-foreground">Chargement…</div>
      ) : error ? (
        <div className="text-red-500">Erreur: {(error as Error).message}</div>
      ) : ticketsWithEvents.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ticketsWithEvents.map((ticket) => {
            // mapping simple vers ton UI
            const tierKey = ticket.category as keyof typeof TICKET_TIERS;
            const tier = TICKET_TIERS[tierKey] ?? { label: ticket.category, color: "bg-slate-600" };

            return (
              <Card key={ticket._id} className="overflow-hidden">
                <div className="relative aspect-video bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-6xl">🎫</span>

                  <Badge className={`absolute top-3 right-3 ${tier.color} text-white border-0`}>
                    {tier.label}
                  </Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{ticket.event?.name ?? "Event introuvable"}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {ticket.event ? formatDate(ticket.event.date) : "N/A"}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Ticket ID</p>
                      <p className="font-mono text-cyan-400">#{ticket._id.slice(-6)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Purchase Price</p>
                      <p className="font-semibold">{formatCurrency(ticket.price, "EUR")}</p>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground mb-4">
                    {ticket.seatNumber ? `Seat ${ticket.seatNumber}` : "Placement libre"}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => {
                        // TODO: ouvrir modal QR (ticket.qrCodeData)
                        console.log("QR:", ticket.qrCodeData);
                      }}
                    >
                      <QrCode className="h-4 w-4" />
                      QR Code
                    </Button>

                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" disabled>
                      <Tag className="h-4 w-4" />
                      List for Sale
                    </Button>

                    <Button variant="ghost" size="sm" disabled>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <Ticket className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-xl font-semibold mb-2">No Tickets Yet</h3>
          <p className="text-muted-foreground mb-4">Browse events and get your first ticket!</p>
          <Button variant="gradient">Explore Events</Button>
        </div>
      )}
      
    </div>
  )
}
