import Paper from "@mui/material/Paper";

const BannerRef = () => {
    return (
        <Paper
        elevation={0}
        sx={{
            minWidth:"280px",
            height:"140px",
            bgcolor:"#e1e1e1",
            borderRadius : "15px",
            scrollSnapAlign:"start",
        }}>
            
        </Paper>
    );
}

export default BannerRef;
