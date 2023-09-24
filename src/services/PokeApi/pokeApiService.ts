import { ServiceBase } from "..";

const BASE_URL = "https://pokeapi.co/api/v2/";

export default class PokeApiService extends ServiceBase {
  constructor(endpoint: string) {
    super(BASE_URL + endpoint);
  }
}
