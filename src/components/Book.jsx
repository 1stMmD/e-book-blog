import React ,{ useEffect , useRef }from 'react';
import { useNavigate } from 'react-router-dom';

import {
     Box , Paper , Button ,
     IconButton , Typography
} from "@mui/material";

import { CategoryBox } from "./index";

import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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

export const SMButton = ({ children , color , Bcolor , disable , onClick}) => {
    return (
        <Button
        onClick={onClick ? onClick : () => {}}
        sx={{
            position : "relative",
            color : disable ? "black.light" : "white.main",
            minWidth:0,
            minHeight : 0 ,
            width : 60 ,
            height : 40 ,
            borderRadius : "10px",
            bgcolor : disable ? "gray.main" : color + ".main" ,
            borderBottom : disable ? "" : `3px solid ${Bcolor}`,
            boxShadow : "0px 0px 10px rgba(0,0,0,.15)",
            pointerEvents : disable ? "none" : "inset",
            "&:hover" : {
                bgcolor : disable ? "gray.main" : color + ".main",
            },
        }}>
            {children}
        </Button>
    )
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
    const navigate = useNavigate();
    const container = useRef();

    useEffect(() => {

        container.current.scrollIntoView()

    },[])

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
                src="https://img.taaghche.com/frontCover/43023.jpg?w=150"
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
                        navigate("/reader")
                    }}>

                            <AutoStoriesIcon
                            sx={{
                                color : "white.main"
                            }}/>
                        
                    </StyledButton>

                    <StyledButton>

                        <BookmarkBorderIcon
                        sx={{
                            color : "white.main" ,
                        }}/>

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
                        شرکت خلاقیت
                    </Typography>

                    <Typography
                    sx={{
                        fontSize : 10,
                        color : "black.main",
                    }}>
                        اد کتمول
                    </Typography>

                    <Box
                    sx={{
                        display : "flex",
                        mt : .5 ,
                    }}>

                        <StarIcon
                        sx={{
                            fontSize : "1rem",
                            color : "primary.main",
                            alignItems : "center",
                            justifyContent : "center",
                        }}/>
                        
                        <Typography
                        sx={{
                            color : "black.main",
                            fontSize : 12 ,
                            fontFamily : ""
                        }}>
                            9
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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </Typography>

                    <Divider/>

                    <H3>
                       توضیحات نویسنده پست
                    </H3>
                    <Typography
                    sx={{
                        fontSize : 14,
                        color : "black.light"
                    }}
                    >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </Typography>

                    <Divider/>

                    <CategoryBox
                    header="کتاب های مشابه"
                    type="bookPage"
                    />

                    <Divider/>

                    <H3>
                        کتاب اصلی و نویسنده
                    </H3>
                    <Box
                    sx={{
                        display : "flex",
                        justifyContent : "space-evenly",
                        mb : 2,
                    }}>
                        <SMButton color="yellow" Bcolor="#E1B92C">
                            <ShoppingCartIcon
                            sx={{
                                color:"white.main"
                            }}/>
                        </SMButton>
                        <SMButton color="blue" Bcolor="#1F81DB">
                            <TwitterIcon
                            sx={{
                                color:"white.main"
                            }}/>
                        </SMButton>
                        <SMButton color="pink" Bcolor="#D71CA2">
                            <InstagramIcon
                            sx={{
                                color:"white.main"
                            }}/>
                        </SMButton>
                    </Box>
                </Box>

            </Box>

        </Box>
    );
}

export default Book;
