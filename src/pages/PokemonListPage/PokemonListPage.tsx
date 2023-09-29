import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetResponse, ServiceParams } from "../../features/pokeList/types";
import { getPokemons } from "../../features/pokeList/asyncAction";

const PokemonList = lazy(() => import("../../features/pokeList/PokemonList"));

const PokemonListPage = () => {
  const pokemons: GetResponse = useSelector(
    (state: any) => state.pokemons.data
  );
  const dispatch = useDispatch();

  const params: ServiceParams = {
    offset: 0,
    limit: 20,
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPokemons(params, dispatch);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <PokemonList pokemons={pokemons} />
      </Suspense>
    </div>
  );
};

export default PokemonListPage;
