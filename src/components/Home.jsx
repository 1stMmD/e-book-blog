import Box from '@mui/material/Box';
import React from 'react';
import {CategoryBox} from "./index";
import { useDispatch } from 'react-redux';
import {changeCurrent} from "../redux/navbarSlice";

const Home = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(changeCurrent("home"))
    },[])

    return (
        <Box
        sx={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
            <CategoryBox 
            header="جدید ترین ها"
            type="banner"/>

            <CategoryBox 
            header="جدید ترین کتاب ها"
            type="book"/>

            <CategoryBox 
            header="جدید ترین کتاب ها"
            type="book"/>

            <CategoryBox 
            header="جدید ترین کتاب ها"
            type="book"/>
            
        </Box>
    );
}

export default Home;
