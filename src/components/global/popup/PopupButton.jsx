import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PopupButton = ({text , bsx , psx , onClick}) => {
    return (
        <Box
        onClick={onClick}
        component="button"
        sx={{
            p : .7,
            bgcolor : "error.main",
            minWidth : "4rem",
            border : "1px solid",
            borderColor : "error.main",
            borderRadius : 1,
            cursor : "pointer",
            ...bsx
        }}>

            <Typography
            sx={{
                fontSize : ".8rem",
                color : "white.main",
                ...psx
            }}>
                {text}
            </Typography>
            
        </Box>
    );
}

export default PopupButton;
