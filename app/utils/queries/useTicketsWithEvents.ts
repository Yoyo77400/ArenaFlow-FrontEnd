import { useMemo } from "react";
import { useEvents } from "./useEvents";
import { useUserTickets } from "./useUserTickets";
import { useQuery } from "@tanstack/react-query";
import { getUserTickets, type TicketDto } from "../services/ticket";
import { getEvents, type EventDto } from "../services/event";
import { api } from "../api/http";

export function useTicketsWithEvents(userId?: string, opts?: { enabled?: boolean }) {
  const enabled = opts?.enabled ?? true;

  const eventsQ = useQuery({
    queryKey: ["events"],
    queryFn: () => api<EventDto[]>("/events", { method: "GET" }),
    enabled,
    staleTime: 30_000,
  });

  const ticketsQ = useQuery({
    queryKey: ["tickets", "user", userId],
    queryFn: () => api<TicketDto[]>(`/tickets/user/${encodeURIComponent(userId!)}`, { method: "GET" }),
    enabled: enabled && !!userId,
    staleTime: 10_000,
  });

  const data = useMemo(() => {
    const byEventId = new Map((eventsQ.data ?? []).map(e => [e._id, e]));
    return (ticketsQ.data ?? []).map(t => ({ ...t, event: byEventId.get(t.eventId) }));
  }, [eventsQ.data, ticketsQ.data]);

  return {
    isPending: enabled ? (eventsQ.isPending || ticketsQ.isPending) : true,
    error: eventsQ.error || ticketsQ.error,
    data,
  };
}