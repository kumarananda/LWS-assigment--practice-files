import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { editJobApi } from "./jobEditingApi"


// initial state
const initialState = {
    jobEdit : {},
    isEdit : false,
    isLoading : false,
    isError : false,
    error : '',
}


export const jobEditing = createAsyncThunk("jobEdit/jobEditing", async (id) => {
    const job = await editJobApi(id)
    return job
})


const edtingjobSlice = createSlice({
    name : "jobEdit",
    initialState,
    reducers : {
        clearEdit : (state)=> {
            state.jobEdit = {}
        }
    },
    extraReducers : (builder) => {
        builder
            
            .addCase(jobEditing.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
                state.jobEdit = {}
                state.isEdit = false
            })
            .addCase(jobEditing.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobEdit= action.payload
                state.isError =false
                state.isEdit = true
            })
            .addCase(jobEditing.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
                state.jobEdit = {}
                state.isEdit = false
            })

    }
})

export default edtingjobSlice.reducer;

export const {clearEdit} = edtingjobSlice.actions