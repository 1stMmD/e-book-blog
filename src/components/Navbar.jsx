import React , {useState , useRef , useEffect} from 'react';
import { Sidebar } from "./index";
import {
    Box , IconButton , TextField,
    Fade , Collapse
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import { useSelector } from 'react-redux';

const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [showSidebar , setShowSidebar] = useState(false)

    const textFieldRef = useRef()
    const searchRef = useRef()

    const { isAdmin } = useSelector(state => state.adminSlice);

    const iconButtonSX = {
        fontSize : "2rem",
        display : search ? "none" : "inline",
        color: "black.main",
    }

    const buttonSX = {
        m : "0 12px",
    }

    useEffect(() => {
        if(search){
            textFieldRef.current.querySelector("input").focus()
        }
    },[search])
    return (
        <>
        <Box
        sx={{
            zIndex : "5",
            width : "100%",
            height:"60px",
            position: "fixed",
            display : {
                xs : "flex",
                lg : "none",
            },
            justifyContent : search ? "center" : "space-between",
            alignItems : "center",
            bgcolor:"#ffffff",
        }}>

            <Fade in={!search}>

                <IconButton
                ref={searchRef}
                sx={{
                    display : {
                        lg : "none",
                    },
                    mx : 1,
                }}
                onClick={() => {
                    setSearch(true)
                }}
                >
                    <SearchIcon
                    sx={{
                        fontSize : "2rem",
                        display : search ? "none" : {
                        xs : "inline",
                        lg : "none"
                        },
                        color: "black.main",
                    }}/>
                </IconButton>

            </Fade>

            <Collapse
            in={search}
            >
                <form
                style={{
                    display : search ? "inline" : "none"
                }}>
                    <TextField
                    ref={textFieldRef}
                    onBlur={(e) => {
                        if(e.target.value === "" || e.target.value === "" ) setSearch(false)
                    }}
                    dir="rtl"
                    variant="standard"
                    sx={{
                        height: "30px",
                        p: "0px",
                        width : "80vw",
                        transition : "all 500ms"
                    }}
                    />
                </form>
            </Collapse>

            <Fade in={!search}>
                <IconButton
                sx={buttonSX}
                onClick={() => {
                    setShowSidebar(true);
                }}>
                    <MenuIcon
                    sx={iconButtonSX}/>
                </IconButton>
            </Fade>

            <Sidebar 
            admin={isAdmin}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            type="mobile"/>

        </Box>

        <Box
        sx={{
            zIndex : "5",
            width : "100%",
            height:"60px",
            position: "fixed",
            display : {
                xs : "none",
                lg : "flex",
            },
            justifyContent : "space-evenly",
            alignItems : "center",
            bgcolor:"#ffffff",
        }}>

            <Box
            dir="rtl"
            component="form"
            sx={{
                display : {
                    xs : "none",
                    lg : "flex",
                },

            }}>

                <TextField
                sx={{
                    "div" : {
                        borderRadius:"100px",
                    },
                    "input" :{
                        py: 1,
                        px : 2,
                        width : "min(400px,35vw)",
                    }
                }}/>

                <Box
                component="button"
                sx={{
                    border : "none",
                    bgcolor : "primary.main",
                    borderRadius : "50%",
                    mr : 1,
                    width : "39px",
                    height : "39px",
                    cursor : "pointer",
                    display : "grid",
                    placeItems : "center",
                }}
                >
                    <SearchIcon
                    sx={{
                        color : "white.main"
                    }}/>
                </Box>

            </Box>

            <Sidebar 
            admin={isAdmin}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            type="pc"/>

        </Box>

        <Box
        sx={{
            width : "100%",
            height : "60px",
        }}
        />

        </>
    );
}

export default Navbar;
