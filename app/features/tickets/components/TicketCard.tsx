import type { Ticket } from "../types";

function statusLabel(status: Ticket["status"]) {
  switch (status) {
    case "upcoming":
      return "À venir";
    case "used":
      return "Utilisé";
    case "expired":
      return "Expiré";
  }
}

export function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <article className="card flex flex-col gap-1 text-sm">
      <header className="flex justify-between items-center">
        <h3 className="font-semibold text-slate-50">{ticket.eventName}</h3>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200">
          {statusLabel(ticket.status)}
        </span>
      </header>
      <p className="text-xs text-slate-300">{ticket.eventDate}</p>
      <p className="text-xs text-slate-400">{ticket.venue}</p>
      <p className="text-xs text-slate-400">
        {ticket.gate} · {ticket.seat}
      </p>
    </article>
  );
}
