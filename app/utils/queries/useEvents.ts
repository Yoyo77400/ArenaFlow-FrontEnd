import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../services/event";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
    staleTime: 30_000,
  });
}
