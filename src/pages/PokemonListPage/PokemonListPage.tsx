import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetResponse, ServiceParams } from "../../features/pokeList/types";
import { getPokemons } from "../../features/pokeList/asyncAction";
import { saveDetailsPokemon } from "../../redux/actions/saveDetailsPokemon";
import "primereact/resources/primereact.min.css";

const PokemonList = lazy(() => import("../../features/pokeList/PokemonList"));

const PokemonListPage = () => {
  const pokeDetails = useSelector((state: any) => state.pokemonDetails.data);
  const dispatch = useDispatch();

  const params: ServiceParams = {
    offset: 0,
    limit: 20,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemons(params, dispatch);

      const dataResults: GetResponse = response?.payload;

      const pokemonPromise = dataResults.results.map(async (pokemon) => {
        const responseDetail = await fetch(pokemon.url);
        const data = await responseDetail.json();
        return data;
      });

      const detailsData = await Promise.all(pokemonPromise);
      dispatch(saveDetailsPokemon(detailsData));
    };

    fetchData();
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <PokemonList pokemons={pokeDetails} />
      </Suspense>
    </div>
  );
};

export default PokemonListPage;
