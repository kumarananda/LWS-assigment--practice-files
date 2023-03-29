import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import editVideoSlice from '../features/editVideo/editVideoSlice';




export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    editVideo : editVideoSlice,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
