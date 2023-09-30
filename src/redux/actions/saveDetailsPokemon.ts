import { Pokemon } from "../../features/pokeList/types";
import { SAVE_DETAILS } from "../types/savePokemonDetailsTypes";

export const saveDetailsPokemon = (data: Pokemon[]) => ({
  type: SAVE_DETAILS,
  payload: data,
});
