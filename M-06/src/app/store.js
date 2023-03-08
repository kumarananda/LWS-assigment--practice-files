import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import sPostReducer from '../features/sPost/sPostSlice.js';
import rPostsReducer from '../features/rPosts/rPostsSlice.js';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    sPost : sPostReducer,
    rPosts : rPostsReducer,
  },
});
