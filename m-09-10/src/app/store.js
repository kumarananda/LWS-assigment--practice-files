import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import projectsSlice from '../features/api/projects/projectsSlice';
import filterSlice from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    projectShows : projectsSlice,
    filter : filterSlice,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
