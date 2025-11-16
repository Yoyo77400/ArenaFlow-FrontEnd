import { mockTickets } from "../api/mockTickets";
import { TicketCard } from "./TicketCard";

export function TicketList({ limit }: { limit?: number }) {
  const tickets = limit ? mockTickets.slice(0, limit) : mockTickets;

  if (!tickets.length) {
    return (
      <p className="text-sm text-slate-400">
        Aucun ticket pour l’instant. Quand ton wallet sera connecté, on
        affichera ici les NFT associés.
      </p>
    );
  }

  return (
    <div className="grid gap-3">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
