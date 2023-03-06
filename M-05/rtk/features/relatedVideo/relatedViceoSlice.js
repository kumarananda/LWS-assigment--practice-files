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


    if(!video.tags.length <= 0){
        

        let quaryString = video.tags.reduce((i, tag)=> {
            let lastIndex = video.tags[video.tags.length-1]
            
            if(lastIndex=== tag){
                if(video.tags[video.tags.lastIndexOf(lastIndex)] === tag ){
                    return i + "tags_like="+tag
                }else{
                    return i + "tags_like="+tag+"&"
                } 
            }else{
                return i + "tags_like="+tag+"&"
            }
        },"")

        const response = await fetch(
            `http://localhost:9000/videos?${quaryString}`
            );
    
        const videodata = await response.json();
    
        // return sortByviews(videodata, "descending")
 
        // // if require aviod main product in realted videos data
        return sortByviews(videodata).filter(v => v.id !== video.id, );


    }
    // //  if tags array length/tags is empty 
    else{
        const response = await fetch(
            `http://localhost:9000/videos?tags_like=`
            );
    
        const videodata = await response.json();
        // // if require aviod main product in realted videos data
        return sortByviews(videodata, "descending").filter(v => v.id !== video.id, );
    }

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