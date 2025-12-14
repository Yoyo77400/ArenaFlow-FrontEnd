// ============================================
// Stats Section
// ============================================

import { formatNumber } from "@app/utils/format"

const stats = [
  { label: "Tickets Minted", value: 125000, suffix: "+" },
  { label: "Active Events", value: 450, suffix: "" },
  { label: "Total Volume", value: 2500, suffix: " ETH" },
  { label: "Fraud Cases", value: 0, suffix: "" },
]

export function StatsSection() {
  return (
    <section className="relative py-16 border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {formatNumber(stat.value)}
                {stat.suffix}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
