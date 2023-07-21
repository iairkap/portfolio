import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: "ES",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.value;

export default languageSlice.reducer;
