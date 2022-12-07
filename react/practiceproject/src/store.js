import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as post } from "./components/modules/post";
import { reducer as nowPost } from "./components/modules/nowPost";
import { reducer as modalOn } from "./components/modules/modalOnOff";
import { reducer as usersDB } from "./components/modules/usersDB";
import { reducer as loginUser } from "./components/modules/loginUser";

const store = createStore(
  combineReducers({ post, nowPost, modalOn, usersDB, loginUser }),
  composeWithDevTools()
);

export default store;
