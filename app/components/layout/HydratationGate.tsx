import { useEffect, useState } from "react";
import { useHydrated } from "../../hooks/useHydrated";

export function HydrationGate({
  children,
  fallback,
  minDelay = 1500,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
  minDelay?: number;
}) {
  const hydrated = useHydrated();
  const [delayDone, setDelayDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDelayDone(true), minDelay);
    return () => clearTimeout(t);
  }, [minDelay]);

  const ready = hydrated && delayDone;

  return <>{ready ? children : fallback}</>;
}
