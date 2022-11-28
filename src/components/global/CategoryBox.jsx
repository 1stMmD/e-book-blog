import { useEffect , useRef , useState} from "react"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {BookRef , BannerRef} from "../index";

const CategoryBox = ({header , data , type , isPending}) => {
    const [rtl , setRtl] = useState(true)
    const container = useRef()
    const books = useRef()
    const value = useRef(0)
    const startPoint = useRef(0)

    useEffect(() => {
        if(container , books){

            const { current : cont } = container;

            const fit = () => {
                let width = cont.firstChild.offsetWidth - cont.offsetWidth
                let delay = 0;

                if(rtl){

                    cont.style.transition = "all 300ms";
                    if(value.current > width){
                        value.current = width;
                        cont.style.transform = `translate3d(${value.current}px,0,0)`;
                        delay = 300
                        setTimeout(() => {
                            cont.style.pointerEvents = "inherit"
                        },300)
                    }
                    if(value.current < 0){
                        value.current = 0;
                        cont.style.transform = `translate3d(${value.current}px,0,0)`;
                        delay = 300
                        setTimeout(() => {
                            cont.style.pointerEvents = "inherit"
                        },300)
                    }
                    setTimeout(() => {
                        cont.style.transition = "none"
                    },delay)
                    return

                }
                if(!rtl){

                    cont.style.transition = "all 300ms";
                    if(value.current < width * -1){
                        value.current = width * -1;
                        cont.style.transform = `translate3d(${value.current}px,0,0)`;
                        delay = 300
                        setTimeout(() => {
                            cont.style.pointerEvents = "inherit"
                        },300)
                    }
                    if(value.current > 0){
                        value.current = 0;
                        cont.style.transform = `translate3d(${value.current}px,0,0)`;
                        delay = 300
                        setTimeout(() => {
                            cont.style.pointerEvents = "inherit"
                        },300)
                    }
                    setTimeout(() => {
                        cont.style.transition = "none"
                    },delay)
                    return

                }

            }

            const handleTouch = (e) => {
                let clientX = e.touches[0].clientX;
                let cvalue = value.current;
                let X = clientX - startPoint.current;
                value.current = cvalue + X;
                cont.style.transform = `translate3d(${value.current}px,0,0)`
                startPoint.current = clientX 
            }

            const handle = (e) => {
                let clientX = e.layerX;
                let cvalue = value.current;
                let X = clientX - startPoint.current;
                value.current = cvalue + X;
                cont.style.transform = `translate3d(${value.current}px,0,0)`
                startPoint.current = clientX;
            }
            
            cont.addEventListener("mousedown" , (e) => {
                setTimeout(() => {
                    books.current.firstChild.style.pointerEvents = "inherit"
                },200)
                startPoint.current = e.layerX ;
                cont.addEventListener("mousemove" , handle)
            })

            cont.addEventListener("mouseup" , (e) => {
                setTimeout(() => {
                    books.current.firstChild.style.pointerEvents = "none"
                },200)
                fit()
                cont.removeEventListener("mousemove" , handle)
            })

            cont.addEventListener("mouseleave" , (e) => {
                setTimeout(() => {
                    books.current.firstChild.style.pointerEvents = "none"
                },200)
                fit()
                cont.removeEventListener("mousemove" , handle)
            })

            cont.addEventListener("touchstart" , (e) => {
                startPoint.current = e.touches[0].clientX 
                cont.addEventListener("touchmove" , handleTouch)
            },true)

            cont.addEventListener("touchend" , () => {
                fit()
                cont.removeEventListener("mousemove" , handleTouch)
            })

        }
    },[container])
    
    return (
        <Box
        dir={rtl ? "rtl" : "ltr"}
        sx={{
            py : 1,
            position : "relative",
            width : type === "bookPage" ? "80vw" : "min(1100px,90vw)",
            display : "flex",
            flexDirection : "column",
            mt :  type === "bookPage" ? 0 : 0,
            overflowX : "hidden",
        }}>
            <Typography
            component="h3"
            sx={{
                mt : 1,
                fontSize:{
                    xs : "1rem",
                    md : "1.2rem",
                    lg : "1.7rem",
                },
                fontWeight:"600",
                color:"black.dark",
            }}>
                {header}
            </Typography>

            <Box
            ref={container}
            component="div"
            sx={{
                position : "relative",
                width:"100%",
                display:"flex",
                
                p : "5px 0",
                transform : "translate3d(0,0,0)",
                cursor : "grab"
            }}>
                <Box
                ref={books}
                sx={{
                    display : "flex",
                    gap : 4,
                    position : "relative",
                }}>
                
                <Box
                sx={{
                    pointerEvents : "none",
                    display : "flex",
                    position : "absolute",
                    bgcolor : "transparent",
                    width : "100%",
                    height : "100%"
                }}/>

                {isPending && (type === "banner" ? 
                    <BannerRef/>
                    :
                    <BookRef/>
                    )
                }
                {data && data.map((item , idx) => {
                    return type === "banner" ? 
                                
                                    <BannerRef
                                    key={idx}
                                    title={item.title}
                                    link={item.link}
                                    cover={item.cover}
                                    /> 
                                
                                :

                                    <BookRef
                                    key={idx} 
                                    author={item.author} 
                                    name={item.name}
                                    cover={item.cover}
                                    bookID={item.id}/>
                })}
                </Box>
            </Box>

        </Box>
    );
}

export default CategoryBox;
