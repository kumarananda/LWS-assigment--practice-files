const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");





const fetchRealtedVideos = createAsyncThunk("video/fetchRealtedVideos", async () => {

    // console.log(store.getState().video.video.tags);

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
    name: "relatedVideos",
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
            state.relatedVidios = [];
            state.error = action.error.message;
        })

    }
});


module.exports = relatedVideoSlice.reducer

module.exports.fetchRealtedVideos =  fetchRealtedVideos