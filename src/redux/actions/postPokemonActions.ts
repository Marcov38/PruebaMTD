import { Values } from "../../features/FormCreation/FormCreation";
import {
  POST_POKEMON_FAILURE,
  POST_POKEMON_REQUEST,
  POST_POKEMON_SUCCESS,
} from "../types/postPokemonTypes";

export const postPokemonRequest = () => ({
  type: POST_POKEMON_REQUEST,
});

export const postPokemonSuccess = (pokemon: Values) => ({
  type: POST_POKEMON_SUCCESS,
  payload: pokemon,
});

export const postPokemonFailure = (error: any) => ({
  type: POST_POKEMON_FAILURE,
  payload: error,
});
