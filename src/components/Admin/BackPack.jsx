import React , { useState , useEffect } from 'react';

import Navbar from '../Navbar';
import Toggle from './utils/Toggle';
import Box from "@mui/material/Box";
import Preview from "./utils/Preview";

import { changeCurrent } from '../../redux/navbarSlice';
import { useDispatch } from 'react-redux';

const BackPack = () => {

    const [section , setSection] = useState("book")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCurrent("backpack"));
    },[dispatch]);

    return (
        <>

        <Navbar/>
        
        <Box
        sx={{
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            minHeight : "90vh",
        }}> 

            <Toggle section={section} setSection={setSection}/>
            
            { section === "book" && 
                <Box
                sx={{
                    display : "grid",
                    gridTemplateColumns : "repeat(auto-fit,minmax(100px,1fr))",
                    placeItems : "center",
                    width : "80vw",
                    rowGap : 1,
                }}>
                    <Preview type="book"/>
                    <Preview type="book"/>
                    <Preview type="book"/>
                    <Preview type="book"/>
                    <Preview type="book"/>
                    <Preview type="book"/>
                    <Preview type="book"/>
                    <Preview type="book"/>
                </Box>
            }

            { section === "banner" && 
                <Box
                sx={{
                    display : "grid",
                    gridTemplateColumns : "repeat(auto-fit,minmax(220px , 1fr))",
                    placeItems : "center",
                    width : "80vw",
                    rowGap : 1,
                }}>
                    <Preview type="banner"/>
                    <Preview type="banner"/>
                    <Preview type="banner"/>
                    <Preview type="banner"/>
                    
                </Box>
            }

        </Box>
        
        </>
    );
}

export default BackPack;
