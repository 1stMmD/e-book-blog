import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Box from "@mui/material/Box";
import { changeCurrent } from '../../redux/navbarSlice';
import { useDispatch } from 'react-redux';
import Preview from "../global/utils/Preview";

const Requests = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(changeCurrent("requests"))
    })
    
    return (
        <Box
        sx={{
            display : "flex",
            justifyContent : "center",
            width : "100%",
            minHeight : "80vh",
            mt : {
                xs : 1,
                lg : 3
            }
        }}>
            <Box
            sx={{
                display : "grid",
                gridTemplateColumns :{ 
                    xs :"repeat(auto-fit,minmax(100px,1fr))",
                    md :"repeat(auto-fit,minmax(125px,1fr))",
                    lg :"repeat(auto-fit,minmax(165px,1fr))",
                    xl :"repeat(auto-fit,minmax(220px,1fr))",
                },
                placeItems : "center",
                width : "min(1000px , 80vw)",
                rowGap : {
                    xs : 1,
                    lg : 3
                },
            }}>
                <Preview type="request"/>
                <Preview type="request"/>
                <Preview type="request"/>
                <Preview type="request"/>
                <Preview type="request"/>
                <Preview type="request"/>
            </Box>
        </Box>
    );
}

export default Requests;
