import { createSlice } from "@reduxjs/toolkit";

// const index = localStorage.getItem("mapIndex");

const initialState = 0;

const fileMap = createSlice({
    name: 'maps',
    initialState: initialState,
    reducers: {
        changeId: (state, action) => {
            return action.payload;
        },
    }
});

const { changeId } = fileMap.actions;
export { changeId };
export default fileMap.reducer;
