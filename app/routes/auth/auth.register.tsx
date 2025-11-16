import type { Route } from "../+types/auth.register";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Créer un compte • ArenaFlow" }];
}

export default function Register() {
  return (
    <div className="space-y-3 text-sm">
      <p className="text-slate-300">
        Ici tu pourras plus tard gérer la création de compte classique,
        ou rediriger vers une connexion par wallet.
      </p>
      <p className="text-xs text-slate-400">
        Pour l’instant, va directement sur le dashboard en local pour tester
        l’interface : <code>/dashboard</code>.
      </p>
    </div>
  );
}
