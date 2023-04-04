import { createSlice } from "@reduxjs/toolkit";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export type SetThemeAction = {
  type: string;
  payload: Theme;
};

const initialState = {
  theme: Theme.Dark,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: SetThemeAction) {
      state.theme = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
