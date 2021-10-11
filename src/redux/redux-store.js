import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
