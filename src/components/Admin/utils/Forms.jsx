import React from 'react';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const StyledTextField = ({...attr}) => {
    return(<TextField
            {...attr}
            sx={{
                width : "100%",
                mb : 2 ,
                "input" : {
                    px : 1,
                    py : 1,
                    fontSize : "1rem",
                }
            }}/>)
}

const TextArea = ({value , onChange}) => {
return(<Box
    component="textarea"
    value={value}
    onChange={onChange}
    sx={{
        fontSize : "1rem",
        maxWidth : "calc(100% - 8px)",
        minWidth : "calc(100% - 8px)",
        width : "calc(100% - 8px)",
        p : "4px",
        mb : 2 ,
        borderColor : "gray.dark",
        borderRadius : "3px",
        "&:focus" : {
        outlineColor : (theme) => theme.palette.primary.main,

        }
    }}/>)
}

const SubmitButton = () => {
return(
    <Box
    component="button"
    type="submit"
    sx={{
        display : "gird",
        placeItems : "center",
        width : "100px",
        height : "40px",
        bgcolor : "primary.main",
        borderRadius : "5px",
        border : "none",
        alignSelf : "center",
        mt : 2,
        fontFamily : "Yekanbakh",
        fontWeight : "200",
        color : "white.main",
        fontSize : "1rem"
    }}
    >
        تایید
    </Box>
)
}

const FileForm = ({type , value , setValue}) => {
    return(
        <>
                <Box
                component="input"
                type="file"
                id="file"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                accept=".svg,.jpg,.png"
                sx={{
                    display : "none"
                }}
                />
                <Box
                component="label"
                htmlFor="file"
                sx={{
                    display : "flex",
                    minWidth : type === "book" ? "78px" : "80vw",
                    minHeight : type === "book" ? "113px" : "40vw",
                    maxWidth : type === "book" ? "78px" : "80vw",
                    maxHeight : type === "book" ? "113px" : "40vw",
                    borderRadius : "9px",
                    border : "2px solid",
                    borderColor : "gray.dark",
                    alignSelf : "center",
                    mb : 2,
                    alignItems : "center",
                    justifyContent : "center",
                }}
                >
                    <AddPhotoAlternateIcon color="primary"/>
                </Box>
        </>
    )
}

export const BookForm = () => {
    return (
            
                <Box
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                dir="rtl"
                component="form"
                sx={{
                    postion : "relative",
                    width : "80vw",
                    display : "flex",
                    flexDirection : "column",
                }}>
                    <Typography>اسم کتاب</Typography>
                    <StyledTextField/>

                    <Typography>اسم نویسنده پست</Typography>
                    <StyledTextField/>

                    <Typography>متن پست</Typography>
                    <TextArea/>

                    <Typography>درباره کتاب</Typography>
                    <TextArea/>

                    <Typography>توضیحات نویسنده پست</Typography>
                    <TextArea/>

                    <Typography>عکس کاور</Typography>
                    <FileForm
                    type="book"
                    />

                    <Typography>دسته بندی های کتاب</Typography>
                    <StyledTextField/>
                        
                    <Typography>کتاب اصلی</Typography>
                    <StyledTextField/>

                    <Typography>تویتر نویسنده کتاب</Typography>
                    <StyledTextField/>

                    <Typography>اینستاگرام نویسنده کتاب</Typography>
                    <StyledTextField/>

                    <SubmitButton/>

                </Box>

    );
}

export const BannerForm = () => {
    return(
            <Box
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                dir="rtl"
                component="form"
                sx={{
                    postion : "relative",
                    width : "80vw",
                    display : "flex",
                    flexDirection : "column",
                }}>

                    <Typography>عنوان بنر</Typography>
                    <StyledTextField/>

                    <Typography>لینک بنر</Typography>
                    <StyledTextField/>

                    <Typography>عکس کاور بنر</Typography>
                    <FileForm
                    type="banner"
                    />

                    <SubmitButton/>

            </Box>
    )
}
