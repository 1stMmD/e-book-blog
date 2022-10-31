import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import adminSlice from "./adminSlice";

export default configureStore({
    reducer:{
        navbarSlice,
        adminSlice
    }
});