import { applyMiddleware } from "redux";
import { combineReducers, createStore, compose } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware)
  // other store enhancers if any
);
const store = createStore(reducers, enhancer);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// let store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

window.store = store;

export default store;
