import { Pokemon } from "../../features/pokeList/types";
import {
  GET_DETAILS_FAILURE,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  SAVE_DETAILS,
} from "../types/savePokemonDetailsTypes";

export const saveDetailsPokemon = (data: Pokemon[]) => ({
  type: SAVE_DETAILS,
  payload: data,
});

export const getDetailsPokemonRequest = () => ({
  type: GET_DETAILS_REQUEST,
});

export const getDetailsPokemonSuccess = (data: Pokemon) => ({
  type: GET_DETAILS_SUCCESS,
  payload: data,
});

export const getDetailsPokemonFailure = (error: any) => ({
  type: GET_DETAILS_FAILURE,
  payload: error,
});
