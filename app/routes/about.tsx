import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About us • ArenaFlow" }];
}

export default function About() {
  return (
    <main className="pt-16 pb-8 px-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">About us</h1>
      <p className="text-sm text-slate-300">
        ArenaFlow est une plateforme de ticketing et de fidélité pour les fans
        de sport, pensée pour connecter les clubs, les stades et les
        supporters via la blockchain.
      </p>
      <p className="text-sm text-slate-400">
        Cette version est une base front en React Router 7, utilisée pour
        prototyper l&apos;expérience fan : tickets NFT, points de fidélité,
        check-in, signatures EIP-712, etc.
      </p>
      <p className="text-xs text-slate-500">
        Tu pourras enrichir cette page avec l&apos;histoire du projet, l&apos;équipe,
        les clubs partenaires, la roadmap, etc.
      </p>
    </main>
  );
}
