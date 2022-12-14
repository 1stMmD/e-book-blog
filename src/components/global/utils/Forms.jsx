import React , { useState , useEffect} from 'react';
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import CategoryInput from '../../global/CategoryInput';
import { createBookDoc, updateBook , getBook} from '../../../functions/firestore';

const textStyle = {
    fontSize : {
        xs : "1rem",
        lg : "1.1rem"
    },
    color : "black.main",
    my : 1,
}

const StyledTextField = ({ setValue , ...attr }) => {
    return(<TextField
            {...attr}
            onChange={(e) => {
                setValue(e.target.value)
            }}
            sx={{
                width : "100%",
                mb : 2 ,
                "input" : {
                    px : 1,
                    py : 1,
                    fontSize : {
                        xs : "1rem",
                    },
                }
            }}/>)
}

const TextArea = ({value , setValue}) => {
return(<Box
    component="textarea"
    value={value}
    onChange={(e) => {
        setValue(e.target.value)
    }}
    sx={{
        fontSize : "1rem",
        maxWidth : "calc(100% - 8px)",
        minWidth : "calc(100% - 8px)",
        width : "calc(100% - 8px)",
        p : "4px",
        mb : 2 ,
        borderColor : "gray.dark",
        borderRadius : "3px",
        fontFamily : (theme) => theme.typography.fontFamily,
        "&:focus" : {
        outlineColor : (theme) => theme.palette.primary.main,

        }
    }}/>)
}

const SubmitButton = ({onClick , disabled , text = "Add"}) => {
return(
    <Box
    onClick={onClick}
    component="button"
    type="submit"
    sx={{
        display : "gird",
        placeItems : "center",
        width : {
            xs : 100,
            lg : 150,
        },
        height : {
            xs : 40,
            lg : 60
        },
        bgcolor : disabled ? "gray.dark" : "primary.main",
        borderRadius : {
            xs : "7px",
            lg : "11px"
        },
        border : "none",
        alignSelf : "center",
        mt : 2,
        fontFamily : "Yekanbakh",
        fontWeight : "400",
        color : disabled ? "black.main" : "white.main",
        borderBottom : !disabled && "3px solid #AE4BDD",
        cursor :"pointer",
        transition : "background-color 300ms",
        pointerEvents : disabled && "none",
        boxShadow : "0 4px 5px rgba(5,5,5,.15)",
        "&:active" :{
            borderBottom : "none"
        }
    }}
    >
        <Typography
        sx={{
            fontSize : {
                xs : "1rem",
                lg : "1.3rem",
            },
        }}>
            {text}
        </Typography>
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
                onChange={(e) => {
                    let file = e.target.files[0]
                    let reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = () => {
                        setValue(reader.result)
                    }
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
                    minWidth : type === "book" ? 
                    {
                        xs : "80px",
                        md : "100px",
                        lg : "140px",
                        xl : "180px",
                    } : "min(400px,80vw)",
                    minHeight : type === "book" ?
                    {
                        xs :"120px",
                        md : "150px",
                        lg: "210px",
                        xl : "270px",
                    } : "min(200px,40vw)",
                    maxWidth : type === "book" ?
                    {
                        xs : "80px",
                        md : "100px",
                        lg : "140px",
                        xl : "180px",
                    } : "80vw",
                    maxHeight : type === "book" ?
                    {
                        xs :"120px",
                        md : "150px",
                        lg: "210px",
                        xl : "270px",
                    } : "40vw",
                    borderRadius : type === "book"?
                    {
                        xs : "4px",
                        md : "4px",
                        lg : "4px",
                        xl : "6px"
                    }: 
                    {
                        xs : "9px",
                        md : "12px",
                    },
                    border : "2px solid",
                    borderColor : "gray.dark",
                    alignSelf : "center",
                    mb : 2,
                    alignItems : "center",
                    justifyContent : "center",
                    backgroundImage : value && `url(${value})`,
                    backgroundRepeat : "no-repeat",
                    backgroundSize : "cover",
                    backgroundPosition : "center",
                    cursor : "pointer",
                }}
                >
                    { !value && <AddPhotoAlternateIcon color="primary"/> }
                </Box>
        </>
    )
}

