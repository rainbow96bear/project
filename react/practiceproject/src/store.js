import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as post } from "./components/modules/post";
import { reducer as nowPost } from "./components/modules/nowPost";

const store = createStore(
  combineReducers({ post, nowPost }),
  composeWithDevTools()
);

export default store;
