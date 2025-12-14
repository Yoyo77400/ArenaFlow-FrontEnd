import { api } from "../api/http";

enum EventStatus {
    SCHEDULED = "SCHEDULED",
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export type EventDto = {
    _id: string;
    eventId: string;
    name: string;
    date: string;
    location: string;
    description?: string;
    organizerId: string[];
    status: EventStatus;
    capacity: number;
    attendeesCount: number;
    contractAddress?: string;
    createdAt: string;
    updatedAt: string;
};

export type Event = Omit<EventDto, "date" | "createdAt" | "updatedAt"> & {
  date: Date;
  createdAt: Date;
  updatedAt: Date;
};

export async function getEvents(): Promise<Event[]> {
const events = await api<EventDto[]>("/events", { method: "GET" });
  return events.map(e => ({
    ...e,
    date: new Date(e.date),
    createdAt: new Date(e.createdAt),
    updatedAt: new Date(e.updatedAt)
  }));
}
