import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetResponse,
  Pokemon,
  ServiceParams,
} from "../../features/pokeList/types";
import { getPokemons } from "../../features/pokeList/asyncAction";
import { saveDetailsPokemon } from "../../redux/actions/saveDetailsPokemon";

const PokemonDetails = lazy(
  () => import("../../features/pokemonDetails/PokemonDetails")
);

const PokemonDetailsPage = () => {
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

  const pokeDetails = useSelector((state: any) => state.pokemonDetails.data);
  const { id } = useParams();

  const pokemonInfo = pokeDetails?.find(
    (poke: Pokemon) => poke.id.toString() === id
  );

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <PokemonDetails pokemonInfo={pokemonInfo} />
      </Suspense>
    </div>
  );
};

export default PokemonDetailsPage;
