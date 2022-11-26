import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import {changeCurrent} from "../../redux/navbarSlice";
import { SavedBook } from "../index";
import Box from "@mui/material/Box";
import { useSelector } from 'react-redux';

const Saved = () => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks") || "[]");
    const { books } = useSelector(state => state.dataSlice);

    const findBooks = () => {
        let arr = savedBooks.map(item => item.bookId.toString())
        let finale = [];
         books?.data?.map(item => {
            if(arr.includes(item.id.toString())){
                let idx = savedBooks.findIndex(i => i?.bookId?.toString() === item?.id?.toString())
                finale.push({
                    ...item,
                    progress : savedBooks[idx]?.progress
                })
            }
        })
        return finale
    }

    const data = books && findBooks()

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(changeCurrent("saved"))
    },[])

    return (
        <Box
        sx={{
            display : "grid",
            placeItems : "center",
        }}
        >
            <Box
            sx={{
                display : "grid",
                placeItems : "center",
                gridTemplateColumns :{ 
                    xs :"repeat(auto-fit,minmax(100px,1fr))",
                    md :"repeat(auto-fit,minmax(125px,1fr))",
                    lg :"repeat(auto-fit,minmax(165px,1fr))",
                    xl :"repeat(auto-fit,minmax(220px,1fr))",
                },
                width : "min(1000px , 80vw)",
                minHeight : "70vh"
            }}>
                
                {
                    data.map((item , idx) => {
                        return(
                        <SavedBook
                        key={idx}
                        cover={item.cover}
                        id={item.id}
                        progress={item.progress}
                        />
                        )
                    })
                }

            </Box>

        </Box>
    );
}

export default Saved;
