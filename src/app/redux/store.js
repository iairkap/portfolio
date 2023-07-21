import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import darkModeReducer from "./DarkModeSlice"; // add this
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedLanguageReducer = persistReducer(persistConfig, languageReducer);
const persistedDarkModeReducer = persistReducer(persistConfig, darkModeReducer); // add this

export const store = configureStore({
  reducer: {
    language: persistedLanguageReducer,
    darkMode: persistedDarkModeReducer, // add this
  },
});

export const RootState = store.getState;

export const persistor = persistStore(store);
