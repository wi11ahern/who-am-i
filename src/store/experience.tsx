import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeExperienceId: 0,
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setActiveExperienceId(state, action) {
      console.log(`Setting active experience id to ${action.payload}`);
      state.activeExperienceId = action.payload;
    },
  },
});

export const experienceActions = experienceSlice.actions;
export default experienceSlice.reducer;
