import {
  postPokemonFailure,
  postPokemonRequest,
  postPokemonSuccess,
} from "../../redux/actions/postPokemonActions";
import { Values } from "./FormCreation";
import Service from "./service";
import { Dispatch } from "redux";

export const postPokemons = async (pokemon: Values, dispatch: Dispatch) => {
  dispatch(postPokemonRequest());
  try {
    const { data } = await Service.postPokemonsService(pokemon);
    if (data.results) {
      return dispatch(postPokemonSuccess(data));
    }
  } catch (error: any | null) {
    return dispatch(
      postPokemonFailure(error.isAxiosError ? error.response : error)
    );
  }
};
