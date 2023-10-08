import { Action } from "redux";
import { Pokemon } from "../../features/pokeList/types";
import {
  ADD_POKEMON_TEAM,
  GET_POKEMON_TEAM,
  REMOVE_POKEMON_TEAM,
} from "../types/pokemonTeamTypes";

export const addPokeTeam = (data: Pokemon) => ({
  type: ADD_POKEMON_TEAM,
  payload: data,
});

export interface GetPokeTeamAction extends Action<typeof GET_POKEMON_TEAM> {}

export const getPokeTeam = (): GetPokeTeamAction => ({
  type: GET_POKEMON_TEAM,
});

export interface RemovePokemonTeamAction {
  type: typeof REMOVE_POKEMON_TEAM;
  payload: number;
}

export const removePokemonTeam = (
  pokemonIndex: number
): RemovePokemonTeamAction => ({
  type: REMOVE_POKEMON_TEAM,
  payload: pokemonIndex,
});
