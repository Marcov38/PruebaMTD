import "primereact/resources/primereact.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../../features/pokeList/PokemonList";
import { getPokemons } from "../../features/pokeList/asyncAction";
import { ServiceParams } from "../../features/pokeList/types";
import { saveDetailsPokemon } from "../../redux/actions/saveDetailsPokemon";

const PokemonListPage = () => {
  const pokeDetails = useSelector((state: any) => state.pokemonDetails.data);
  const dispatch = useDispatch();

  const params: ServiceParams = {
    offset: 0,
    limit: 20,
  };

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getPokemons(params);

      const pokemonPromise = results.map(async (pokemon) => {
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
      <PokemonList pokemons={pokeDetails} />
    </div>
  );
};

export default PokemonListPage;
