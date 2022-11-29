import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ConfirmPopupDelete = () => {
    return (
        <Box
        sx={{
            position : "fixed",
            width : "100%",
            height : "100vh",
            top : "0",
            left : "0",
            bgcolor : "rgba(20,20,20,.2)",
            zIndex : "10",
            display : "grid",
            placeItems : "center"
        }}>
            <Box
            sx={{
                width : "min(300px,80vw)",
                bgcolor : "white.main",
                display : "flex",
                flexDirection : "column",
                alignItems : "center"
            }}>
                <Box
                sx={{
                    bgcolor : "error.main",
                    p : 1,
                    borderRadius : "50%",
                    display : "grid",
                    placeItems : "center",
                    my : 2
                }}>

                    <DeleteForeverIcon
                    sx={{
                        color : "white.main",
                        fontSize : "3rem",
                    }}/>

                </Box>

                <Typography
                sx={{
                    fontSize : "1.2rem",
                    fontWeight : "600",
                    color : "black.dark",
                }}>
                    درخواست حذف کتاب
                </Typography>

                <Typography
                sx={{
                    fontSize : ".9rem",
                    color : "black.light",
                    width : "80%",
                    textAlign : "center"
                }}>
                    در صورت حذف شدن کتاب بازگردانی آن امکان پذیر نمی باشد
                </Typography>
            </Box>
        </Box>
    );
}

export default ConfirmPopupDelete;
