import {
  getPokemonFailure,
  getPokemonRequest,
  getPokemonSuccess,
} from "../../redux/actions/getPokemonsActions";
import { ServiceParams } from "./types";
import Service from "./service";
import { Dispatch } from "redux";

export const getPokemons =
  (dataParams: ServiceParams) => async (dispatch: Dispatch) => {
    dispatch(getPokemonRequest());
    try {
      const { data } = await Service.getPokemons(dataParams);
      dispatch(getPokemonSuccess(data));
    } catch (error: any) {
      dispatch(
        getPokemonFailure(error.isAxiosError ? error.response.data : error)
      );
    }
  };
