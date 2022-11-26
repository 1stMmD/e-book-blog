import React , {useState , useRef , useEffect} from 'react';
import { Sidebar } from "../index";
import {
    Box , IconButton , TextField,
    Fade , Collapse
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { signOut } from '../../functions/auth';

const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [showSidebar , setShowSidebar] = useState(false)

    const textFieldRef = useRef()
    const searchRef = useRef()

    const { isAdmin } = useSelector(state => state.adminSlice);
    const { current } = useSelector(state => state.navbarSlice);
    const { user } = useSelector(state => state.authSlice);

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

    let dontShowIf = ["reader" , "book" , "admin"]
    if(dontShowIf.includes(current)) return ""

    return (
        <>
        {/*mobile navbar*/}
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

            {user ? 
            <button
            onClick={() => {
                signOut()
            }}
            >
                Sign out
            </button>
            :
            ""
            }

            <Collapse
            in={search}
            >
                <form
                style={{
                    display : search ? "block" : "none"
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
                        width : "90vw",
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

        {/*pc navbar*/}
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

        {/*in order to don't let content
        stuck under Navbar*/}
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
