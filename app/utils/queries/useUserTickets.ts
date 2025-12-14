import { useQuery } from "@tanstack/react-query";
import { getUserTickets } from "../services/ticket";

export function useUserTickets(userId?: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ["tickets", "user", userId],
    queryFn: () => getUserTickets(userId!),
    enabled: options?.enabled ?? !!userId,
    staleTime: 10_000,
  });
}
