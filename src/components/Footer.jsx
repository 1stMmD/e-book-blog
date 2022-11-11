import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Divider = ({type}) => {
    return (
        <Box
        sx={{
            width : type === "purple" ? "60%" : "80%",
            height : "2px",
            bgcolor : type === "purple" ? "primary.main" : "gray.main",
            mt : 2, 
            mb : type === "purple" ? 1 : 2,
            gridColumn : {
                lg : "1/5"
            }
        }}/>
    )
}

const Footer = () => {
    return (
        <Box
        component="footer"
        sx={{
            width : "100%",
            display : "grid" ,
            placeItems : "center",
            gridTemplateColumns : {
                lg : "1fr 1fr 1fr 1fr"
            },
            gridTemplateRows : "1fr"
        }}
        >

            <Divider/>

            <Typography
            component="h5"
            sx={{
                fontWeight : "600",
                color : "black.main",
                fontSize : "1rem",
                gridColumn : {
                    lg : "3/4"
                }
            }}>
                درباره ما
            </Typography>

            <Typography
            component="h5"
            sx={{
                color : "black.main",
                fontSize : ".8rem",
                width : "80%",
                textAlign : "center",
                gridColumn : {
                    lg : "3/4"
                },
            }}>
                کتبو سایت و اپلیکیشنی برای مقاله ها و پیشنهاد کتاب هست, در  کتبو میتوانید مهم ترین نکته ها از بهترین کتاب ها را در مدتی کوتاه  به صورت ساده یاد بگیرید 
            </Typography>

            { window.innerWidth <= 769 && <Divider/>}

            <Box
            sx={{
                display : "flex",
                flexDirection : "row",
                justifyContent : "center",
                alignItems:  "center",
                gap : 1,
                gridRow : {
                    lg : "2/4"
                },
                gridColumn : {
                    lg : "2/3"
                }
            }}
            >
                <InstagramIcon 
                sx={{
                    color:"primary.main"
                }}/>
                <TwitterIcon
                sx={{
                    color:"primary.main"
                }}/>
                <TelegramIcon
                sx={{
                    color:"primary.main"
                }}/>
            </Box>

            <Divider type="purple"/>

            <Typography
            component="h5"
            sx={{
                fontWeight : "100",
                color : "primary.main",
                fontSize : {
                    xs : "10px",
                    md : "12px",
                },
                width : "100%",
                textAlign : "center",
                gridColumn : {
                    lg : "1/5"
                }
            }}>
                .کلیه حقوق این سایت محفوظ و متعلق به تیم فُرست و کُتُبو میباشد© 
            </Typography>

            <Typography
            component="h5"
            sx={{
                fontWeight : "100",
                color : "white.main",
                fontSize : {
                    xs : "10px",
                    md : "12px",
                },
                bgcolor : "primary.main",
                width : "100%",
                py : 1,
                mt : 1,
                textAlign : "center",
                gridColumn : {
                    lg:"1/5"
                }
            }}>
                ساخته شده با  ❤  از طرف محمد جمالی
            </Typography>
            
        </Box>
    );
}

export default Footer;

