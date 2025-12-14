// ============================================
// Events Section
// ============================================

import { Link } from "react-router"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@app/components/ui/button"
import { Card, CardContent } from "@app/components/ui/card"
import { Badge } from "@app/components/ui/badge"
import { Progress } from "@app/components/ui/progress"
import { mockEvents } from "@app/features/data/mock-events"
import { formatDate, formatCurrency } from "@app/utils/format"

export function EventsSection() {
  const featuredEvents = mockEvents.slice(0, 4)

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Trending Events</h2>
            <p className="text-muted-foreground">Discover the hottest events on ArenaFlow</p>
          </div>
          <Link to="/events">
            <Button variant="outline">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => {
            const soldPercentage = (event.soldTickets / event.totalTickets) * 100

            return (
              <Card key={event.id} className="group overflow-hidden hover:border-cyan-500/50 transition-all bg-card">
                <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-cyan-500/20 to-blue-500/20">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <Badge className="absolute top-3 left-3" variant="info">
                    {event.category}
                  </Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-1">{event.title}</h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(event.date)}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">
                        {event.soldTickets.toLocaleString()} / {event.totalTickets.toLocaleString()}
                      </span>
                      <span className="text-cyan-400">{soldPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={soldPercentage} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">From</p>
                      <p className="font-semibold text-cyan-400">{formatCurrency(event.price, event.currency)}</p>
                    </div>
                    <Button size="sm" variant="gradient">
                      Get Tickets
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
