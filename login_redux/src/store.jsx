import { combineReducers, legacy_createStore } from "redux";
import AppReducer from "./App/AppReducer";
import ReduxReducer from "./Redux/ReduxReducer";

const rootReducer = combineReducers({ AppReducer, ReduxReducer });

export const store = legacy_createStore(rootReducer);
