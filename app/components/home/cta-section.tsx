// ============================================
// CTA Section
// ============================================

import { ArrowRight } from "lucide-react"
import { Button } from "@app/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-700" />
          <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Experience the Future of Ticketing?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 text-pretty">
              Join thousands of users who have already discovered secure, transparent, and seamless event ticketing on
              ArenaFlow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-white text-cyan-600 hover:bg-white/90">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
