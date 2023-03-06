const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const {fetchRealtedVideos} = require('../relatedVideo/relatedViceoSlice')

// create thunk 
const fetchVideo = createAsyncThunk("video/fetchVideo", async (data, { dispatch,  }) => {

    const response = await fetch(
        "http://localhost:90001/videos"
        );

    const videodata = await response.json();
        dispatch(fetchRealtedVideos(videodata))

    return videodata 

});

// initial state
const initialState = {
    loading: false,
    error: "",
    video: {},

};


// create slice
const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.video = action.payload;
        })
        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.loading = false;
            state.video = {};
            state.error = action.error.message;
        })


    }
});


// exports
module.exports = videoSlice.reducer
module.exports.fetchVideo =  fetchVideo


