import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name:"navbar",
    initialState : {
        current : "home"
    },
    reducers : {
        changeCurrent : (state , action) => {
            state.current = action.payload;
        }
    }
})

export const {changeCurrent} = navbarSlice.actions;

export default navbarSlice.reducer;