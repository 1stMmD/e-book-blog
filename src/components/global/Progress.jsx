import Box from "@mui/material/Box";

const Progress = ({percent}) => {
    return (
        <Box
                sx={{
                    position : "relative",
                    width : {
                        xs : "70px",
                        md : "90px",
                        lg : "130px",
                        xl : "170px",
                    } ,
                    height : "2px",
                    mt : 1,
                    bgcolor : "gray.main",
                    boxShadow : "0 0 10px rgba(20,20,20,.2)",
                    borderRadius : "100px",
                    zIndex : "-1" ,
                    "&::before" : {
                        content : "''",
                        position : "absolute",
                        width : `calc(${percent}% - 6px)`,
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
                        left : `calc(${percent}% - 6px)`,
                        borderRadius:"50%",
                        transform : "translateY(-50%)"
                    },

                }}/>
    );
}

export default Progress;
