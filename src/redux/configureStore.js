import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import adminSlice from "./adminSlice";
import dataSlice from "./dataSlice";
import authSlice from "./authSlice";

export default configureStore({
    reducer:{
        navbarSlice,
        adminSlice,
        dataSlice,
        authSlice
    }
});