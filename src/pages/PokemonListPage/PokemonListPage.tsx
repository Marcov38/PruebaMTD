import "primereact/resources/primereact.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../../features/pokeList/PokemonList";
import { getPokemons } from "../../features/pokeList/asyncAction";
import { ServiceParams } from "../../features/pokeList/types";
import { saveDetailsPokemon } from "../../redux/actions/saveDetailsPokemon";
import React, { useState } from "react";
import { PaginatorPageChangeEvent } from "primereact/paginator";

const PokemonListPage = () => {
  const pokeDetails = useSelector((state: any) => state.pokemonDetails.data);

  const dispatch = useDispatch();

  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const params: ServiceParams = {
    offset: first,
    limit: rows,
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
      <PokemonList
        pokemons={pokeDetails}
        onPageChange={onPageChange}
        first={first}
        rows={rows}
      />
    </div>
  );
};

export default PokemonListPage;
