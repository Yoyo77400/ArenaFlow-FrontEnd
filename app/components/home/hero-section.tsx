// ============================================
// Hero Section
// ============================================

"use client"

import { ArrowRight, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@app/components/ui/button"
import { Badge } from "@app/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge variant="info" className="mb-6">
              Web3 Ticketing Platform
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              The Future of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Event Ticketing
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Secure, transparent, and fraud-proof ticketing powered by blockchain. Buy, sell, and transfer NFT tickets
              with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="gradient" size="xl">
                Explore Events
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Shield className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium">Fraud-Proof</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Zap className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium">Instant Transfer</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Globe className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium">Global Access</span>
              </div>
            </div>
          </div>

          {/* NFT Ticket Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-50" />

              {/* Card */}
              <div className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">A</span>
                    </div>
                    <span className="text-sm font-semibold text-white">ArenaFlow</span>
                  </div>
                  <Badge variant="success">VIP</Badge>
                </div>

                {/* Event Image */}
                <div className="rounded-xl overflow-hidden mb-4 aspect-video bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-4xl">🎵</span>
                </div>

                {/* Event Details */}
                <div className="mb-4">
                  <h3 className="font-bold text-white mb-1">Neon Nights Festival</h3>
                  <p className="text-sm text-slate-400">March 15, 2025 • Los Angeles</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div>
                    <p className="text-xs text-slate-400">Price</p>
                    <p className="text-lg font-bold text-white">0.15 ETH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Token ID</p>
                    <p className="text-sm font-mono text-cyan-400">#1001</p>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-lg bg-white p-2 shadow-lg">
                  <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAyMSI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTAgMGg3djdIMHptMiAyaDN2M0gyek0wIDE0aDd2N0gwem0yIDJoM3YzSDJ6TTE0IDBoN3Y3aC03em0yIDJoM3YzaC0zek0xNCA4aDN2M2gtM3ptLTYgMGgzdjNoLTN6bTMgM2gzdjNoLTN6bTAgNmgzdjNoLTN6bTMtM2gzdjNoLTN6bTMgMGgzdjNoLTN6bTAgNmgzdjNoLTN6TTggMTRoM3YzSDh6Ii8+PC9zdmc+')] bg-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
