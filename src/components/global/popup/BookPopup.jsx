import { useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';

import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { setBook } from "../../../redux/bookSlice";
import { useWatchForBook , likeTheBook } from "../../../functions/firestore";

const iconSX = {
    color : "white.main"
}
const BookPopup = () => {

    const { book } = useSelector(state => state.bookSlice);
    const { user } = useSelector(state => state.authSlice);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data] = useWatchForBook(book)

    if(!book) return

    const formater = Intl.NumberFormat("en" , { notation : "compact" })

    return (
        <Box
        sx={{
            display : "flex",
            position : "fixed",
            placeItems : "flex-start",
            justifyContent : "center",
            top : "0",
            left : "0",
            width : "100%",
            height : "100vh",
            bgcolor : "rgba(21,21,21,.16)",
            zIndex : 6,
            overflowY : "auto",
        }}>

            <Box
            sx={{
                position : "relative",
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                bgcolor : "white.main",
                overflowX : "hidden",
                overflowY : "auto",
                width : "min(290px,80vw)",
                pb: 5,
                borderRadius : 2,
                boxShadow : "0 3px 6px 0 rgba(21,21,21,.32)",
                my : 5
            }}>

                <FlexBox
                sx={{
                    justifyContent : "flex-end",
                    width : "100%",
                    mb : 2,
                    pt : 1,
                }}>
                    <CloseIcon
                    onClick={() => {
                        dispatch(setBook(null))
                    }}
                    sx={{
                        color : "black.dark",
                        mx : 1,
                        cursor : "pointer",
                    }}/>
                </FlexBox>

                <Box
                component="img"
                src={data?.cover}
                sx={{
                    width : "100px",
                    minWidth : "100px",
                    height : 150,
                    minHeight : 150,
                    borderRadius : "4px",
                    boxShadow : "0 3px 6px 0 rgba(21,21,21,.16)"
                }}/>

                <FlexBox>

                    <FlexBox
                    sx={{
                        justifyContent : "center",
                        alignItems : "center",
                        mt : .5,
                    }}>

                        <FavoriteIcon
                        sx={{
                            fontSize : "1rem",
                            color : "primary.main"
                        }}/>

                        <Typography
                        sx={{
                            textAlign : "center",
                            fontSize : ".8rem",
                            color : "primary.main",
                            mx : .3
                        }}>
                         {formater.format(data?.likedBy?.length)}
                        </Typography>

                    </FlexBox>

                    <FlexBox>
                        <Typography>
                            
                        </Typography>
                    </FlexBox>

                </FlexBox>

                <FlexBox
                sx={{
                    mt : 2,
                    gap : 1
                }}>
                    <Button
                    sx={{
                        p : 1
                    }}>
                        <ShareIcon
                        sx={iconSX}/>
                    </Button>
                    <Button
                    onClick={() => {
                        navigate(`/reader/${data?.docId}`)
                        dispatch(setBook(null))
                    }}
                    sx={{
                        p : 1
                    }}>
                        <AutoStoriesIcon
                        sx={iconSX}/>
                    </Button>
                    <Button
                    onClick={() => {
                        likeTheBook(data?.docId , user?.uid)
                    }}
                    sx={{
                        p : 1
                    }}>
                        { data?.likedBy.includes(user?.uid) ?
                        <FavoriteIcon
                        sx={iconSX}/>
                        :
                        <FavoriteBorderIcon
                        sx={iconSX}/>
                        }
                    </Button>
                </FlexBox>

                <FlexBox
                sx={{
                    flexDirection : "column",
                    alignItems : "center",
                    mt : 2
                }}>

                    <Typography
                    sx={{
                        fontSize : ".9rem",
                        color : "black.dark",
                        textAlign : "center",
                    }}>
                        {data?.name}
                    </Typography>

                    <Typography
                    sx={{
                        mt : .5,
                        width : "80%",
                        fontSize : ".8rem",
                        color : "black.light",
                        textAlign : "center",
                    }}>
                        {data?.author}
                    </Typography>

                </FlexBox>

                <Divider/>

                <Typography
                sx={{
                    width : "80%",
                    textAlign : "justify",
                    fontSize : ".8rem",
                    color : "black.light",
                    mt : 1
                }}>
                    {data?.about}
                </Typography>
            </Box>
            
        </Box>
    );
}

export default BookPopup;

const FlexBox = ({children , sx ,...rest}) => {
    return(
    <Box
    {...rest}
    sx={{
        display : "flex",
        ...sx
    }}>
        {children}
    </Box>
    )
}

const Divider = () => {
    return(
        <Box
        elevation={0}
        sx={{
            width : "60%",
            height : "2px",
            minHeight : 2,
            bgcolor : "gray.main",
            my:2,
            alignSelf : "center",
        }}/>
    )
}