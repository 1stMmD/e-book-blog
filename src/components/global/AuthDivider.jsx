import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AuthDivider = () => {
    return (
        <Box
        sx={{
            my : 1.5,
            width : "100%",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
        }}>
            <Box
            sx={{
                width : "30%",
                height : "1px",
                bgcolor : "gray.dark",
            }}/>

            <Typography
            sx={{
                fontFamily : "roboto",
                mx : 1,
                color : "gray.dark",
                fontSize : ".8rem",
            }}>
                OR
            </Typography>

            <Box
            sx={{
                width : "30%",
                height : "1px",
                bgcolor : "gray.dark",
            }}/>

        </Box>
    );
}

export default AuthDivider;
