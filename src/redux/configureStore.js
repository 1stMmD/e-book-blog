import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";

export default configureStore({
    reducer:{
        navbarSlice
    }
});