import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import darkModeReducer from "./darkm";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    darkMode: darkModeReducer,
  },
});
//
