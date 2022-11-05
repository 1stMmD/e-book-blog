import Box from "@mui/material/Box";

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

            { type === "book" &&
                <>
                <Box
                sx={{
                    diplay: "inline",
                    width : "78px",
                    height : "118px",
                    borderRadius : "9px",
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
                        fontSize : "1rem",
                        p : "0"
                    }}/>
                </Button>
                
                <Link
                to="/admin/editbook">
                    <Button>
                        <EditIcon
                        sx={{
                            color : "white.main",
                            fontSize : "1rem",
                            p : "0"
                        }}/>
                    </Button>
                </Link>

            </Box>
            </>
            }

            { type === "banner" &&
                <>
                <Box
                sx={{
                    diplay: "inline",
                    width : "200px",
                    height : "100px",
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
                        fontSize : "1rem",
                        p : "0"
                    }}/>
                </Button>
                
                <Link
                to="/admin/editbanner">
                    <Button>
                        <EditIcon
                        sx={{
                            color : "white.main",
                            fontSize : "1rem",
                            p : "0"
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
