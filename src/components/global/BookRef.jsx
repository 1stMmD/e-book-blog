import Box from "@mui/material/Box";
import Paper  from "@mui/material/Paper";
import Typography  from "@mui/material/Typography";
import { Link } from "react-router-dom"

const BookRef = ({name , author , cover , bookID}) => {
    return (
            <Box
            sx={{
                display : "flex",
                alignItems : "center",
                flexDirection : "column",
                width:"fit-content",
                scrollSnapAlign:"start",
            }}>

                <Link
                to={`/book/${bookID}`}
                >
                    <Paper
                    elevation={0}
                    sx={{
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
                        bgcolor : "#e1e1e1",
                        borderRadius : {
                            xs : "7px",
                            md : "10px",
                            lg : "12px",
                            xl : "15px"
                        },
                        backgroundImage : `url(${cover})`,
                        backgroundSize : "cover",
                        cursor : "pointer",
                        boxShadow: "0 0 5px rgba(0,0,0,.2)",
                        mb:1,
                    }}/>
                </Link>
                
                {/* <Typography
                variant="body2"
                sx={{
                    fontSize : {
                        xs : ".7rem",
                        lg : "1rem"
                    },
                    maxWidth: "78px",
                    overflow : "hidden",
                    whiteSpace : "nowrap",
                    textOverflow : "ellipsis",
                    color : "black.dark",
                }}
                >
                    {name ? name : "..."}
                </Typography>

                <Typography
                variant="body2"
                sx={{
                    fontSize : {
                        xs : ".6rem",
                        lg : ".9rem"
                    },
                    maxWidth: "78px",
                    overflow : "hidden",
                    whiteSpace : "nowrap",
                    textOverflow : "ellipsis",
                    color : "black.main",
                }}>
                    {author ? author : "..."}
                </Typography> */}
            </Box>
    );
}

export default BookRef;
