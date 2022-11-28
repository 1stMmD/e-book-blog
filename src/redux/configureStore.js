import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import dataSlice from "./dataSlice";
import authSlice from "./authSlice";

export default configureStore({
    reducer:{
        navbarSlice,
        dataSlice,
        authSlice
    }
});