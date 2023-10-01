import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonsDetails } from "../../features/pokemonDetails/asyncAction";

const PokemonDetails = lazy(
  () => import("../../features/pokemonDetails/PokemonDetails")
);

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await getPokemonsDetails(id, dispatch);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <PokemonDetails />
      </Suspense>
    </div>
  );
};

export default PokemonDetailsPage;
