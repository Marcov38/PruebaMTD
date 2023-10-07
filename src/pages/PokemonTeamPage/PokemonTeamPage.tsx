import { lazy, Suspense } from "react";

const PokemonTeam = lazy(
  () => import("../../features/pokemonTeam/PokemonTeam")
);

const PokemonTeamPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <PokemonTeam />
      </Suspense>
    </div>
  );
};

export default PokemonTeamPage;
