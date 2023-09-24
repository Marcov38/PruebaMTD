import { useEffect, useState } from "react";
import { ServiceParams } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./asyncAction";

const Prueba = () => {
  const pokemons = useSelector((state: any) => state.pokemons.data);

  const dispatch = useDispatch();

  let params: ServiceParams = {
    offset: 20,
    limit: 20,
  };

  useEffect(() => {
    getPokemons(params);
  }, [dispatch]);

  console.log(pokemons);
  return <div>Prueba</div>;
};

export default Prueba;
