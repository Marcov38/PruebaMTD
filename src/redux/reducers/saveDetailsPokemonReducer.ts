import { Pokemon } from "../../features/pokeList/types";
import { SAVE_DETAILS } from "../types/savePokemonDetailsTypes";

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
