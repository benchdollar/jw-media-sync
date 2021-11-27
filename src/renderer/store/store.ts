import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../model/inputsSlice';
import apiReducer from '../model/apiSlice';

export const store = configureStore({
  reducer: {
    inputs: inputsReducer,
    api: apiReducer,
  },
});

// see https://redux-toolkit.js.org/tutorials/typescript
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
