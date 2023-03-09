import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fatchRPosts } from "../rPosts/rPostsSlice"
import { getsPostApi, patchsPostApi } from "./sPostApi"


// initial state
const initialState = {
    sPost : {},
    isLoading : false,
    isError : false,
    error : ''
}

// fatch single post
export const fatchSPost = createAsyncThunk("sPost/fatchSPost", 
    async ({id},{dispatch}) => {
        const sPost = await getsPostApi(id)
        dispatch(fatchRPosts(sPost))
        return sPost
})
// patch req 
export const patchSPost = createAsyncThunk("sPost/patchSPost", 
    async (update, {getState, dispatch}) => {
        let prevPost = getState().sPost.sPost
        
        const new_sPost = await patchsPostApi(update, prevPost)
        // if(update.updateKey=== "tags"){
        //     dispatch(fatchRPosts(new_sPost))
        // }
        
        return new_sPost
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
                state.sPost = {}
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
                state.sPost = {}
    
            })
            .addCase(patchSPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.sPost = action.payload;
                state.isError =false
            })
            .addCase(patchSPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.isError = true;
                state.sPost = {}
    
            })
    }
})

export default sPostSlice.reducer