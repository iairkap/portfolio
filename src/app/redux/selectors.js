import { createSelector } from "reselect";

// Base selectors (input selectors)
const selectDarkModeState = (state) => state.darkMode;
const selectLanguageState = (state) => state.language;

// Memoized selectors
export const selectDarkMode = createSelector(
  [selectDarkModeState],
  (darkModeState) => darkModeState.value
);

export const selectLanguage = createSelector(
  [selectLanguageState],
  (languageState) => languageState.value
);
