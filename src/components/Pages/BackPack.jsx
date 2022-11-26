import React , { useState , useEffect } from 'react';

import Navbar from '../global/Navbar';
import Toggle from '../global/utils/Toggle';
import Box from "@mui/material/Box";
import Preview from "../global/utils/Preview";

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
                    gridTemplateColumns :{ 
                        xs :"repeat(auto-fit,minmax(100px,1fr))",
                        md :"repeat(auto-fit,minmax(125px,1fr))",
                        lg :"repeat(auto-fit,minmax(165px,1fr))",
                        xl :"repeat(auto-fit,minmax(220px,1fr))",
                    },
                    placeItems : "center",
                    width : "min(1000px , 80vw)",
                    rowGap : {
                        xs : 1,
                        lg : 3
                    },
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
                    gridTemplateColumns : "repeat(auto-fit,minmax(clamp(220px,50vw,700px) , 1fr))",
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
