import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { getPokemonsReducer } from "./reducers/getPokemonReducer";

const rootreducer = combineReducers({
  pokemons: getPokemonsReducer,
});

const middleware = [thunkMiddleware];

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
