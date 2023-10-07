import { Pokemon } from "../../features/pokeList/types";
import {
  ADD_POKEMON_TEAM,
  GET_POKEMON_TEAM,
  REMOVE_POKEMON_TEAM,
} from "../types/pokemonTeamTypes";
import { IActions } from "./getPokemonReducer";

interface InitialState {
  loading: boolean;
  data: Pokemon[];
  error: any | null;
}

const initialState: InitialState = {
  loading: false,
  data: [],
  error: null,
};

export const teamPokemonsReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case ADD_POKEMON_TEAM:
      if (state.data.length < 5) {
        const updateTeam = [...state.data, action.payload];
        return {
          ...state,
          data: updateTeam,
          error: null,
        };
      } else {
        return {
          ...state,
          error: "No se admiten mas de 5 pokemons en tu equipo",
        };
      }
    case GET_POKEMON_TEAM:
      return {
        ...state,
        error: null,
      };
    case REMOVE_POKEMON_TEAM:
      const updateTeam = state.data.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      return {
        ...state,
        data: updateTeam,
        error: null,
      };
    default:
      return state;
  }
};
