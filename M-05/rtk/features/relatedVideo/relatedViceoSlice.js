const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");


const shortByviewD = (objects) => {

   return  objects.sort((a,b) =>  Number( b.views.replace("k", "")) - Number( a.views.replace("k", "")) )
}


const fetchRealtedVideos = createAsyncThunk("video/fetchRealtedVideos", async (video, {getState}) => {

    if(!video.tags.length <= 0){
        let lastIndex = video.tags[video.tags.length-1]

        let quaryString = video.tags.reduce((i, tag)=> {
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
    
        return shortByviewD(videodata)


    }else{
        const response = await fetch(
            `http://localhost:9000/videos?tags_like=`
            );
    
        const videodata = await response.json();
    
        return shortByviewD(videodata)
    }




});


// initial state
const initialState = {
    loading: false,
    error: "",
    videos : []
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
            state.videos = action.payload;
        })
        builder.addCase(fetchRealtedVideos.rejected, (state, action) => {
            state.loading = false;
            state.videos = [];
            state.error = action.error.message;
        })

    }
});


module.exports = relatedVideoSlice.reducer

module.exports.fetchRealtedVideos =  fetchRealtedVideos