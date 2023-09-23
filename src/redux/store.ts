import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const rootreducer = combineReducers({});

const middleware = [thunkMiddleware];

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
