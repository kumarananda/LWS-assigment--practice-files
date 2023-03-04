const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");




const fetchVideo = createAsyncThunk("video/fatchVideo", async () => {

    const response = await fetch(
        "http://localhost:9000/videos"
        );

    const videodata = await response.json();

    console.log(videodata);
    return videodata

});

// // create async thunk
// const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts?_limit=5"
//     );
//     const posts = await response.json();

//     return posts;
// });

// initial state
const initialState = {
    loading: false,
    video: {},
    error: "",
    relatedVidios : []
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.loading = true,
            state.error = ""
        })
        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false,
            state.error = "",
            state.video = action.payload
        })
        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.loading = {},
            state.video = "",
            state.error = action.error.message
        })

    }
});


module.exports = videoSlice.reducer
module.exports.fetchVideo =  fetchVideo

