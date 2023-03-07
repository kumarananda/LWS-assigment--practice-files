import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postsApi } from "./postsApi"


// initial state
const initialState = {
    posts : [],
    isLoading : false,
    isError : false,
    error : ''
}

export const fatchPosts = createAsyncThunk("posts/fatchPosts", async () => {
    const posts = await postsApi()

    return posts
})

const postsSlice = createSlice({
    name : "posts",
    initialState,
    extraReducers : (builder) => {
        builder
            .addCase(fatchPosts.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
            })
            .addCase(fatchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
                state.isError =false
            })
            .addCase(fatchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.isError = true;
                state.posts = [];
            })
    }
})

export default postsSlice.reducer