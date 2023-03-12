import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJobApi, jobsApi, editJobApi, removeJobApi, editJobJobApi } from "./jobsApi.js"


// initial state
const initialState = {
    jobs : [],
    isLoading : false,
    isError : false,
    error : '',
    editing : {}
}

export const fatchJobs = createAsyncThunk("jobs/fatchJobs", async () => {
    const jobs = await jobsApi()

    return jobs
})
export const addJob = createAsyncThunk("jobs/addJob", async (data) => {
    const job = await addJobApi(data)

    return job
})

export const editJob = createAsyncThunk("jobs/editJob", async ({id, data}) => {

    const job = await editJobApi(id, data)
    return job
})
export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {

    const job = await removeJobApi(id)
    return job
})

const jobsSlice = createSlice({
    name : "jobs",
    initialState,
    // reducers : {
    //     editActive: (state, action) => {
    //         state.editing = action.payload;
    //     },
    //     editCancle: (state) => {
    //         state.editing = {};
    //     },
    // },
    extraReducers : (builder) => {
        builder
            .addCase(fatchJobs.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
            })
            .addCase(fatchJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs = action.payload;
                state.isError =false
            })
            .addCase(fatchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
                state.jobs = [];
            })
            .addCase(addJob.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
            })
            .addCase(addJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs.push(action.payload)
                state.isError =false
            })
            .addCase(addJob.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
            })
            //
            .addCase(editJob.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
            })
            .addCase(editJob.fulfilled, (state, action) => {
                state.isLoading = false;
                const editIndex = state.jobs.findIndex(job => job.id=== action.payload.id)
                state.jobs[editIndex] = action.payload
                state.isError =false
            })
            .addCase(editJob.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
            })
            // 
            .addCase(removeJob.pending, (state) => {
                state.isLoading = true;
                state.error = '';
                state.isError = false;
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs = state.jobs.filter(job => job.id !== action.meta.arg);
                state.isError =false
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error?.message;
                state.isError = true;
            })
    }
})

export default jobsSlice.reducer
// export const { editActive, editCancle } = jobsSlice.actions