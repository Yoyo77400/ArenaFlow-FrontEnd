"use client"
import { useNavigate } from "react-router"
import {
  DynamicContextProvider,
  getAuthToken
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { createUser, logUser } from "./utils/services/auth";
const dynamicEnvironmentId = import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID! || "7ab62c67-477e-4cf0-a773-8eb0d7655e16";

export function Providers({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    return (
    <DynamicContextProvider
          settings={{
          environmentId: dynamicEnvironmentId!,
          walletConnectors: [EthereumWalletConnectors],
          events: {
            onAuthSuccess: (authResult) => {
              const { user, primaryWallet, isAuthenticated } = authResult;
              
              if (!primaryWallet) return;
              if (isAuthenticated) {
                const token = getAuthToken()
                if (!token) return;
                if (typeof window !== 'undefined') {
                  document.cookie = `dynamic-jwt=${token}; path=/; expires=${new Date(Date.now() + 60 * 60 * 24 * 7).toUTCString()}`;
                }
                
                if (user.newUser && token) {
                  createUser(user as any, primaryWallet.address, token)
                } else if (token) {
                  console.log("token:", token);
                  logUser(user.userId!, primaryWallet.address, token).then((userLogged) => {
                    console.log("Logged User:", userLogged);
                    if( userLogged && userLogged.admin) {
                      navigate("/admin");
                    } else if (userLogged && !userLogged.admin) {
                      navigate(`/dashboard/`);
                    } else {
                      navigate("/");
                    }
                  });
                }
              }
            },
          },
        }}
        >
        {children}
    </DynamicContextProvider>
  )
}