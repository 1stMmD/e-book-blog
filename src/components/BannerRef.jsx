import Paper from "@mui/material/Paper";

const BannerRef = () => {
    return (
        <Paper
        elevation={0}
        sx={{
            minWidth:"max(220px,50vw)",
            minHeight:"max(110px,25vw)",
            bgcolor:"#e1e1e1",
            borderRadius : "4vw",
            scrollSnapAlign:"start",
        }}>
            
        </Paper>
    );
}

export default BannerRef;
