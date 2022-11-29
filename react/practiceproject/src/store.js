import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as post } from "./components/modules/post";

const store = createStore(combineReducers({ post }), composeWithDevTools());

export default store;
