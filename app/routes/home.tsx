import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ArenaFlow" },
    {
      name: "description",
      content:
        "ArenaFlow – Plateforme de ticketing & loyalty pour les fans de sport.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
