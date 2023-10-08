import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../../features/pokemonDetails/PokemonDetails";
import { getPokemonsDetails } from "../../features/pokemonDetails/asyncAction";
import { Pokemon } from "../../features/pokeList/types";
import { useDispatch } from "react-redux";
import { addPokeTeam } from "../../redux/actions/pokemonTeamActions";
import { Toast } from "primereact/toast";

const PokemonDetailsPage = () => {
  const toastRef = useRef<Toast>(null);

  const showToast = (detail: string, severity: any, summary: string) => {
    toastRef.current?.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 1500,
    });
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getPokemonsDetails(id);
      setPokemon(pokemon);
    };

    fetchData();
  }, [id]);

  if (!pokemon) return "Cargando detalle";

  const addOnTeam = () => {
    dispatch(addPokeTeam(pokemon));
    showToast("Info", "info", "Pokemon añadido!");
  };

  return (
    <div>
      <Toast ref={toastRef} />
      <PokemonDetails data={pokemon} onAdd={() => addOnTeam()} />
    </div>
  );
};

export default PokemonDetailsPage;
