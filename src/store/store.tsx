import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./ui";
import experienceSliceReducer from "./experience";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    experience: experienceSliceReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
