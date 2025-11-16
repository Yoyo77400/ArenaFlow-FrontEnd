import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-xl font-semibold">ArenaFlow</h1>
          <p className="text-xs text-slate-400">
            Connexion / création de compte (simulé côté front).
          </p>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
