import Box from "@mui/material/Box";
import {Progress} from "../index";
import { useNavigate } from "react-router-dom";

const SavedBook = ({
    cover,
    id,
    progress
}) => {

    const navigate = useNavigate();

    return (
        <Box
        sx={{
            display : "grid",
            placeItems : "center",
            width: "fit-content",
            height : "fit-content",
            m : 2,
            gap : 1,
        }}>
            <Box
            onClick={() => {
                navigate(`/book/${id}`)
            }}
            component="img"
            alt="place holder"
            src={cover || "/Spinner.svg"}
            
            sx={{
                width : {
                    xs : "80px",
                    md : "100px",
                    lg : "140px",
                    xl : "180px",
                } ,
                height : {
                    xs :"120px",
                    md : "150px",
                    lg: "210px",
                    xl : "270px",
                },
                borderRadius : {
                    xs : "9px",
                    md : "13px",
                    lg : "14px",
                    xl : "18px"
                },
                cursor : "pointer",
            }}/>
            <Progress
            percent={progress}
            />
        </Box>
    );
}

export default SavedBook;
