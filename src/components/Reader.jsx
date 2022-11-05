import React , {useState , useEffect , useRef , useCallback} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import {ReaderSetting} from "./index";

const Reader = () => {

    const test = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`
            
    const [current , setCurrent] = useState(JSON.parse(localStorage.getItem(`current`)) || 1);
    const [nextPossible , setNextPossible] = useState(true);
    const [previusPossible , setPreviusPossible] = useState(true);
    const [currentPage , setCurrentPage] = useState([])

    //this will turn to a state
    //      👇🏻
    const fontSize = 20;
    const [theme , setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || {name : "default" , color : "#fff" , fontColor : "#252525"})
    const [align , setAlign] = useState(JSON.parse(localStorage.getItem("align")) || "justify");

    const box = useRef()
    const page = useRef()

    const findPage = useCallback((length) => {
        let text = "";
        let start = (current - 1)  * length;
        let end = current * length;
        let finale = [];

        for(start ; test[start] !== " " && test[start - 1] ;start++){
            if(start > test.length) break;
            continue;
        }

        for(end ; test[end] !== " ";end++){
            if(end > test.length) break;
            continue;
        }

        end >= test.length ? setNextPossible(false) : setNextPossible(true);
        start <= 0 ? setPreviusPossible(false) : setPreviusPossible(true);

        text = test.slice(start , end);
        text = text.replaceAll("\n" , "☻");
               
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
        
    },[current , test])

    useEffect(() => {

        let {current : p} = page;

        let length = Math.round((p.offsetWidth * p.offsetHeight) / (fontSize * (fontSize * 0.80))) ;

        setCurrentPage(findPage(length))

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
                    if(item === "☻") return <br key={idx}/>
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
