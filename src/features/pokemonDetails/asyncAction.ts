import Service from "./service";
import { Dispatch } from "redux";
import {
  getDetailsPokemonFailure,
  getDetailsPokemonRequest,
  getDetailsPokemonSuccess,
} from "../../redux/actions/saveDetailsPokemon";

export const getPokemonsDetails = async (
  id: string | undefined,
  dispatch: Dispatch
) => {
  dispatch(getDetailsPokemonRequest());
  try {
    const { data } = await Service.getPokemonsDetailService(id);
    console.log(data);
    if (data) {
      return dispatch(getDetailsPokemonSuccess(data));
    }
  } catch (error: any | null) {
    return dispatch(
      getDetailsPokemonFailure(error.isAxiosError ? error.response.data : error)
    );
  }
};
