import { Pokemon } from "../../features/pokeList/types";
import {
  GET_DETAILS_FAILURE,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  SAVE_DETAILS,
} from "../types/savePokemonDetailsTypes";

export interface IActions {
  type: string;
  payload: any;
}

interface InitialState {
  loading: boolean;
  data: Pokemon[] | null;
  error: any | null;
}

const initialState: InitialState = {
  loading: false,
  data: null,
  error: null,
};

export const saveDetailsPokemonReducer = (
  state = initialState,
  action: IActions
) => {
  switch (action.type) {
    case SAVE_DETAILS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export const getDetailsPokemonReducer = (
  state = initialState,
  action: IActions
) => {
  switch (action.type) {
    case GET_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
