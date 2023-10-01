import PokeApiService from "../../services/PokeApi/pokeApiService";
import { Pokemon } from "../pokeList/types";

export interface IdParams {
  id: string | undefined;
}
class PruebaService extends PokeApiService {
  constructor() {
    super("pokemon");
  }
  getPokemonsDetailService = (id: string | undefined) => {
    const stringParams: string = `/${id}`;
    return this.client.get<Pokemon>(stringParams);
  };
}

const instance = new PruebaService();

export default instance;
