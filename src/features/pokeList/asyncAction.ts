import {
  getPokemonFailure,
  getPokemonRequest,
  getPokemonSuccess,
} from "../../redux/actions/getPokemonsActions";
import { ServiceParams } from "./types";
import Service from "./service";
import { Dispatch } from "redux";

export const getPokemons = async (
  dataParams: ServiceParams,
  dispatch: Dispatch
) => {
  dispatch(getPokemonRequest());
  try {
    const { data } = await Service.getPokemonsService(dataParams);
    if (data.results) {
      return dispatch(getPokemonSuccess(data));
    }
  } catch (error: any | null) {
    return dispatch(
      getPokemonFailure(error.isAxiosError ? error.response.data : error)
    );
  }
};
