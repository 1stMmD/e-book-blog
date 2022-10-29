import React from 'react';
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Paper from "@mui/material/Paper";

import { sidebarSections } from '../utils/devlopment';
import { Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = ({showSidebar , setShowSidebar}) => {

    const {current} = useSelector(state => state.navbarSlice)

    return (
        <>
        <Box
        sx={{
            position:"fixed",
            display : "block",
            width:"100%",
            height:"100vh",
            bgcolor : "black.main",
            opacity:".3",
            transition : "all 200ms",
            top : "0",
            right : showSidebar ? "0" : "-100%",
        }}>
            
        </Box>

        <Box
        sx={{
            position : "fixed",
            display : "block",
            width : "200px",
            height : "100vh",
            bgcolor : "#fff",
            transition : "all 350ms",
            boxShadow : "-4px 0 12px rgba(20,20,20,.12)",
            top : "0",
            right : showSidebar ? "0" : "-300px",
            zIndex : "5"
        }}
        >
            <Paper
            dir="rtl"
            elevation={0}
            sx={{
                display: "flex",
                justifyContent : "flex-start",
                height:"60px",
                mb:2,
            }}>
                <IconButton
                sx={{
                    mr : 1.5,
                    width: "60px",
                    height:"60px"
                }}
                onClick={() => {
                    setShowSidebar(false);
                }}>
                    <CloseIcon
                    sx={{
                        fontSize : "2rem",
                        color:"black.main"
                    }}/>
                </IconButton>
            </Paper>

            {sidebarSections.map((item , idx) => {
                return(
                    <Link
                    key={idx}
                    onClick={() => {
                        setShowSidebar(false)
                    }}
                    to={item.url}
                    style={{
                        textDecoration : "none",
                    }}>
                        <Paper
                        key={idx}
                        dir="rtl"
                        elevation={0}
                        sx={{
                            display : "flex",
                            alignItems : "center",
                            justifyContent : "flex-start",
                            p : ".5rem",
                            fontWeight: "600",
                            cursor:"pointer",
                            color:"black.light",
                            bgcolor : item.name === current ? "#F2F2F2" : "",
                            "&:hover":{
                                color:"black.main",
                            },
                        }}>
                            {item.icon}
                            <Typography
                            variant="body1"
                            >
                                {item.title}
                            </Typography>
                        </Paper>
                    </Link>
                )
            })}

        </Box>
        </>
    );
}

export default Sidebar;
