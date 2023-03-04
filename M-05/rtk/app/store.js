const configureStore = require("@reduxjs/toolkit").configureStore;
const videoReducer = require("../features/video/videoSlice");
const {createLogger} = require("redux-logger");


const logger = createLogger();


const store = configureStore({
    reducer : {
        video : videoReducer,
    },
    middleware : (getDefaultMiddlewares) => 
         getDefaultMiddlewares()
    
})

module.exports = store
