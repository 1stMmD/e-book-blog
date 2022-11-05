import Box from "@mui/material/Box";

const Button = ({children , onClick}) => {
    return(
        <Box
        onClick={onClick}
        component="button"
        sx={{
            border : "none",
            borderRadius : "50%",
            display : "grid",
            placeItems : "center",
            bgcolor : "primary.main",
            boxShadow : "0 0 5px rgba(10,10,10,.2)",
            p : .5,
            cursor : "pointer",
        }}>
            {children}
        </Box>
    )
}

export default Button;