import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search : ""
};

const filterSlice = createSlice({
    name: "projectsShow",
    initialState,
    reducers: {
        setSearchValue : (state, action) => {
            state.search = action.payload
        },


    },
});

export const {setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;
