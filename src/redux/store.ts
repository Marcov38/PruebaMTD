import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { getPokemonsReducer } from "./reducers/getPokemonReducer";
import {
  getDetailsPokemonReducer,
  saveDetailsPokemonReducer,
} from "./reducers/saveDetailsPokemonReducer";
import { postPokemonsReducer } from "./reducers/postPokemonReducer";
import { teamPokemonsReducer } from "./reducers/pokemonTeamReducer";

const rootreducer = combineReducers({
  pokemons: getPokemonsReducer,
  pokemonDetails: saveDetailsPokemonReducer,
  pokemonDetailsPersist: getDetailsPokemonReducer,
  pokemonPost: postPokemonsReducer,
  pokemonTeam: teamPokemonsReducer,
});

const middleware = [thunkMiddleware];

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
