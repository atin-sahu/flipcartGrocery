import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    authReducer:authReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
console.log("store", store.getState());
