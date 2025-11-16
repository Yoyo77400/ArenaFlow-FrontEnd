import type { Ticket, EventSummary } from "../types";

export const mockTickets: Ticket[] = [
  {
    id: "tk_om_psg_001",
    eventName: "OM vs PSG",
    eventDate: "2025-03-12 21:00",
    venue: "Orange Vélodrome",
    gate: "Porte 16",
    seat: "Bloc J, Rang 12, Siège 18",
    status: "upcoming",
  },
  {
    id: "tk_om_brest_002",
    eventName: "OM vs Brest",
    eventDate: "2025-02-28 21:00",
    venue: "Orange Vélodrome",
    gate: "Porte 10",
    seat: "Bloc G, Rang 8, Siège 22",
    status: "used",
  },
  {
    id: "tk_om_rennes_003",
    eventName: "OM vs Rennes",
    eventDate: "2025-01-15 20:45",
    venue: "Orange Vélodrome",
    gate: "Porte 4",
    seat: "Bloc C, Rang 5, Siège 10",
    status: "expired",
  },
];

export const mockEvents: EventSummary[] = [
  {
    id: "ev_om_psg",
    name: "OM vs PSG",
    date: "12 mars 2025",
    venue: "Orange Vélodrome",
    availableTickets: 124,
  },
  {
    id: "ev_om_asm",
    name: "OM vs Monaco",
    date: "20 mars 2025",
    venue: "Orange Vélodrome",
    availableTickets: 201,
  },
  {
    id: "ev_om_eur",
    name: "OM – Soirée Coupe d'Europe",
    date: "5 avril 2025",
    venue: "Orange Vélodrome",
    availableTickets: 63,
  },
];
