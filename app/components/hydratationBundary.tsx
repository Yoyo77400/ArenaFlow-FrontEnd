"use client";
import { useEffect, useState } from 'react';

interface HydrationBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Composant pour éviter les erreurs d'hydratation
 * Attend que le composant soit hydraté côté client avant de rendre les enfants
 */
export default function HydrationBoundary({ children, fallback = null }: HydrationBoundaryProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Côté serveur ou avant hydratation, rendre le fallback
  if (!isHydrated) {
    return <>{fallback}</>;
  }

  // Côté client après hydratation, rendre les enfants
  return <>{children}</>;
}