import Paper from "@mui/material/Paper";

const BannerRef = ({cover , link , title}) => {
    return (
        <Paper
        onClick={() => {
            console.log("banner got clicked")
        }}
        onDragStart={(e) => {
            e.preventDefault();
        }}
        elevation={0}
        sx={{
            minWidth:"clamp(220px,50vw,700px)",
            minHeight:"clamp(110px,25vw,350px)",
            bgcolor:"#e1e1e1",
            borderRadius : "max(2vw , 10px)",
            scrollSnapAlign:"start",
            backgroundImage : cover ? `url(${cover})` : "",
            backgroundPosition : "center",
            backgroundSize : "cover",
            backgroundRepeat : "no-repeat",
            boxShadow: "0 0 5px rgba(0,0,0,.2)",
            cursor : "pointer",
        }}>
            
        </Paper>
    );
}

export default BannerRef;
