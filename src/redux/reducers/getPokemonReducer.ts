import { GetResponse } from "../../features/pokeList/types";
import {
  GET_POKEMONS_FAILURE,
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
} from "../types/getPokemonTypes";

export interface IActions {
  type: string;
  payload: any;
}

interface InitialState {
  loading: boolean;
  data: GetResponse | null;
  error: any | null;
}

const initialState: InitialState = {
  loading: false,
  data: null,
  error: null,
};

export const getPokemonsReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
