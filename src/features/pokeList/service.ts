import PokeApiService from "../../services/PokeApi/pokeApiService";
import { GetResponse, ServiceParams } from "./types";

class PruebaService extends PokeApiService {
  constructor() {
    super("pokemon");
  }
  getPokemonsService = (data: ServiceParams) => {
    const { offset, limit } = data;
    const stringParams: string = `/?offset=${offset}&limit=${limit}`;
    return this.client.get<GetResponse>(stringParams);
  };
}

const instance = new PruebaService();

export default instance;
