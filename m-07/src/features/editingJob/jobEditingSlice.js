import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { editJobApi } from "./jobEditingApi"


// initial state
const initialState = {
    jobEdit : {},
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
        addEdit : (state, action)=> {
            state.jobEdit = action.payload
        },
        clearEdit : (state)=> {
            state.jobEdit = {}
        }
    },
    extraReducers : (builder) => {
        builder
            
            .addCase(jobEditing.pending, (state) => {
                state.error = '';
                state.isError = false;
            })
            .addCase(jobEditing.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobEdit= action.payload
                state.isError =false

            })
            .addCase(jobEditing.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
                state.jobEdit = {}

            })

    }
})

export default edtingjobSlice.reducer;

export const {clearEdit, addEdit} = edtingjobSlice.actions