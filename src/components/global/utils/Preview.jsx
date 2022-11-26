import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom"
import Button from "./Button";

const Preview = ({type}) => {
    return (
        <Box
        sx={{
            display : "flex",
            flexDirection : "column",
            alignItems : "end",
        }}>

            {type === "book" &&
                <>
                <Box
                sx={{
                    diplay: "inline",
                    width : {
                        xs : "80px",
                        md : "100px",
                        lg : "140px",
                        xl : "180px",
                    } ,
                    height : {
                        xs :"120px",
                        md : "150px",
                        lg: "210px",
                        xl : "270px",
                    },
                    borderRadius : {
                        xs : "9px",
                        md : "13px",
                        lg : "14px",
                        xl : "18px"
                    },
                    bgcolor : "gray.main",
                }}/>

                <Box
                sx={{
                mt : .7,
                display : "flex",
                gap : {
                    xs : .8,
                    md : 1 ,
                    lg : 1.2
                }
                }}>

                    <Button>
                        <DeleteIcon
                        sx={{
                            color : "white.main",
                            fontSize : {
                                xs : "1rem",
                                md : "1.2rem",
                                lg : "1.3rem",
                                xl : "1.5rem"
                            },
                            p : "0"
                        }}/>
                    </Button>
                    
                    <Link
                    to="/admin/editbook">
                        <Button>
                            <EditIcon
                            sx={{
                                color : "white.main",
                                fontSize : {
                                    xs : "1rem",
                                    md : "1.2rem",
                                    lg : "1.3rem",
                                    xl : "1.5rem"
                                },
                                p : "0"
                            }}/>
                        </Button>
                    </Link>


            </Box>
            </>
            }

            {type === "request" &&
                <>
                <Box
                sx={{
                    diplay: "inline",
                    width : {
                        xs : "80px",
                        md : "100px",
                        lg : "140px",
                        xl : "180px",
                    } ,
                    height : {
                        xs :"120px",
                        md : "150px",
                        lg: "210px",
                        xl : "270px",
                    },
                    borderRadius : {
                        xs : "9px",
                        md : "13px",
                        lg : "14px",
                        xl : "18px"
                    },
                    bgcolor : "gray.main",
                }}/>

                <Box
                sx={{
                mt : .7,
                display : "flex",
                gap : {
                    xs : .8,
                    md : 1 ,
                    lg : 1.2
                }
                }}>

                    <Button>
                        <CloseIcon
                        sx={{
                            color : "white.main",
                            fontSize : {
                                xs : "1rem",
                                md : "1.2rem",
                                lg : "1.3rem",
                                xl : "1.5rem"
                            },
                            p : "0"
                        }}/>
                    </Button>

                    <Button>
                        <CheckIcon
                        sx={{
                            color : "white.main",
                            fontSize : {
                                xs : "1rem",
                                md : "1.2rem",
                                lg : "1.3rem",
                                xl : "1.5rem"
                            },
                            p : "0"
                        }}/>
                    </Button>

            </Box>
            </>
            }

            { type === "banner" &&
                <>
                <Box
                sx={{
                    diplay: "inline",
                    minWidth:"clamp(220px,50vw,700px)",
                    minHeight:"clamp(110px,25vw,350px)",
                    borderRadius : "14px",
                    bgcolor : "gray.main",
                }}/>

                <Box
            sx={{
                mt : .7,
                display : "flex",
                gap : .8
            }}>
                
                <Button>
                    <DeleteIcon
                    sx={{
                        color : "white.main",
                        fontSize : {
                            xs : "1rem",
                            md : "1.2rem",
                            lg : "1.3rem",
                            xl : "1.5rem"
                        },                        p : "0"
                    }}/>
                </Button>
                
                <Link
                to="/admin/editbanner">
                    <Button>
                        <EditIcon
                        sx={{
                            color : "white.main",
                            fontSize : {
                                xs : "1rem",
                                md : "1.2rem",
                                lg : "1.3rem",
                                xl : "1.5rem"
                            },                            p : "0"
                        }}/>
                    </Button>
                </Link>

            </Box>
                </>
            }
            
        </Box>
    );
}

export default Preview;
