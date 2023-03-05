const store = require("./app/store");
const { videoActions } = require("./features/video/videoSlice");

const { fetchVideo } = require("./features/video/videoSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
    console.log(store.getState().video.video);
    console.log(store.getState().relatedVideos.videos);

    
    
});

// disptach actions
store.dispatch(fetchVideo());

