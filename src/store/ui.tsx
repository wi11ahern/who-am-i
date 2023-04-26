import { createSlice } from "@reduxjs/toolkit";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export type SetThemeAction = {
  type: string;
  payload: Theme;
};

export type SetIsMobileAction = {
  type: string;
  payload: boolean;
};

export type SetDropDownOpenAction = {
  type: string;
  payload: boolean;
};

const initialState = {
  theme: Theme.Dark,
  isMobile: window.innerWidth < 640,
  dropDownOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: SetThemeAction) {
      state.theme = action.payload;
    },
    setIsMobile(state, action: SetIsMobileAction) {
      state.isMobile = action.payload;
    },
    setDropDownOpen(state, action: SetDropDownOpenAction) {
      state.dropDownOpen = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
