"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
