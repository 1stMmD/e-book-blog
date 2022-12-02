import Box from "@mui/material/Box";

const Button = ({children , onClick , sx}) => {
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
            boxShadow : "0 0 6px rgba(5,5,5,.15)",
            transition : "background-color 300ms",
            ...sx
        }}>
            {children}
        </Box>
    )
}

export default Button;