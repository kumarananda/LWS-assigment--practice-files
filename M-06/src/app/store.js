import { configureStore } from '@reduxjs/toolkit';
import allPostsReducer from '../features/posts/postsSlice';
import singlePostReducer from '../features/sPost/sPostSlice.js';
import relatedPostsReducer from '../features/rPosts/rPostsSlice.js';
import filterReducer from '../features/filters/filtersSlice';


// configure redux Store
export const store = configureStore({
  reducer: {
    posts: allPostsReducer,
    sPost : singlePostReducer,
    rPosts : relatedPostsReducer,
    filter : filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});
