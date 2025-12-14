// ============================================
// User Dashboard Content
// ============================================

"use client"

import { Ticket, TrendingUp, Wallet, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@app/components/ui/card"
import { Badge } from "@app/components/ui/badge"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { mockTickets } from "@app/features/data/mock-tickets"
import { mockEvents } from "@app/features/data/mock-events"
import { formatCurrency, formatDate } from "@app/utils/format"

const stats = [
  { label: "My Tickets", value: 3, icon: Ticket, change: "+2 this month" },
  { label: "Total Spent", value: "0.9 ETH", icon: Wallet, change: "" },
  { label: "Active Listings", value: 0, icon: TrendingUp, change: "" },
  { label: "Upcoming Events", value: 3, icon: Clock, change: "" },
]

export function DashboardContent() {
  const { primaryWallet, user } = useDynamicContext();

  const userTickets = mockTickets.filter((t) => t.owner === primaryWallet?.address)
  const ticketsWithEvents = userTickets.map((ticket) => ({
    ...ticket,
    event: mockEvents.find((e) => e.id === ticket.eventId),
  }))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here is your ticket portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  {stat.change && <p className="text-xs text-cyan-400 mt-1">{stat.change}</p>}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <stat.icon className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Tickets */}
      <Card>
        <CardHeader>
          <CardTitle>My Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ticketsWithEvents.length > 0 ? (
              ticketsWithEvents.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <Ticket className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-medium">{ticket.event?.title || "Unknown Event"}</p>
                      <p className="text-sm text-muted-foreground">
                        {ticket.event ? formatDate(ticket.event.date) : "N/A"} • {ticket.tier.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={ticket.status === "valid" ? "success" : "secondary"}>{ticket.status}</Badge>
                    <p className="font-medium text-cyan-400">{formatCurrency(ticket.originalPrice, "ETH")}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Ticket className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No tickets yet. Browse events to get started!</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
