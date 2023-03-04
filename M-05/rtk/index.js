const store = require("./app/store");
// const { videoActions } = require("./features/video/videoSlice");

const { fetchVideo, fetchRealtedVideos } = require("./features/video/videoSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState().video.video.tags);
    
});

// disptach actions
store.dispatch(fetchVideo());
