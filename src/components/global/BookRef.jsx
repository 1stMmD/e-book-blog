import Box from "@mui/material/Box";
import Paper  from "@mui/material/Paper";
import Typography  from "@mui/material/Typography";
import { setBook } from "../../redux/bookSlice";
import { useDispatch
 } from "react-redux";
const BookRef = ({name , author , cover , bookId , book}) => {
    
    const dispatch = useDispatch()
    
    return (
            <Box
            onDragStart={(e) => {
                e.preventDefault();
            }}
            sx={{
                display : "flex",
                alignItems : "center",
                flexDirection : "column",
                width:"fit-content",
                scrollSnapAlign:"start",
            }}>
                    <Paper
                    onClick={() => {
                        dispatch(setBook(bookId))
                    }}
                    elevation={0}
                    sx={{
                        width : {
                            xs : "80px",
                            md : "90px",
                            lg : "100px",
                            xl : 110
                        } ,
                        height : {
                            xs :"120px",
                            md : "135px",
                            lg : 150,
                            xl : 165
                        },
                        bgcolor : "#e1e1e1",
                        borderRadius : {
                            xs : "4px",
                            md : "4px",
                            lg : "4px",
                            xl : "6px"
                        },
                        backgroundImage : `url(${cover})`,
                        backgroundSize : "cover",
                        cursor : "pointer",
                        boxShadow: "0 3px 6px 0 rgba(0,0,0,.16)",
                        mb:1,
                        "&:hover" : {
                            boxShadow: "0 6px 6px 0 rgba(0,0,0,.32)",
                        }
                    }}/>
                
                <Typography
                variant="body2"
                sx={{
                    fontSize : {
                        xs : ".75rem",
                        lg : ".75rem"
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
                        xs : ".75rem",
                        lg : ".75rem"
                    },
                    maxWidth: "78px",
                    overflow : "hidden",
                    whiteSpace : "nowrap",
                    textOverflow : "ellipsis",
                    color : "black.light",
                }}>
                    {author ? author : "..."}
                </Typography>
            </Box>
    );
}

export default BookRef;
