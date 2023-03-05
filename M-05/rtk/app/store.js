const configureStore = require("@reduxjs/toolkit").configureStore;
const videoReducer = require("../features/video/videoSlice");
const relatedVideoReducer = require("../features/relatedVideo/relatedViceoSlice")
const {createLogger} = require("redux-logger");


const logger = createLogger();


const store = configureStore({
    reducer : {
        video : videoReducer,
        relatedVideos : relatedVideoReducer,
    },
    middleware : (getDefaultMiddlewares) => 
         getDefaultMiddlewares()
    
})

module.exports = store
