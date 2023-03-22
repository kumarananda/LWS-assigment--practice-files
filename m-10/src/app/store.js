import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import projectsSlice from '../features/api/projects/projectsSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    projectShows : projectsSlice,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
