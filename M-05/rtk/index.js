const store = require("./app/store");
const { fetchRealtedVideos } = require("./features/relatedVideo/relatedViceoSlice");
const { videoActions } = require("./features/video/videoSlice");

const { fetchVideo } = require("./features/video/videoSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
    // console.log(store.getState().video.video);

    // if(store.getState().relatedVideos.videos.length){
    //     console.log("--devider--")
    //     console.log(store.getState().relatedVideos.videos);
    // }
    
});

// disptach actions
// store.dispatch(fetchVideo())


// solve by live class
store.dispatch(fetchVideo())
.unwrap()
.then((video)=> {
    store.dispatch(fetchRealtedVideos(video))
})


