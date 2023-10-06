import PokeApiService from "../../services/PokeApi/pokeApiService";
import { Values } from "./FormCreation";

class PostService extends PokeApiService {
  constructor() {
    super("pokemon");
  }
  postPokemonsService = (pokemon: Values) => {
    return this.client.post("/newPokemon", pokemon);
  };
}

const instance = new PostService();

export default instance;
