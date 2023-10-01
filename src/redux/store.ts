import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { getPokemonsReducer } from "./reducers/getPokemonReducer";
import { saveDetailsPokemonReducer } from "./reducers/saveDetailsPokemonReducer";

const rootreducer = combineReducers({
  pokemons: getPokemonsReducer,
  pokemonDetails: saveDetailsPokemonReducer,
});

const middleware = [thunkMiddleware];

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
