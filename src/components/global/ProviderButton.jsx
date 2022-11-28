import React from 'react';
import Box from  "@mui/material/Box";
import Typography from  "@mui/material/Typography";

const ProviderButton = ({
    text , icon , onClick
}) => {
    return (
        <Box
        onClick={onClick}
        component="button"
        sx={{
            mb : 1.5,
            py : 1,
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            gap : 1,
            width : "100%",
            bgcolor : "white.main",
            border : "none",
            borderRadius : "5px",
            boxShadow : "0 0 15px rgba(5,5,5,.15)",
            cursor : "pointer",
        }}>
            {
                <Box
                sx={{
                    color : "black.main"
                }}>
                    {icon}
                </Box>
            }
            <Typography
            sx={{
                color : "black.main",
                fontFamily : "roboto",
            }}>
                {text}
            </Typography>
        </Box>
    );
}

export default ProviderButton;
