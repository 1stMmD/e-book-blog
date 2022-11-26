import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SMButton = ({ children , color , Bcolor , disable , onClick , size}) => {
    return (
        <Button
        onClick={onClick ? onClick : () => {}}
        sx={{
            position : "relative",
            color : disable ? "black.light" : "white.main",
            minWidth:0,
            minHeight : 0 ,
            width : size === "responsive" ?
            {
                xs : 60 , 
                lg : 90
            } :
            60 ,
            height : size === "responsive" ? {
                xs : 40,
                lg : 60
            } : 
            40 ,
            borderRadius : "10px",
            bgcolor : disable ? "gray.main" : color + ".main" ,
            borderBottom : disable ? "" : `3px solid ${Bcolor}`,
            boxShadow : "0px 0px 5px rgba(0,0,0,.15)",
            pointerEvents : disable ? "none" : "inset",
            "&:hover" : {
                bgcolor : disable ? "gray.main" : color + ".main",
            },
            fontSize : size === "responsive" ? {
                xs : "1rem",
                lg : "1.3rem",
            } : "1rem",
        }}>
                {children}
        </Button>
    )
}

export default SMButton;