import Box from "@mui/material/Box";

const Progress = () => {
    return (
        <Box
                sx={{
                    position : "relative",
                    width : "100px",
                    height : "2px",
                    mt : 1,
                    bgcolor : "grey.main",
                    boxShadow : "0 0 10px rgba(20,20,20,.2)",
                    borderRadius : "100px",
                    zIndex : "-1" ,
                    "&::before" : {
                        content : "''",
                        position : "absolute",
                        width : "50%",
                        height : "100%",
                        bgcolor : "primary.main",
                        top : "0",
                        left : "0",
                        borderRadius : "100px 0 0 100px",
                    },
                    "&::after" : {
                        content : "''",
                        position : "absolute",
                        width : "6px",
                        height : "6px",
                        bgcolor : "primary.main",
                        top : "50%",
                        left : "50%",
                        borderRadius:"50%",
                        transform : "translateY(-50%)"
                    },

                }}/>
    );
}

export default Progress;
