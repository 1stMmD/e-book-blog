import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name : "admin",
    initialState : {
        isAdmin : false,
    },
    reducers : {
        changeIsAdmin : (state , action) => {
            state.isAdmin = action.payload; 
        }
    }
});

export const {changeIsAdmin} = adminSlice.actions;

export default adminSlice.reducer