import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, languageReducer);

export const store = configureStore({
  reducer: {
    language: persistedReducer,
  },
});

export const persistor = persistStore(store);
