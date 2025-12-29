import { createSlice } from "@reduxjs/toolkit";

const DarkModeS = createSlice({
  name: "darkMode",
  initialState: {
    value: true,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleDarkMode } = DarkModeS.actions;

export default DarkModeS.reducer;

//
