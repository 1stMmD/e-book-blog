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
            bgcolor : type === "purple" ? "primary.main" : "grey.main",
            mt : 2, 
            mb : type === "purple" ? 1 : 2,

        }}/>
    )
}

const Footer = () => {
    return (
        <Box
        component="footer"
        sx={{
            width : "100%",
            display : "flex" ,
            flexDirection : "column" ,
            alignItems : "center",

        }}
        >

            <Divider/>

            <Typography
            component="h5"
            sx={{
                fontWeight : "600",
                color : "black.main",
                fontSize : "1rem"
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
            }}>
                کتبو سایت و اپلیکیشنی برای مقاله ها و پیشنهاد کتاب هست, در  کتبو میتوانید مهم ترین نکته ها از بهترین کتاب ها را در مدتی کوتاه  به صورت ساده یاد بگیرید 
            </Typography>

            <Divider/>

            <Box
            sx={{
                display : "flex",
                flexDirection : "row",
                justifyContent : "center",
                alignItems:  "center",
                gap : 1,
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
                fontSize : "10px",
                width : "100%",
                textAlign : "center",
            }}>
                .کلیه حقوق این سایت محفوظ و متعلق به تیم فُرست و کُتُبو میباشد© 
            </Typography>

            <Typography
            component="h5"
            sx={{
                fontWeight : "100",
                color : "white.main",
                fontSize : "10px",
                bgcolor : "primary.main",
                width : "100%",
                py : 1,
                mt : 1,
                textAlign : "center",
            }}>
                ساخته شده با  ❤  از طرف محمد جمالی
            </Typography>
            
        </Box>
    );
}

export default Footer;

