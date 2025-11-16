export type TicketStatus = "upcoming" | "used" | "expired";

export interface Ticket {
  id: string;
  eventName: string;
  eventDate: string;
  venue: string;
  gate: string;
  seat: string;
  status: TicketStatus;
}

export interface EventSummary {
  id: string;
  name: string;
  date: string;
  venue: string;
  availableTickets: number;
}
