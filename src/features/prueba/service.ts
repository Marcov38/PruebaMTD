import PokeApiService from "../../services/PokeApi/pokeApiService";
import { GetResponse, ServiceParams } from "./types";

class PruebaService extends PokeApiService {
  constructor() {
    super("pokemon");
  }
  getPokemons = (data: ServiceParams) => {
    const { offset, limit } = data;
    let stringParams: string = `/?offset=${offset}&limit=${limit}`;
    return this.client.get<GetResponse>(stringParams);
  };
}

const instance = new PruebaService();

export default instance;
