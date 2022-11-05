import React , { useState , useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { changeCurrent } from '../../redux/navbarSlice';

import Toggle from "./utils/Toggle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { BookForm } from './utils/Forms';
import { BannerForm } from './utils/Forms';

const Create = () => {

    const [section , setSection] = useState("book")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeCurrent("create"))
    },[dispatch])

    return (
        <Box
        sx={{
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            minHeight : "80vh",
        }}>
            <Toggle section={section} setSection={setSection}/>

            
            <Box
            sx={{
                position : "relative" ,
                zIndex : "0" ,
                display : "flex",
                flexDirection : "column",
                alignItems : "center" ,
            }}>

            { section === "book" && 
                <BookForm/>
            }
            { section === "banner" &&
                <BannerForm/>
            }

            </Box>


        </Box>
    );
}

export default Create;
