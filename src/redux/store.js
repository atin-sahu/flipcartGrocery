import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as cartReducer} from "./cart/reducere";

const rootReducer = combineReducers({
    authReducer:authReducer,
    cartReducer:cartReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
console.log("store", store.getState());
