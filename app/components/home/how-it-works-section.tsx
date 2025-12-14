// ============================================
// How It Works Section
// ============================================

import { Wallet, Search, CreditCard, Ticket } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Connect Wallet",
    description: "Link your crypto wallet using MetaMask, WalletConnect, or email.",
  },
  {
    icon: Search,
    step: "02",
    title: "Browse Events",
    description: "Explore concerts, sports, festivals, and more happening near you.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Purchase Tickets",
    description: "Buy NFT tickets securely using ETH or other cryptocurrencies.",
  },
  {
    icon: Ticket,
    step: "04",
    title: "Attend Event",
    description: "Show your QR code at the venue for instant verification and entry.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with ArenaFlow in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-linear-to-r from-cyan-500/50 to-transparent" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <item.icon className="h-10 w-10 text-cyan-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-xs font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
