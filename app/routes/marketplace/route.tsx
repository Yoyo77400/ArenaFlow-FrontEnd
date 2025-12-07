import { Header } from "@app/components/layout/header"
import { Footer } from "@app/components/layout/footer"
import { MarketplaceContent } from "@app/components/marketplace/marketplace-content"

export function meta() {
  return [
    { title: "Marketplace - ArenaFlow" },
    { name: "description", content: "Buy and sell NFT tickets on the secondary market" },
  ]
}

export default function MarketplacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MarketplaceContent />
      </main>
      <Footer />
    </div>
  )
}
