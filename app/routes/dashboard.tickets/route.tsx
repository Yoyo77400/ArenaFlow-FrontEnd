import { TicketsContent } from "@app/components/dashboard/tickets-content"

export function meta() {
  return [{ title: "My Tickets - ArenaFlow" }, { name: "description", content: "View and manage your NFT tickets" }]
}

export default function TicketsPage() {
  return <TicketsContent />
}
