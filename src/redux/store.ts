import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { teamPokemonsReducer } from "./reducers/pokemonTeamReducer";
import { postPokemonsReducer } from "./reducers/postPokemonReducer";
import {
  getDetailsPokemonReducer,
  saveDetailsPokemonReducer,
} from "./reducers/saveDetailsPokemonReducer";

const rootreducer = combineReducers({
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
