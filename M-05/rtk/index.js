const store = require("./app/store");
const { videoActions } = require("./features/video/videoSlice");

const { fetchVideo } = require("./features/video/videoSlice");
const { fetchRealtedVideos } = require("./features/relatedVideo/relatedViceoSlice")

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
    // console.log(store.getState().video.video.tags);

    if(store.getState().video.video.tags?.length){
        // console.log("done" + store.getState().video.video?.tags?.length );
        // store.dispatch(fetchRealtedVideos(store.getState().video.video?.tags))
    }
    
    
});

// disptach actions
store.dispatch(fetchVideo());
// store.dispatch(fetchRealtedVideos());
