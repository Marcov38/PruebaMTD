import { Values } from "../../features/FormCreation/FormCreation";
import {
  POST_POKEMON_FAILURE,
  POST_POKEMON_REQUEST,
  POST_POKEMON_SUCCESS,
} from "../types/postPokemonTypes";
import { IActions } from "./getPokemonReducer";

interface InitialState {
  loading: boolean;
  data: Values | null;
  error: any | null;
}

const initialState: InitialState = {
  loading: false,
  data: null,
  error: null,
};

export const postPokemonsReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case POST_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
