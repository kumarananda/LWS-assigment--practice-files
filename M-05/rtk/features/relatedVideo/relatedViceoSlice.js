const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");





const fetchRealtedVideos = createAsyncThunk("video/fetchRelatedVideo", async () => {

    const response = await fetch(
        `http://localhost:9000/videos?tags_like=javascript&tags_like=react`
        );

    const videodata = await response.json();

    return videodata

});


// initial state
const initialState = {
    loading: false,
    error: "",
    relatedVidios : []
};

const relatedVideoSlice = createSlice({
    name: "relatedVideo",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchRealtedVideos.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(fetchRealtedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "" ;
            state.relatedVidios = action.payload;
        })
        builder.addCase(fetchRealtedVideos.rejected, (state, action) => {
            state.loading = false;
            state.video = [];
            state.error = action.error.message;
        })

    }
});


module.exports = relatedVideoSlice.reducer

module.exports.fetchRealtedVideos =  fetchRealtedVideos