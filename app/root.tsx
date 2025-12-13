import { Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigate } from "react-router"
import "./styles/globals.css"
import { Header } from "./components/layout/header";
import { Providers } from "./providers";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>ArenaFlow - Web3 Ticketing</title>
        <meta name="description" content="The future of event ticketing on the blockchain" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
            {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Error - ArenaFlow</title>
      </head>
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Providers>
          <Header />
        </Providers>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-destructive mb-4">Oops!</h1>
          <p className="text-muted-foreground mb-4">Something went wrong</p>
          <pre className="text-sm text-left bg-card p-4 rounded-lg max-w-lg overflow-auto">{error.message}</pre>
        </div>
      </body>
    </html>
  )
}
