import { api } from "../api/http";

export type TicketStatus = "ACTIVE" | "VALIDATED" | "CANCELLED";

export type TicketDto = {
  _id: string;
  eventId: string;
  category: string;
  userId: string;
  seatNumber?: string;
  purchaseDate: string;
  price: number;
  qrCodeData: string;
  image?: string;
  status: TicketStatus;
  contractAddress?: string;
  createdAt?: string;
  updatedAt?: string;
};


export type Ticket = Omit<TicketDto, "purchaseDate" | "createdAt" | "updatedAt"> & {
  purchaseDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export async function getUserTickets(userId: string): Promise<Ticket[]> {
  const tickets = await api<TicketDto[]>(`/tickets/user/${encodeURIComponent(userId)}`, {
    method: "GET",
  });

  return tickets.map(t => ({
    ...t,
    purchaseDate: new Date(t.purchaseDate),
    createdAt: t.createdAt ? new Date(t.createdAt) : undefined,
    updatedAt: t.updatedAt ? new Date(t.updatedAt) : undefined,
  }));
}

export type CreateTicketPayload = {
  userId: string;
  eventId: string;
  status?: TicketStatus; // sinon default ACTIVE côté back
  tokenId?: string;
  contractAddress?: string;
};

export function createTicket(payload: CreateTicketPayload) {
  return api<TicketDto>("/tickets/create", { method: "POST", json: payload });
}
