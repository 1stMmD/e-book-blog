import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name : "book",
    initialState : {
        book : null,
    },
    reducers : {
        setBook : (state , action) => {
            state.book = action.payload;
        },
    }

})

export const {setBook} = bookSlice.actions;

export default bookSlice.reducer