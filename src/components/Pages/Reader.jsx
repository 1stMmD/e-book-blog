import React , {useState , useEffect , useRef , useCallback} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import {ReaderSetting} from "../index";

import { useDispatch } from 'react-redux';
import { changeCurrent } from '../../redux/navbarSlice';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';

const Reader = () => {
    const { id } = useParams();
    const {data , isPending , error} = useAxios("/books/" + id)

    //this will turn to a state
    //      👇🏻
    const fontSize = 18;
    const box = useRef()
    const page = useRef()

    const dispatch = useDispatch()

    const [current , setCurrent] = useState(1);
    const [nextPossible , setNextPossible] = useState(true);
    const [previusPossible , setPreviusPossible] = useState(true);
    const [currentPage , setCurrentPage] = useState([])

    const [theme , setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || {name : "default" , color : "#fff" , fontColor : "#252525"})
    const [align , setAlign] = useState(JSON.parse(localStorage.getItem("align")) || "justify");

    const findPage = useCallback((length) => {
        let text = "";
        let start = (current - 1)  * length;
        let end = current * length;
        let datalength = data.content.length;
        let finale = [];

        for(start ; data.content[start] !== " " && data.content[start - 1] ;start++){
            if(start > datalength) break;
            continue;
        }

        for(end ; data.content[end] !== " ";end++){
            if(end > datalength) break;
            continue;
        }

        end >= datalength ? setNextPossible(false) : setNextPossible(true);
        start <= 0 ? setPreviusPossible(false) : setPreviusPossible(true);

        text = data.content.slice(start , end);
        text = text.replaceAll("\n" , "☻");
               
        // set progress
        let arr = JSON.parse(localStorage.getItem("savedBooks") || "[]");
        let book = arr.filter(item => {
            if(item.bookId.toString() === id.toString()){
                return item
            }
        });

        if(book[0]){
            let idx = arr.findIndex(item => item?.bookId?.toString() === id.toString())
            arr.splice(idx , 1)
            let progress = Math.round((end / datalength) * 100);
            if(progress > 100){
                progress = 100
            }
            localStorage.setItem("savedBooks",JSON.stringify([...arr,{bookId : id , progress}]))
        }
        // set progress

        if(!text.split("").includes("☻"))return [text]

        let storedText = "";
        for(let i = 0; i < text.length ; i++){
            if(text[i] === "☻"){
                finale.push(storedText);
                finale.push("☻");
                storedText = "";
                continue; 
            }
            storedText += text[i];
            if(i >= text.length - 1){
                finale.push(storedText);
                storedText = ""
            }

        }

        return finale
        
    },[current , data])

    const findCurrent = () => {
        let arr = JSON.parse(localStorage.getItem("savedBooks") || "[]");
        let book = arr.filter(item => {
            if(item.bookId.toString() === id.toString()){
                return item
            }
        });
        if(!book[0]){
            return 1
        }
        
        let length = Math.round((page.current.offsetWidth * page.current.offsetHeight) / (fontSize * (fontSize * 0.85)));
        let dataLength = data?.content?.length;
        let num = Math.round((book[0].progress / 100) * (dataLength / length));
        if(num <= 0){
            return 1
        }
        return num
    }

    useEffect(() => {
        data && setCurrent(findCurrent())
    },[data])

    useEffect(() => {

        dispatch(changeCurrent("reader"))

        let {current : p} = page;

        let length = Math.round((p.offsetWidth * p.offsetHeight) / (fontSize * (fontSize * 0.85))) ;

        data && setCurrentPage(findPage(length))

        box.current.onselectstart = (e) => {
            e.preventDefault()
        }

    },[current , findPage , fontSize])

    return (
        <Box
        ref={box}
        dir="rtl"
        sx={{
            width:"100%",
            height : "100vh",
            display : "flex" ,
            justifyContent : "center",
            alignItems : "center",
            flexDirection : "column",
            bgcolor : theme.color
        }}>
            <Box
            ref={page}
            sx={{
                width : "80%",
                height: "80%",
                textAlign : align,
            }}>

                {currentPage.map((item , idx) => {
                    if(item === "☻") return
                    return <Typography
                            key={idx}
                            sx={{
                                fontSize : fontSize,
                                color : theme.fontColor,
                            }}>
                                {item}
                            </Typography>
                    // return item

                })}

            </Box>

            <Box
            dir="rtl"
            sx={{
                display : "flex",
                flexDirection : "row",
                justifyContent : "center",
                alignItems : "center",
            }}>
                
                
                <ArrowForwardIosRoundedIcon
                onClick={() => {
                    setPreviusPossible(false)
                    setCurrent(current - 1)
                }}
                sx={{
                    cursor : "pointer",
                    fontSize : "2rem" ,
                    color : theme.fontColor ,
                    m : 2 ,
                    opacity : previusPossible ? "1" : ".3",
                    pointerEvents : !previusPossible && "none",
                }}/>
                

                <Typography
                sx={{
                    color : theme.fontColor,
                    fontSize : "1.2rem" ,
                    mx : "1rem"
                }}>
                    {current}
                </Typography>

                <ArrowBackIosRoundedIcon
                onClick={() => {
                    setNextPossible(false)
                    setCurrent(current + 1)
                }}
                sx={{
                    cursor : "pointer",
                    fontSize : "2rem" ,
                    color : theme.fontColor ,
                    m : 2 ,
                    opacity : nextPossible ? "1" : "0.3",
                    pointerEvents : !nextPossible && "none",
                }}/>

            </Box>

            <ReaderSetting 
            setTheme={setTheme} 
            theme={theme}
            align={align}
            setAlign={setAlign}
            />
            
        </Box>
    );
}

export default Reader;
