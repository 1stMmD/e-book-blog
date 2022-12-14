import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import dataSlice from "./dataSlice";
import authSlice from "./authSlice";
import bookSlice from "./bookSlice";

export default configureStore({
    reducer:{
        navbarSlice,
        dataSlice,
        authSlice,
        bookSlice
    }
});