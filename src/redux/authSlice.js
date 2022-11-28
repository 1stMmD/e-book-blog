import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : undefined
    },
    reducers : {
        changeUser : (state , action) => {
            state.user = action.payload;
        }
    }
})

export const { changeUser } = authSlice.actions;

export default authSlice.reducer;