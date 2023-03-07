const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");


// sorting by views / descending 
const sortByviews = (objects, order ="descending") => {

    if(order === "ascending"){
        return  objects.sort((a,b) =>  Number( a.views.replace("k", "")) - Number( b.views.replace("k", "")) )
    }else{
        return  objects.sort((a,b) =>  Number( b.views.replace("k", "")) - Number( a.views.replace("k", "")) )

    }
}

// creat async thunk for related videos
const fetchRealtedVideos = createAsyncThunk("video/fetchRealtedVideos", async (video) => {

    let quaryString = video.tags.length > 0 ?  
        video.tags.map(tag => "tags_like="+tag ).join("&")+ "&id_ne="+video.id : 
        "id_ne="+video.id

    const response = await fetch(
        // server sorting
        // `http://localhost:9000/videos?${quaryString}&_sort=views&_order=desc`
        // Js Sorting
        `http://localhost:9000/videos?${quaryString}`
        );

    const videodata = await response.json();

    // server sorting
    // return videodata
    
    // Js Sorting
    return sortByviews(videodata)

});


// initial state
const initialState = {
    loading: false,
    error: "",
    videos : []
};


// create slice
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
            state.videos = action.payload;
        })
        builder.addCase(fetchRealtedVideos.rejected, (state, action) => {
            state.loading = false;
            state.videos = [];
            state.error = action.error.message;
        })

    }
});


// exports
module.exports = relatedVideoSlice.reducer
module.exports.fetchRealtedVideos =  fetchRealtedVideos