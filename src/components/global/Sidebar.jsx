import React from 'react';
import Box from "@mui/material/Box"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Paper from "@mui/material/Paper";

import { sidebarSections , authorSidebar , adminSidebar } from '../../utils/navbarSections';
import { Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const XlButtons = ({color , icon , url , title}) => {
    return(
        <Link
        to={url}>
            <Box
            component="button"
            title={title}
            sx={{
                display : "grid",
                placeItems : "center",
                bgcolor : color,
                p : 1,
                borderRadius : "50%",
                border : "none",
                cursor : "pointer",
                "&:hover" : {

                },
            }}>
                {icon}
            </Box>
        </Link>
    )
}

const Sidebar = ({showSidebar , setShowSidebar , admin , type}) => {

    const {current} = useSelector(state => state.navbarSlice)
    const { user } = useSelector(state => state.authSlice)

    let sections = sidebarSections;
    if(user?.author) sections = [...sections , ...authorSidebar]
    if(user?.email === "mmdj27634@gmail.com") sections = [...sections , ...adminSidebar]
    
    return (
    <>
        { type === "mobile" && 
        <>
            <Box
            sx={{
                position:"fixed",
                display : {
                    xs :"block",
                    lg : "none"
                },
                width:"100%",
                height:"100vh",
                bgcolor : "black.main",
                opacity:".3",
                top : "0",
                right : showSidebar ? "0" : "-100%",
            }}>
                
            </Box>

            <Box
            sx={{
                position : "fixed",
                display : {
                    xs :"block",

                    lg : "none"
                },
                width : "200px",
                height : "100vh",
                bgcolor : "#fff",
                transition : "all 350ms",
                boxShadow : "-4px 0 12px rgba(20,20,20,.12)",
                top : "0",
                right : showSidebar ? "0" : "-300px",
                zIndex : 6
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

                {sections && sections?.map((item , idx) => {
                    return(
                        <Link
                        key={idx}
                        onClick={() => {
                            setShowSidebar(false)
                        }}
                        to={item?.url}
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
                                bgcolor : item?.name === current ? "#F2F2F2" : "",
                                "&:hover":{
                                    color:"black.main",
                                },
                            }}>
                                {item?.icon}
                                <Typography
                                variant="body1"
                                >
                                    {item?.title}
                                </Typography>
                            </Paper>
                        </Link>
                    )
                })}

            </Box>
        </>
        }

        {type === "pc" && 
        <Box
        sx={{
            display : "flex",
            gap : 1,
        }}>
            {sections?.map((item,idx) => {
                if(current === item?.name) {

                    return <XlButtons
                           title={item?.title}
                           key={idx}
                           color="gray.light"
                           icon={item?.noMarginIcon}
                           url = {item?.url}
                           />

                }
                    return <XlButtons
                            title={item?.title}
                            key={idx}
                            color = "primary.main"
                            icon = {item?.whiteIcon}
                            url = {item?.url}
                            />
                
            })}
        </Box>  
        }
    </>
    );
}

export default Sidebar;
