import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import darkModeReducer from "./DarkModeSlice"; // add this
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

export const store = configureStore({
  reducer: {
    language: languageReducer,
    darkMode: darkModeReducer, // add this
  },
});
