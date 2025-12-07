import { Header } from "@app/components/layout/header"
import { Footer } from "@app/components/layout/footer"
import { HeroSection } from "@app/components/home/hero-section"
import { StatsSection } from "@app/components/home/stats-section"
import { FeaturesSection } from "@app/components/home/features-section"
import { HowItWorksSection } from "@app/components/home/how-it-works-section"
import { EventsSection } from "@app/components/home/events-section"
import { CtaSection } from "@app/components/home/cta-section"

export function meta() {
  return [
    { title: "ArenaFlow - Web3 Ticketing Platform" },
    {
      name: "description",
      content: "The future of event ticketing on the blockchain. Secure, transparent, and fraud-proof.",
    },
  ]
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <EventsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
