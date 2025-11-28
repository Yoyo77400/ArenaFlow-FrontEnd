import logoDark from "./assets/logo-dark.svg";
import logoLight from "./assets/logo-light.svg";
import { Link } from "react-router";

const links = [
  {
    href: "https://reactrouter.com/",
    label: "Docs React Router",
  },
  {
    href: "https://github.com/",
    label: "Repo GitHub ArenaFlow (à venir)",
  },
];

export function HomeView() {
  return (
    <>
      <main className="flex items-center justify-center pt-16 pb-6">
        <div className="flex-1 flex flex-col items-center gap-14 min-h-0">
          <header className="flex flex-col items-center gap-6">
            <div className="w-[420px] max-w-[100vw] p-4">
              <img
                src={logoLight}
                alt="ArenaFlow"
                className="block w-full dark:hidden"
              />
              <img
                src={logoDark}
                alt="ArenaFlow"
                className="hidden w-full dark:block"
              />
            </div>

            <div className="text-center space-y-2 px-4 max-w-xl">
              <h1 className="text-3xl font-semibold tracking-tight">
                Bienvenue sur ArenaFlow Frontend
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed">
                Base React Router 7 prête pour construire ton portail
                ticketing & fidélité (fans, clubs, check-ins EIP-712, etc.).
              </p>
            </div>
          </header>

          <section className="max-w-[360px] w-full px-4 space-y-4">
            <nav className="rounded-3xl border border-gray-800 bg-black/40 p-6 space-y-4">
              <p className="text-center text-sm text-gray-300">
                Prochaines étapes :
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 text-[11px]">
                        ↗
                      </span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="text-center text-xs text-slate-400 space-y-1">
              <p>
                Tu peux déjà explorer le{" "}
                <Link to="/dashboard" className="text-blue-400 underline">
                  dashboard ArenaFlow
                </Link>{" "}
                pour voir la structure des features.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
