"use client"
import { useNavigate } from "react-router";
import {
  DynamicContextProvider,
  getAuthToken,
  useDynamicContext
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { createUser, logUser } from "./utils/services/auth";
import { useState } from "react";
const dynamicEnvironmentId = import.meta.env.VITE_DYNAMIC_API_KEY!;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [appAuth, setAppAuth] = useState<"idle" | "pending" | "ok" | "error">("idle");

  return (
    <DynamicContextProvider
      settings={{
        environmentId: dynamicEnvironmentId!,
        walletConnectors: [EthereumWalletConnectors],
        events: {
          onAuthSuccess: async (authResult) => {
            try {
              const { user, primaryWallet, isAuthenticated, handleLogOut } = authResult;

              const token = getAuthToken();
              if (!token) {
                await handleLogOut?.();
                throw new Error("Missing Dynamic token");
              }

              if (!primaryWallet || !isAuthenticated) return;

              setAppAuth("pending");

              // 1) Appel backend obligatoire pour valider l'auth
              const userLogged = user.newUser
                ? await createUser(user as any, primaryWallet.address, token)
                : await logUser(user.userId!, primaryWallet.address, token);

              // 2) Si backend KO => on considère app non-auth
              if (!userLogged) throw new Error("Backend auth failed");

              // 3) Seulement ici on set le cookie du JWT Dynamic pour le backend
              if (typeof window !== "undefined") {
                document.cookie = `dynamic-jwt=${token}; path=/; SameSite=Lax; expires=${new Date(
                  Date.now() + 7 * 24 * 60 * 60 * 1000
                ).toUTCString()}`;
              }

              setAppAuth("ok");

              // 4) Sécurisation de la connexion selon le rôle et les reponses du backend pas uniquement sur l'auth Dynamic
              if (userLogged.admin) navigate("/admin");
              else navigate("/dashboard");
            } catch (e) {
              console.log("Auth error:", e);
              console.error(e);
              setAppAuth("error");
              try { await authResult.handleLogOut?.(); } catch { }

              // nettoie cookie app
              document.cookie = "dynamic-jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
              // Ajouter une page de redirection vers une page d'erreur où ajouter par la suite un sytème de notification pour indiqué l'erreur à l'utilisateur"
              navigate("/");
            }
          },
        },
      }}
    >
      <AppProviders>
        {children}
      </AppProviders>
    </DynamicContextProvider>
  )
}