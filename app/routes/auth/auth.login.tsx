import type { Route } from "../+types/auth.login";
import type { FormEvent } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Connexion • ArenaFlow" }];
}

export default function Login() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Ici, tu pluggeras plus tard la vraie logique (wallet, backend, etc.)
    alert("Connexion simulée");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div className="space-y-1">
        <label className="block text-xs text-slate-300">Email</label>
        <input
          type="email"
          className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
          placeholder="yohan@example.com"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-xs text-slate-300">Mot de passe</label>
        <input
          type="password"
          className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 py-2 text-sm font-medium"
      >
        Se connecter
      </button>
    </form>
  );
}
