import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { rPostsApi } from "./rPostsApi";



// initial state
const initialState = {
    rPosts : [],
    isLoading : false,
    isError : false,
    error : ''
}

// fatch single post
export const fatchRPosts = createAsyncThunk("rPosts/fatchRPosts", async (post = {}) => {
    const {id, tags} = post;

    const rPosts = await rPostsApi(id, tags)

    return rPosts
})

const rPostsSlice = createSlice({
    name : "rPosts",
    initialState,
    extraReducers : (builder) => {
        builder
            .addCase(fatchRPosts.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
            })
            .addCase(fatchRPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.rPosts = action.payload;
                state.isError =false
            })
            .addCase(fatchRPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.isError = true;
                state.rPosts = [];
            })
    }
})

export default rPostsSlice.reducer