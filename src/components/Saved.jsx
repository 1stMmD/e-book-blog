import React from 'react';
import { useDispatch } from 'react-redux';
import {changeCurrent} from "../redux/navbarSlice";
import { SavedBook } from "./index";
import Box from "@mui/material/Box";

const Saved = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(changeCurrent("saved"))
    },[])

    return (
        <Box
        sx={{
            display : "grid",
            placeItems : "center",
            gridTemplateColumns : "1fr 1fr",
            width : "100%",
            minHeight : "70vh"
        }}
        >

            <SavedBook/>
            <SavedBook/>
            <SavedBook/>
            <SavedBook/>
            <SavedBook/>
            <SavedBook/>
            <SavedBook/>
            <SavedBook/>
            <SavedBook/>
            <SavedBook/>

        </Box>
    );
}

export default Saved;
