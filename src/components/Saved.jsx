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
        }}
        >
            <Box
            sx={{
                display : "grid",
                placeItems : "center",
                gridTemplateColumns : "repeat(auto-fit , minmax(130px , 1fr))",
                width : "90%",
                minHeight : "70vh"
            }}>

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

        </Box>
    );
}

export default Saved;
