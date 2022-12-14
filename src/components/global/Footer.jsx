import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Divider = ({type , sx}) => {
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
            },
            ...sx
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
                color : "black.dark",
                fontSize : "1rem",
                gridColumn : {
                    lg : "2/3"
                }
            }}>
                About
            </Typography>

            <Typography
            component="h5"
            sx={{
                color : "black.light",
                fontSize : ".8rem",
                width : "80%",
                textAlign : "center",
                gridColumn : {
                    lg : "2/3"
                },
            }}>
                Kotobu is a platform for summarizing books, you can read books summarized by others or can become a writer and share your knowledge
            </Typography>
            <Divider
            sx={{
                display : {
                    lg : "none"
                }
            }}/>

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
                    lg : "3/4"
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
                © All copyrights of this website belong to Mohammad jamali
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
                Made with ❤ by Mohammad Jamali
            </Typography>
            
        </Box>
    );
}

export default Footer;

