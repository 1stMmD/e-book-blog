import Box from "@mui/material/Box";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom"
import Button from "./Button";

const Preview = ({type , onDelete , cover , bookId}) => {
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
                        xs : 80,
                        md : 90,
                        lg : 100,
                        xl : 110,
                    } ,
                    height : {
                        xs :120,
                        md : 135,
                        lg : 150,
                        xl : 165,
                    },
                    borderRadius : {
                        xs : "4px",
                        md : "4px",
                        lg : "4px",
                        xl : "6px"
                    },
                    bgcolor : "gray.main",
                    backgroundImage : `url(${cover})`,
                    backgroundSize : "cover",
                    backgroundPosition : "center",
                    boxShadow : "0 2px 8px rgba(5,5,5,.15)"
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

                    <Button
                    onClick={onDelete}>
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
                    to={`/editbook/${bookId}`}>
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
