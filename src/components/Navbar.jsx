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
        m : 1.5,
        display : search ? "none" : "inline",
        color: "black.main"
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
            width : "100%",
            height:"60px",
            position: "fixed",
            display : "flex",
            justifyContent : search ? "center" : "space-between",
            alignItems : "center",
            bgcolor:"#ffffff",
        }}>

            { window.location.pathname !== "/admin/create" &&
            <Fade in={!search}>
                <IconButton
                ref={searchRef}
                onClick={() => {
                    setSearch(true)
                }}
                >
                    <SearchIcon
                    sx={iconButtonSX}/>
                </IconButton>
            </Fade>
            }

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
            setShowSidebar={setShowSidebar}/>

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
