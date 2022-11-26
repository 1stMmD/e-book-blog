import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const dataSlice = createSlice({
    name : "data",
    initialState : {
        books : {
            data : [],
            isPending : true,
            error : ""
        },
        banners : {
            data : [],
            isPending : true,
            error : ""
        },
    },
    reducers : {
        setBooks : (state , action) => {
            state.books = action.payload
        },
        setBanners : (state , action) => {
            state.banners = action.payload
        },
    }
});

export const {setBooks , setBanners} = dataSlice.actions;

export default dataSlice.reducer;