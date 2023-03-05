const configureStore = require("@reduxjs/toolkit").configureStore;
const videoReducer = require("../features/video/videoSlice");
const relatedVideoReducer = require("../features/relatedVideo/relatedViceoSlice")
const {createLogger} = require("redux-logger");


const logger = createLogger();


const store = configureStore({
    reducer : {
        video : videoReducer,
        videos : relatedVideoReducer,
    },
    middleware : (getDefaultMiddlewares) => 
         getDefaultMiddlewares().concat(logger)
    
})

module.exports = store
