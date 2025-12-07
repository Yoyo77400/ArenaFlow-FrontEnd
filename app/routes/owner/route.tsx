import { OwnerContent } from "@app/components/owner/owner-content"

export function meta() {
  return [
    { title: "Owner Dashboard - ArenaFlow" },
    { name: "description", content: "Manage your events and ticket sales" },
  ]
}

export default function OwnerPage() {
  return <OwnerContent />
}
