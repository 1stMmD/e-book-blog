import React , { useState , useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { changeCurrent } from '../../redux/navbarSlice';
import { SuccessBox , ErrorBox } from "../index";
import Toggle from "../global/utils/Toggle";
import Box from "@mui/material/Box";

import { BookForm } from '../global/utils/Forms';
import { BannerForm } from '../global/utils/Forms';

const Create = () => {

    const [section , setSection] = useState("book")
    const dispatch = useDispatch();

    const [success , setSuccess] = useState("")
    const [error , setError] = useState("")

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
                <BookForm
                setError={setError}
                setSuccess={setSuccess}
                />
            }
            { section === "banner" &&
                <BannerForm
                setError={setError}
                setSuccess={setSuccess}
                />
            }

            </Box>

            {success && <SuccessBox
            success={success}
            setSuccess={setSuccess}
            />}

            {error && <ErrorBox
            Error={error}
            SetError={setError}
            />}

        </Box>
    );
}

export default Create;
