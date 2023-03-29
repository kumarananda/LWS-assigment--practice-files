import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editVideo : {},
    editStatus : false
};

const editVideoSlice = createSlice({
    name: "editVideo",
    initialState,
    reducers: {
        setVideoData : (state, action) => {
            console.log("check");
            state.editVideo = action.payload;
            state.editStatus = true;
        },
        removeVideoData : (state) => {
            state.search = {};
            state.editStatus = false;
        },


    },
});

export const {setVideoData, removeVideoData} = editVideoSlice.actions;
export default editVideoSlice.reducer;
