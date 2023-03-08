import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { rPostsApi } from "../rPosts/rPostsApi"
import { fatchRPosts } from "../rPosts/rPostsSlice"
import { sPostApi } from "./sPostApi"


// initial state
const initialState = {
    sPost : {},
    isLoading : false,
    isError : false,
    error : ''
}

// fatch single post
export const fatchSPost = createAsyncThunk("sPost/fatchSPost", async ({id},{dispatch}) => {

    const sPost = await sPostApi(id)
    dispatch(fatchRPosts(sPost))
    
    return sPost
})

const sPostSlice = createSlice({
    name : "sPost",
    initialState,
    extraReducers : (builder) => {
        builder
            .addCase(fatchSPost.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
            })
            .addCase(fatchSPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.sPost = action.payload;
                state.isError =false
            })
            .addCase(fatchSPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.isError = true;
                state.sPost = {};
            })
    }
})

export default sPostSlice.reducer