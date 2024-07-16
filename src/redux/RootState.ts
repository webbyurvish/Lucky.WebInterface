import { combineReducers } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./slice/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface RootState {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
