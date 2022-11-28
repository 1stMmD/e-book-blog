import React ,{ useEffect , useRef , useState }from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import {
     Box , Paper , Button ,
     IconButton , Typography
} from "@mui/material";
import { CategoryBox } from "../index";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import useAxios from "../../hooks/useAxios";

import axios from 'axios';
import { useDispatch } from "react-redux"
import { changeCurrent } from '../../redux/navbarSlice';
const StyledButton = ({children , onClick}) => {
    return(
        <Button
        onClick={onClick}
        sx={{
            minWidth:0,
            minHeight : 0 ,
            bgcolor : "primary.main",
            padding : 1.5 ,
            borderRadius : "50%",
            boxShadow : "0 0 10px rgba(20,20,20,.2)",
            "&:hover" : {
                bgcolor : "primary.light"
            }
        }}>
            {children}
        </Button>
    );
}

const H3 = ({children}) => {
    return(
        <Typography
        component="h3"
        sx={{
            fontSize : "1.2rem",
            color : "black.main",
            fontWeight : "600",
            mb : 2,
        }}>
            {children}
        </Typography>
    )
}

const Divider = () => {
    return(
        <Paper
        elevation={0}
        sx={{
            width : "120px",
            height : "2px",
            bgcolor : "gray.main",
            my:2,
            alignSelf : "center",
        }}/>
    )
}

const Book = () => {

    const { id } = useParams()

    const [exists , setExists] = useState(checkBookExists())
    const dispatch = useDispatch()

    const {data , isPending , error} = useAxios(`/books/${id}`)

    const navigate = useNavigate();
    const container = useRef();

    function checkBookExists(){
        let arr = JSON.parse(localStorage.getItem("savedBooks") || "[]");
        return arr.some((item) => {
            return item.bookId.toString() === id.toString();
        });
    }

    useEffect(() => {

        container.current.scrollIntoView()

        dispatch(changeCurrent("book"))

    },[])

    useEffect(() => {
        (!isPending && !error && data) && axios.put("http://localhost:4000/books/" + data.id , {
            ...data,
            view : data.view + 1
        })
    },[data])


    return (
        <Box
        sx={{
            position:"relative"
        }}
        >
            <Box
            ref={container}
            />

            <IconButton
            onClick={() => navigate(-1)}
            sx={{
                position : "fixed",
                top : 10 ,
                right : 10 ,
                zIndex : "2" ,
            }}>
                <ArrowForwardIosRoundedIcon
                sx={{
                    color:"black.main" ,
                    fontSize : "2rem" ,
                }}/>
            </IconButton>

            <Box
            sx={{
                width : "100%",
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                position : "sticky",
                top:"0",
            }}>

                <Box
                component="img"
                alt="book cover"
                src={ data ? data.cover : "/Spinner.svg"}
                sx={{
                    width:"125px",
                    height : "185px",
                    borderRadius : "15px",
                    mt : 10,
                    boxShadow : "0 0 10px rgba(20,20,20,.2)",
                }}
                />

                <Box
                sx={{
                    position : "relative",
                    width : "100px",
                    height : "2px",
                    mt : 1,
                    bgcolor : "gray.main",
                    boxShadow : "0 0 10px rgba(20,20,20,.2)",
                    "&::before" : {
                        content : "''",
                        position : "absolute",
                        width : "50%",
                        height : "100%",
                        bgcolor : "primary.main",
                        top : "0",
                        left : "0",
                        borderRadius : "100px 0 0 100px",
                    },
                    "&::after" : {
                        content : "''",
                        position : "absolute",
                        width : "6px",
                        height : "6px",
                        bgcolor : "primary.main",
                        top : "50%",
                        left : "50%",
                        borderRadius:"50%",
                        transform : "translateY(-50%)"
                    },

                }}/>

                <Box
                sx={{
                    mt : 2 ,
                    display : "flex",
                    gap : 2,
                }}>

                    <StyledButton>

                        <ShareIcon
                        sx={{
                            color : "white.main"
                        }}/>

                    </StyledButton>

                    <StyledButton
                    onClick={() => {
                        navigate(`/reader/${data?.id}`)
                    }}>

                            <AutoStoriesIcon
                            sx={{
                                color : "white.main"
                            }}/>
                        
                    </StyledButton>

                    <StyledButton
                    onClick={() => {
                        let savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
                        if(!exists){
                        let obj = {
                            bookId : data.id,
                            progress : 0,
                        };
                        localStorage.setItem("savedBooks" , JSON.stringify([...savedBooks,obj]));
                        setExists(checkBookExists())
                        return
                        }
                        let idx = savedBooks.findIndex(item => item.bookId.toString() === id.toString);
                        savedBooks.splice(idx,1)
                        localStorage.setItem("savedBooks" , JSON.stringify(savedBooks));
                        setExists(checkBookExists())
                    }}>
                        {exists ?
                        <BookmarkIcon
                        sx={{
                            color : "white.main" ,
                        }}/>
                        :
                        <BookmarkBorderIcon
                        sx={{
                            color : "white.main" ,
                        }}/>
                        }

                    </StyledButton>

                </Box>

            </Box>

            <Box
            sx={{
                position : "relative",
                width:"100%",
                bgcolor : "white.main",
                boxShadow : "0 -5px 15px rgba(20,20,20,.12)",
                borderRadius : "50px 50px 0 0",
                mt : 3,
                display : "flex",
                flexDirection : "column",
                alignItems : "center"
                
            }}>

                <Box
                sx={{
                    width : "80%",
                    display : "flex",
                    alignItems : "center" ,
                    flexDirection : "column",
                    mt : 2,
                }}>

                    <Paper
                    elevation={0}
                    sx={{
                        width : "70px",
                        height : "3px",
                        bgcolor : "primary.main",
                        mb:1
                    }}
                    />
                    
                    <Typography
                    sx={{
                        fontSize : 15,
                        color : "black.main",
                        fontWeight : "600",
                    }}>
                        {data?.name}
                    </Typography>

                    <Typography
                    sx={{
                        fontSize : 10,
                        color : "black.main",
                    }}>
                        {data?.author}
                    </Typography>

                    <Box
                    sx={{
                        display : "flex",
                        alignItems : "center",
                        justifyContent : "center",
                        gap : 1
                    }}>
                        <VisibilityIcon
                        sx={{
                            fontSize : "1rem",
                            color : "primary.main"
                        }}/>
                        <Typography
                        sx={{
                            fontFamily : "Inter",
                            fontSize : "1rem",
                            color : "primary.main"
                        }}>
                            {data.view}
                        </Typography>
                    </Box>

                    <Divider/>

                    

                </Box>

                <Box
                dir="rtl"
                sx={{
                    width : "80%",
                    display : "flex" ,
                    flexDirection : "column",
                    justifyContent : "center",
                }}>

                    <H3>
                        درباره کتاب
                    </H3>
                    <Typography
                    sx={{
                        fontSize : 14,
                        color : "black.light"
                    }}
                    >
                        {data?.about}
                    </Typography>

                    <Divider/>

                    <CategoryBox
                    header="کتاب های مشابه"
                    type="bookPage"
                    />

                </Box>

            </Box>

        </Box>
    );
}

export default Book;
