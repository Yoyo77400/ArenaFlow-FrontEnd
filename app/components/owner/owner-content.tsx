// ============================================
// Owner Dashboard Content
// ============================================

"use client"

import { Calendar, Ticket, DollarSign, Users, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@app/components/ui/card"
import { Button } from "@app/components/ui/button"
import { Badge } from "@app/components/ui/badge"
import { Progress } from "@app/components/ui/progress"
import { mockEvents } from "@app/features/data/mock-events"
import { formatDate, formatCurrency, formatNumber } from "@app/utils/format"

const ownerStats = [
  { label: "My Events", value: 3, icon: Calendar },
  { label: "Tickets Sold", value: 8500, icon: Ticket },
  { label: "Total Revenue", value: 45.5, icon: DollarSign, suffix: " ETH" },
  { label: "Total Attendees", value: 8200, icon: Users },
]

export function OwnerContent() {
  const myEvents = mockEvents.slice(0, 3)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-muted-foreground">Manage your events and track sales.</p>
        </div>
        <Button variant="gradient">
          <Plus className="h-4 w-4" />
          Create Event
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ownerStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">
                    {typeof stat.value === "number" && stat.value > 1000 ? formatNumber(stat.value) : stat.value}
                    {stat.suffix || ""}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <stat.icon className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* My Events */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>My Events</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {myEvents.map((event) => {
              const soldPercentage = (event.soldTickets / event.totalTickets) * 100

              return (
                <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(event.date)} • {event.venue}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Progress value={soldPercentage} className="w-24 h-2" />
                        <span className="text-xs text-muted-foreground">{soldPercentage.toFixed(0)}% sold</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={event.status === "upcoming" ? "info" : "secondary"}>{event.status}</Badge>
                    <p className="text-lg font-semibold text-cyan-400 mt-2">
                      {formatCurrency(event.soldTickets * event.price, "ETH")}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
