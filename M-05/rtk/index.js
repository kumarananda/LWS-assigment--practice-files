const store = require("./app/store");
// const { videoActions } = require("./features/video/videoSlice");

const { fetchVideo } = require("./features/video/videoSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions
store.dispatch(fetchVideo());
