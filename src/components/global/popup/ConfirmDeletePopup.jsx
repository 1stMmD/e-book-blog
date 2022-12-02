import { useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import PopupButton from "./PopupButton";

import { deleteBook } from "../../../functions/firestore";

const ConfirmPopupDelete = ({docId , setDocId}) => {

    const [disable , setDisable] = useState(false)

    return (
        <Box
        sx={{
            position : "fixed",
            width : "100%",
            height : "100vh",
            top : "0",
            left : "0",
            bgcolor : "rgba(20,20,20,.2)",
            zIndex : "10",
            display : docId ? "grid" : "none",
            placeItems : "center"
        }}>
            <Box
            sx={{
                width : "min(240px,80vw)",
                bgcolor : "white.main",
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                borderRadius : "12px"
            }}>

                <Box
                sx={{
                    display : "flex",
                    width : "100%",
                    justifyContent : "end",
                }}>
                    <CloseIcon
                    onClick={() => {
                        setDocId("")
                    }}
                    sx={{
                        mt : 1,
                        mr : 1,
                        color : "black.main",
                        cursor : "pointer"
                    }}/>
                </Box>

                <Box
                sx={{
                    bgcolor : "error.main",
                    p : 1,
                    borderRadius : "50%",
                    display : "grid",
                    placeItems : "center",
                    mt : 1,
                    mb : 2,
                }}>

                    <DeleteForeverIcon
                    sx={{
                        color : "white.main",
                        fontSize : "3.5rem",
                    }}/>

                </Box>

                <Typography
                sx={{
                    fontSize : "1rem",
                    fontWeight : "600",
                    color : "black.dark",
                }}>
                    درخواست حذف کتاب
                </Typography>

                <Typography
                sx={{
                    my : .5,
                    fontSize : ".8rem",
                    color : "black.light",
                    width : "80%",
                    textAlign : "center"
                }}>
                    در صورت حذف شدن کتاب بازگردانی آن امکان پذیر نمی باشد
                </Typography>

                <Box
                sx={{
                    mt : 2,
                    mb : 4,
                    display : "grid",
                    width : "min(250px,90%)",
                    placeItems : "center",
                    justifyContent : "center",
                    gridTemplateColumns : "repeat(auto-fit , 80px)",
                    rowGap : 1
                }}>
                    <PopupButton
                    onClick={ async () => {
                        setDisable(true)
                        try{
                            await deleteBook(docId , setDocId);
                            setDisable(false)
                        }
                        catch(err){
                            console.log(err.toString())
                            setDisable(false)
                        }
                        
                    }}
                    text="تایید"
                    bsx={{
                        pointerEvents : disable && "none",
                    }}
                    />
                    <PopupButton
                    onClick={() => {
                        setDocId("")
                    }}
                    psx={{
                        color : "error.main",
                    }}
                    bsx={{
                        bgcolor : "transparent"
                    }}
                    text="لغو"
                    />
                </Box>

            </Box>
        </Box>
    );
}

export default ConfirmPopupDelete;
