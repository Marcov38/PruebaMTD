import { GetResponse } from "../../features/pokeList/types";
import {
  GET_POKEMONS_FAILURE,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
} from "../types/getPokemonTypes";

export const getPokemonRequest = () => ({
  type: GET_POKEMONS_REQUEST,
});

export const getPokemonSuccess = (data: GetResponse) => ({
  type: GET_POKEMONS_SUCCESS,
  payload: data,
});

export const getPokemonFailure = (error: any) => ({
  type: GET_POKEMONS_FAILURE,
  payload: error,
});
