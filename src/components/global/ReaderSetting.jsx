import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Collapse from '@mui/material/Collapse';

import SettingsIcon from '@mui/icons-material/Settings';
import { setting } from "../../utils/devlopment";

const ReaderSetting = ({setTheme , theme , setAlign , align}) => {

    const [show , setShow] = useState(false);
    const [data , setData] = useState();
    const [showSetting , setShowSetting] = useState(false)
    
    return (
        <>
            <Box
            sx={{
                position : "absolute" ,
                left : 25,
                bottom : 50,
                borderRadius : "100px",
                height : show ? "130px" : "50px",
                width : "50px",
                bgcolor : show ? "primary.main" : "transparent",
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexDirection : "column",
                gap : .5,
                transition : "all 300ms",
            }}>
                { show && setting.map((item , idx) => {
                    return(
                    <Box 
                    onClick={() => {
                        setData(item)
                        setShowSetting(true)
                    }}
                    key={idx}>
                        {item.icons["default"]}
                    </Box>
                    )
                })}

                <SettingsIcon
                onFocus={() => {
                    console.log("yo")
                }}
                onClick={() => {
                    setShow(!show);
                    showSetting && setShowSetting(false);
                }}
                sx={{
                    color : show ?"white.main" : "primary.main",
                    cursor : "pointer",
                }}/>
            </Box>
            <Collapse
            in={showSetting}>
                <Box
                sx={{
                    position : "absolute",
                    bottom : "50%",
                    right : "50%",
                    transform : "translateY(50%) translateX(50%)",
                    width : 250 ,
                    height : 70 ,
                    borderRadius: 100,
                    boxShadow : "0 4px 12px rgba(10,10,10,.2)",
                    bgcolor : "primary.main" ,
                    display : showSetting ? "flex" : "none",
                    alignItems : "center",
                    justifyContent : "center",
                    
                }}>
                    <Fade in={data?.name === "bgcolor"}>
                        <Box
                        sx={{
                            gap : 2,
                            display : "flex",
                            alignItems : "center",
                        }}>
                            {data?.name === "bgcolor" && Object.keys(data.options).map((item , idx) => {
                            return (
                                <Box
                                onClick={() => {
                                    let theme = {
                                        name : item,
                                        color : data.options[item].color,
                                        fontColor : data.options[item].fontColor
                                    }
                                    setTheme(theme);
                                    localStorage.setItem("theme",JSON.stringify(theme));
                                }}
                                key={idx}
                                sx={{
                                    width : 40,
                                    height : 40,
                                    borderRadius : 1.5,
                                    bgcolor : data.options[item].color,
                                    display : "grid",
                                    placeItems : "center",
                                    cursor : "pointer",
                                    border : item === theme.name && `2px solid ${data.options[item].fontColor}`
                                }}>

                                    <Typography
                                    sx={{
                                        color : data.options[item].fontColor
                                    }}>
                                        متن
                                    </Typography>
                                    
                                </Box>
                            )
                            })}
                        </Box>
                    </Fade>
                    <Fade in={data?.name === "align"}>
                        <Box
                        sx={{
                            gap : 2,
                            display : "flex",
                        }}>
                            {data?.name === "align" && Object.keys(data.options).map((item , idx) => {
                                    return(
                                        <Box
                                        key={idx}
                                        onClick={() => {
                                            setAlign(data?.options[item])
                                            localStorage.setItem("align" , JSON.stringify(data?.options[item]))
                                        }}
                                        sx={{
                                            cursor : "pointer",
                                            display : "grid",
                                            placeItems : "center",
                                            borderBottom : align === data?.options[item] && "2px solid white"
                                        }}>
                                            {data.icons[item]}
                                        </Box>
                                        )
                            })}
                        </Box>
                    </Fade>

                </Box>
            </Collapse>
        </>
    );
}

export default ReaderSetting;
