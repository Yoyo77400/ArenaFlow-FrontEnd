// ============================================
// Admin Dashboard Content
// ============================================

"use client"

import { Users, Calendar, Ticket, DollarSign, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@app/components/ui/card"
import { formatNumber } from "@app/utils/format"

const adminStats = [
  { label: "Total Users", value: 12500, icon: Users, change: "+15%" },
  { label: "Active Events", value: 450, icon: Calendar, change: "+8%" },
  { label: "Tickets Sold", value: 125000, icon: Ticket, change: "+22%" },
  { label: "Platform Revenue", value: 125, icon: DollarSign, suffix: " ETH", change: "+18%" },
]

const recentActivity = [
  { type: "user", message: "New user registered", time: "2 min ago" },
  { type: "event", message: 'New event created: "Summer Fest 2025"', time: "15 min ago" },
  { type: "sale", message: "50 tickets sold for UFC 310", time: "1 hour ago" },
  { type: "alert", message: "High demand detected for Coachella", time: "2 hours ago" },
]

export function AdminContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Platform overview and management.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {adminStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">
                    {typeof stat.value === "number" ? formatNumber(stat.value) : stat.value}
                    {stat.suffix || ""}
                  </p>
                  <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
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

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${activity.type === "alert" ? "bg-amber-400" : "bg-cyan-400"}`}
                  />
                  <span className="text-sm">{activity.message}</span>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
