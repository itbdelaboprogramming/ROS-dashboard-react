import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";
import fileMap from "./slice/fileMap";

export const store = configureStore({
    reducer: {
        posts: postSlice,
        maps: fileMap
    }
})