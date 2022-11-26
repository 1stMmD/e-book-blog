import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import {BookRef , BannerRef} from "../index";

const CategoryBox = ({header , data , type , isPending}) => {


    return (
        <Box
        dir="rtl"
        sx={{
            py : 1,
            position : "relative",
            width : type === "bookPage" ? "80vw" : "min(1000px,90vw)",
            display : "flex",
            flexDirection : "column",
            mt :  type === "bookPage" ? 0 : 0,
        }}>
            <Typography
            component="h3"
            sx={{
                mt : 1,
                mr : 2,
                fontSize: type === "banner" ? {
                    xs : "1.5rem",
                    md : "1.9rem",
                    lg : "2.5rem"
                } : {
                    xs : "1.2rem",
                    md : "1.5rem",
                    lg : "2rem",
                },
                fontWeight:"600",
                color:"black.dark",
            }}>
                {header}
            </Typography>

            <Box
            component="div"
            sx={{
                position : "relative",
                width:"100%",
                overflowX : "auto",
                display:"flex",
                gap : 1,
                p : "5px 0",
            }}>
                {isPending && (type === "banner" ? 
                    <BannerRef/>
                    :
                    <BookRef/>)
                }
                {data && data.map((item , idx) => {
                    return type === "banner" ? 
                                <BannerRef
                                key={idx}
                                title={item.title}
                                link={item.link}
                                cover={item.cover}
                                /> :
                                <BookRef
                                key={idx} 
                                author={item.author} 
                                name={item.name}
                                cover={item.cover}
                                bookID={item.id}/>
                })}
            </Box>

        </Box>
    );
}

export default CategoryBox;
