import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from '@mui/icons-material/Error';

const ErrorBox = ({Error , SetError}) => {
    return (
        <>

        <Box
        sx={{
            position : Error ? "fixed" : "none",
            width: "100%",
            height: "100vh",
            bgcolor : "rgba(25,25,25,.3)",
            top : "0",
            zIndex : "7"
        }}>

        <Box
            sx={{
            position : "absolute",
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center",
            width: 200,
            height: 200,
            borderRadius : "12px",
            bgcolor : "white.main",
            boxShadow : "0px 0px 10px rgba(10,10,10,.2)",
            bottom : "50%",
            right : "50%",
            transform : `translateY(50%) translateX(50%) ${Error ? "scale(1)" : "scale(0)"}`,
            transition :"all 300ms",
            gap : "7px",
        }}>

            <ErrorIcon
            sx={{
                fontSize : "4rem",
                color : "error.main",
            }}/>

            <Typography
            sx={{
                fontSize : 20,
                fontWeight : "800",
                color : "error.main",
            }}
            >
                ناموفق
            </Typography>

            <Typography
            sx={{
                fontSize : 12,
                fontWeight : "500",
                color : "black.main",
            }}
            >
                {Error}
            </Typography>

            <Box
            onClick={() => {
                SetError("");
            }}
            component="button"
            sx={{
                display : "grid",
                placeItems : "center",
                width : "70px",
                height : "30px",
                bgcolor : "error.main",
                border : "none",
                borderRadius : "8px",
                fontFamily : "YekanBakh",
                fontSize : 10,
                color : "white.main",
                cursor : "pointer",
            }}>
                امتحان مجدد
            </Box>
            
        </Box>

        </Box>

        
        </>
    );
}

export default ErrorBox;
