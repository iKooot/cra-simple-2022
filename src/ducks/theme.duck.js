import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
  },
});

const { reducer, actions } = slice;

export default reducer;

export const { toggleTheme } = actions;

export const selectTheme = (rootState) => {
  return rootState.theme;
};
