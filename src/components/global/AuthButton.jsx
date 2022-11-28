import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const AuthButton = ({text , onClick}) => {
    return (
        <Box
        onClick={onClick}
        component="button"
        sx={{
            mt : 1.5,
            py : 1,
            display : "grid",
            placeItems : "center",
            width : "100%",
            bgcolor : "primary.main",
            border : "none",
            borderRadius : "5px",
            boxShadow : "0 0 15px rgba(5,5,5,.15)",
            cursor : "pointer",
        }}>
            <Typography
            sx={{
                color : "white.main",
                fontFamily : "roboto",

            }}>
                {text}
            </Typography>
        </Box>
    );
}

export default AuthButton;
