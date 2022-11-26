import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { BannerForm } from "../global/utils/Forms";
import { useNavigate } from "react-router-dom"

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const EditBanner = () => {
    const navigate = useNavigate()
    return (
        <Box
        sx={{
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            minHeight : "80vh",
        }}>
            <Box
            sx={{
                width : "100%",
                height : "60px",
                display : "flex",
                justifyContent : "flex-end",
                alignItems : "center"
            }}>
                <IconButton
                onClick={() => {
                    navigate(-1);
                }}
                sx={{
                    mr : 1,
                }}>
                    <ArrowForwardIosRoundedIcon
                    sx={{
                        color : "black.main",
                        fontSize : "2rem",
                    }}/>
                </IconButton>
            </Box>

            <BannerForm/>
            
        </Box>
    );
}

export default EditBanner;
