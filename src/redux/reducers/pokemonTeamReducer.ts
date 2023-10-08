import { DateTime } from "luxon";
import { Pokemon } from "../../features/pokeList/types";
import {
  ADD_POKEMON_TEAM,
  REMOVE_POKEMON_TEAM,
} from "../types/pokemonTeamTypes";

export interface IActions {
  type: string;
  payload: any;
}

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
      const pokeImg = action.payload.sprites?.front_default;
      const pokeName = action.payload.name;
      const pokeId = action.payload.id;
      const dt = DateTime.now();
      const dateAdded = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);

      if (state.data.length < 5) {
        const updateTeam = [
          ...state.data,
          { pokeImg, pokeName, pokeId, dateAdded },
        ];
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
    case REMOVE_POKEMON_TEAM:
      const updateTeam = state.data.filter(
        (pokemon, index) => index !== action.payload
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
