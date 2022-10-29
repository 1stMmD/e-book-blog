import Box from "@mui/material/Box";
import Paper  from "@mui/material/Paper";
import Typography  from "@mui/material/Typography";
import { Link } from "react-router-dom"

const BookRef = ({name , author , cover}) => {
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
                to={"/book"}
                >
                    <Paper
                    elevation={0}
                    sx={{
                        width : {
                            xs : "78px",
                        } ,
                        height : "113px",
                        bgcolor : "#e1e1e1",
                        borderRadius : "9px",
                        backgroundImage : `url(${cover})`,
                        cursor : "pointer",
                        boxShadow: "0 0 5px rgba(0,0,0,.2)",
                        mb:1,
                    }}/>
                </Link>
                
                <Typography
                variant="body2"
                sx={{
                    fontSize : ".7rem",
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
                    fontSize : ".6rem",
                    maxWidth: "78px",
                    overflow : "hidden",
                    whiteSpace : "nowrap",
                    textOverflow : "ellipsis",
                    color : "black.main",
                }}>
                    {author ? author : "..."}
                </Typography>
            </Box>
    );
}

export default BookRef;