export const BookForm = ({
     setSuccess , setError, bookId    
}) => {

    const [pending , setPending] = useState(false)
    const [cValue , setCValue] = useState("")
    const [categorys , setCategorys] = useState([])
    const [bookName , setBookName] = useState("")
    const [bookAuthor , setBookAuthor] = useState("")
    const [aboutBook , setAboutBook] = useState("")
    const [bookContent , setBookContent] = useState("")
    const [bookCover , setBookCover] = useState("")
    const [disabled , setDisabled] = useState(false)

    useEffect(() => {
        if(bookId){
            setPending(true)
            getBook(bookId)
            .then(value => {
                setBookName(value.name);
                setBookAuthor(value.author);
                setAboutBook(value.about);
                setBookContent(value.content);
                setBookCover(value.cover);
                setCategorys(value.categorys);
                setPending(false)
            })
        }
    },[])
    if(pending){
        return(
            <div>Loading...</div>
        )
    }

    return (
            
                <Box
                component="div"
                sx={{
                    postion : "relative",
                    width : "min(800px,80vw)",
                    display : "flex",
                    flexDirection : "column",
                }}>
                    <Typography
                    sx={textStyle}
                    >
                        Name 
                    </Typography>
                    <StyledTextField
                    value={bookName}
                    setValue={setBookName}
                    />

                    <Typography
                    sx={textStyle}
                    > 
                        Author 
                    </Typography>
                    <StyledTextField
                    value={bookAuthor}
                    setValue={setBookAuthor}
                    />

                    <Typography
                    sx={textStyle}
                    >
                        Content
                    </Typography>
                    <TextArea
                    value={bookContent}
                    setValue={setBookContent}
                    />

                    <Typography
                    sx={textStyle}
                    >
                        Description
                    </Typography>
                    <TextArea
                    value={aboutBook}
                    setValue={setAboutBook}
                    />

                    <Typography
                    sx={textStyle}
                    >
                        Cover Image
                    </Typography>
                    <FileForm
                    type="book"
                    value={bookCover}
                    setValue={setBookCover}
                    />

                    <Typography
                    sx={textStyle}
                    >
                        Categorys
                    </Typography>
                    <CategoryInput
                    cValue={cValue}
                    setCValue={setCValue}
                    categorys={categorys}
                    setCategorys={setCategorys}/>

                    <SubmitButton
                    text={bookId && "Update"}
                    disabled={disabled}
                    onClick={() => {
                        setDisabled(true)
                        if(!bookName){
                            setDisabled(false)
                            setError("اسم کتاب را بنویسید")
                            return
                        }
                        if(!bookAuthor){
                            setDisabled(false)
                            setError("اسم نویسنده کتاب را بنویسید")
                            return
                        }
                        
                        if(!bookContent){
                            setDisabled(false)
                            setError("متن کتاب را بنویسید")
                            return
                        }
                        if(!aboutBook){
                            setDisabled(false)
                            setError("متنی درباره کتاب بنویسید")
                            return
                        }
                        
                        if(!bookCover){
                            setDisabled(false)
                            setError("عکس کاور کتاب را آپلود کنید")
                            return
                        }
                        if(!categorys[0]){
                            setDisabled(false)
                            setError("حداقل یک دسته بندی بنویسید")
                            return
                        }
                        if(!bookId){
                            createBookDoc({
                                name : bookName,
                                author : bookAuthor,
                                about : aboutBook,
                                categorys : categorys,
                                cover : bookCover,
                                content : bookContent,
                            },
                            setError,
                            setSuccess)
                            .then(() => {
                                setDisabled(false)
                            })
                            .catch(() => {
                                setDisabled(false)
                            })
                            console.log("add")
                            return
                        }
                        if(bookId){
                            updateBook(bookId , {
                                name : bookName,
                                author : bookAuthor,
                                about : aboutBook,
                                categorys : categorys,
                                cover : bookCover,
                                content : bookContent
                            },
                            setError,
                            setSuccess)
                            .then(() => {
                                setDisabled(false)
                            })
                            .catch(() => {
                                setDisabled(false)
                            })
                            console.log("update")
                            return
                        }
                      }
                    }
                    />

                </Box>

    );
}

export const BannerForm = ({setError , setSuccess}) => {
    const [bannerTitle , setBannerTitle] = useState("")
    const [bannerLink , setBannerLink] = useState("")
    const [bannerCover , setBannerCover] = useState("")
    return(
            <Box
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                component="div"
                sx={{
                    postion : "relative",
                    width : "min(800px,80vw)",
                    display : "flex",
                    flexDirection : "column",
                }}>

                    <Typography
                    sx={textStyle}
                    >
                        Title
                    </Typography>
                    <StyledTextField
                    value={bannerTitle}
                    setValue={setBannerTitle}
                    />

                    <Typography
                    sx={textStyle}
                    >
                        Link
                    </Typography>
                    <StyledTextField
                    value={bannerLink}
                    setValue={setBannerLink}
                    />

                    <Typography
                    sx={textStyle}
                    >
                        Cover image
                    </Typography>
                    <FileForm
                    type="banner"
                    value={bannerCover}
                    setValue={setBannerCover}
                    />

                    <SubmitButton
                    onClick={() => {
                        if(!bannerTitle){
                            setError("بنر به یک تایتل نیاز دارد")
                            return
                        }
                        // if(!bannerLink){
                        //     setError("بنر به یک لینک نیاز دارد")
                        //     return
                        // }
                        if(!bannerCover){
                            setError("بنر به یک کاور نیاز دارد")
                            return
                        }
                        axios.post("http://localhost:4000/banners",
                        {
                            title : bannerTitle,
                            link : bannerLink,
                            cover : bannerCover
                        })
                        .then( () => 
                        setSuccess("کتاب با موفقیت اضافه شد")
                        )
                        .catch(err => console.log(err))
                    }}/>

            </Box>
    )
}
