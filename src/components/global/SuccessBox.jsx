import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SuccessBox = ({success , setSuccess}) => {
    return (
        <>

        <Box
        sx={{
            position : "fixed",
            display : success ? "block" : "none",
            width: "100%",
            height: "100vh",
            bgcolor : "rgba(25,25,25,.3)",
            top : "0",
            zIndex : "7"
        }}>

        <Box
            sx={{
            position : "absolute",
            display : success ? "flex" : "none",
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

            <CheckCircleIcon
            sx={{
                fontSize : "4rem",
                color : "success.main",
            }}/>

            <Typography
            sx={{
                fontSize : 20,
                fontWeight : "800",
                color : "success.main",
            }}
            >
                موفق
            </Typography>

            <Typography
            sx={{
                fontSize : 12,
                fontWeight : "500",
                color : "black.main",
            }}
            >
                {success}
            </Typography>

            <Box
            onClick={() => {
                setSuccess("");
            }}
            component="button"
            sx={{
                display : "grid",
                placeItems : "center",
                width : "70px",
                height : "30px",
                bgcolor : "success.main",
                border : "none",
                borderRadius : "8px",
                fontFamily : "YekanBakh",
                fontSize : 12,
                color : "white.main",
                cursor : "pointer",
            }}>
                تایید
            </Box>
            
        </Box>

        </Box>

        
        </>
    );
}

export default SuccessBox;
