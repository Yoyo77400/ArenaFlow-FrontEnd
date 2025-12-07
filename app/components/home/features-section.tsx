// ============================================
// Features Section
// ============================================

import { Shield, Repeat, Coins, QrCode, Lock, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@app/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Fraud Prevention",
    description: "Each ticket is a unique NFT on the blockchain, making counterfeiting impossible.",
  },
  {
    icon: Repeat,
    title: "Easy Resale",
    description: "Safely resell your tickets on our marketplace with automatic royalties to organizers.",
  },
  {
    icon: Coins,
    title: "Crypto Payments",
    description: "Pay with ETH, MATIC, or other supported cryptocurrencies for instant transactions.",
  },
  {
    icon: QrCode,
    title: "Digital Entry",
    description: "Seamless venue entry with QR code verification linked to your wallet.",
  },
  {
    icon: Lock,
    title: "True Ownership",
    description: "Your tickets are stored in your wallet - you have full control over your assets.",
  },
  {
    icon: TrendingUp,
    title: "Price Discovery",
    description: "Fair market pricing with transparent transaction history for all tickets.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose ArenaFlow?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionary features that transform how you buy, sell, and experience live events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:border-cyan-500/50 transition-colors bg-card/50">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 mb-4 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
